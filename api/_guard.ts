import type { VercelRequest, VercelResponse } from '@vercel/node';

export function requireAdmin(req: VercelRequest, res: VercelResponse) {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) return true; // no password set -> open
  const got = (req.headers['x-admin-password'] as string) || '';
  if (got && got === expected) return true;
  res.status(401).json({ ok: false, error: 'Unauthorized' });
  return false;
}


