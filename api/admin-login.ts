import type { VercelRequest, VercelResponse } from '@vercel/node';
import jwt from 'jsonwebtoken';

export const config = { runtime: 'nodejs' };

const DEFAULT_EMAIL = process.env.ADMIN_EMAIL || 'admin@ekids.com';
const DEFAULT_PASSWORD = process.env.ADMIN_PASSWORD || 'ekids129@##12849';
const JWT_SECRET = process.env.JWT_SECRET || 'change_this_secret';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).json({ ok: false, error: 'Method not allowed' });
  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
    const { email, password } = body;
    if (email === DEFAULT_EMAIL && password === DEFAULT_PASSWORD) {
      const token = jwt.sign({ sub: email, role: 'admin' }, JWT_SECRET, { expiresIn: '12h' });
      return res.json({ ok: true, token });
    }
    return res.status(401).json({ ok: false, error: 'Invalid credentials' });
  } catch (e: any) {
    return res.status(500).json({ ok: false, error: e.message });
  }
}


