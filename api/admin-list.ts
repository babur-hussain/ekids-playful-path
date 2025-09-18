import type { VercelRequest, VercelResponse } from '@vercel/node';
import { MongoClient } from 'mongodb';
import { requireAdmin } from './_guard';

export const config = { runtime: 'nodejs' };

const uri = process.env.MONGO_URI!;
const dbName = process.env.DB_NAME || 'ekids';
let client: MongoClient | null = null;
async function getClient() { if (!client) { client = new MongoClient(uri); await client.connect(); } return client; }

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') return res.status(405).json({ ok: false, error: 'Method not allowed' });
  if (!requireAdmin(req, res)) return;
  try {
    const c = await getClient();
    const db = c.db(dbName);
    const enrollments = await db.collection('enrollments').find({}).sort({ createdAt: -1 }).limit(1000).toArray();
    const appointments = await db.collection('appointments').find({}).sort({ createdAt: -1 }).limit(1000).toArray();
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json({ ok: true, enrollments, appointments });
  } catch (e: any) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(500).json({ ok: false, error: e.message });
  }
}


