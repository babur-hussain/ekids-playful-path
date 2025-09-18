import type { VercelRequest, VercelResponse } from '@vercel/node';
import { MongoClient } from 'mongodb';

const uri = process.env.MONGO_URI || 'mongodb+srv://ekids:TpwyczbWh9tghnoX@cluster0.haunkpk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const dbName = process.env.DB_NAME || 'ekids';

let client: MongoClient | null = null;
async function getClient() {
  if (client && (client as any).topology?.isConnected()) return client;
  client = new MongoClient(uri);
  await client.connect();
  return client;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).json({ ok: false, error: 'Method not allowed' });
  try {
    const c = await getClient();
    const db = c.db(dbName);
    const col = db.collection('enrollments');
    const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
    const doc = { ...body, formType: 'enroll', createdAt: new Date(), updatedAt: new Date(), status: 'new' };
    const r = await col.insertOne(doc);
    res.json({ ok: true, id: r.insertedId });
  } catch (e: any) {
    res.status(500).json({ ok: false, error: e.message });
  }
}


