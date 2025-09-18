import type { VercelRequest, VercelResponse } from '@vercel/node';
import jwt from 'jsonwebtoken';

export function requireAdmin(req: VercelRequest, res: VercelResponse) {
  const JWT_SECRET = process.env.JWT_SECRET || 'change_this_secret';
  const auth = (req.headers.authorization || '').replace(/^Bearer\s+/i, '');
  try {
    const decoded: any = jwt.verify(auth, JWT_SECRET);
    if (decoded?.role === 'admin') return true;
  } catch (e) {}
  res.status(401).json({ ok: false, error: 'Unauthorized' });
  return false;
}


