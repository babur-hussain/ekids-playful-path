import type { VercelRequest, VercelResponse } from '@vercel/node';
import { MongoClient, ObjectId } from 'mongodb';
import { requireAdmin } from './_guard';

export const config = { runtime: 'nodejs' };

const uri = process.env.MONGO_URI!;
const dbName = process.env.DB_NAME || 'ekids';
let client: MongoClient | null = null;
async function getClient() { if (!client) { client = new MongoClient(uri); await client.connect(); } return client; }

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'PUT') return res.status(405).json({ ok: false, error: 'Method not allowed' });
  if (!requireAdmin(req, res)) return;
  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
    const { id, type, status, remark } = body;
    if (!id || !type || !status || !remark) return res.status(400).json({ ok: false, error: 'id, type, status, remark required' });
    const colName = type === 'enroll' ? 'enrollments' : 'appointments';
    const c = await getClient();
    const db = c.db(dbName);
    await db.collection(colName).updateOne({ _id: new ObjectId(id) }, { $set: { status, staffNotes: remark, updatedAt: new Date() } });
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json({ ok: true });
  } catch (e: any) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(500).json({ ok: false, error: e.message });
  }
}


