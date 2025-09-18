import { useEffect, useState } from 'react';
import { STATUS_OPTIONS } from '@/lib/status';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

type Item = any;

const Admin = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [token, setToken] = useState<string>(localStorage.getItem('ekids_admin_token') || '');
  const [login, setLogin] = useState({ email: localStorage.getItem('ekids_admin_email')||'', password: '' });
  const [enrollments, setEnrollments] = useState<Item[]>([]);
  const [appointments, setAppointments] = useState<Item[]>([]);
  const [selected, setSelected] = useState<{ id: string; type: 'enroll'|'appointment'; status: string; remark: string } | null>(null);

  const load = async () => {
    setLoading(true);
    setError(null);
    try {
      const r = await fetch('/api/admin-list', { headers: { 'Authorization': `Bearer ${token}` } });
      let j: any = {};
      try { j = await r.json(); } catch { j = { ok: false, error: 'Server error' }; }
      if (r.ok && j?.ok) {
        setEnrollments(j.enrollments || []);
        setAppointments(j.appointments || []);
      } else {
        setError(j?.error || 'Failed to fetch');
      }
    } catch (e: any) {
      setError(e.message || 'Network error');
    }
    setLoading(false);
  };

  useEffect(() => {
    if (token) {
      load();
    } else {
      setLoading(false);
      setEnrollments([]);
      setAppointments([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  const save = async () => {
    if (!selected) return;
    if (!selected.remark) return alert('Remark is required');
    await fetch('/api/admin-update', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
      body: JSON.stringify(selected),
    });
    setSelected(null);
    await load();
  };

  const Row = ({ item, type }: { item: Item; type: 'enroll'|'appointment' }) => (
    <div className="rounded-2xl bg-card p-4 shadow-soft flex flex-col gap-2">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="font-semibold text-foreground">{item.parentName || item.childName || '—'}</div>
        <div className="text-xs text-foreground/60">{new Date(item.createdAt).toLocaleString()}</div>
      </div>
      <div className="text-sm text-foreground/70">Phone: {item.parentPhone || '—'} • Age: {item.childAge || '—'}</div>
      <div className="grid sm:grid-cols-[200px_1fr_auto] gap-3 items-center mt-2">
        <Select value={selected?.id===String(item._id)?selected.status:(item.status||'new')} onValueChange={(v)=>setSelected({ id:String(item._id), type, status:v as string, remark: selected?.id===String(item._id)?selected.remark:'' })}>
          <SelectTrigger className="bg-background"><SelectValue placeholder="Status" /></SelectTrigger>
          <SelectContent>
            {STATUS_OPTIONS.map(o => <SelectItem key={o.value} value={o.value}>{o.label}</SelectItem>)}
          </SelectContent>
        </Select>
        <Input placeholder="Remark (required)" value={selected?.id===String(item._id)?(selected.remark||''):(item.staffNotes||'')} onChange={(e)=>setSelected({ id:String(item._id), type, status:(selected?.id===String(item._id)?selected.status:(item.status||'new')), remark:e.target.value })} />
        <Button onClick={save} disabled={!selected || selected.id!==String(item._id) || !selected.remark}>Save</Button>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-cute text-foreground mb-6">Admin Panel</h1>
      {!token && (
        <form className="mb-6 grid sm:grid-cols-[1fr_1fr_auto] gap-3 items-center" onSubmit={async (e)=>{e.preventDefault(); setError(null); const r=await fetch('/api/admin-login',{method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(login)}); const j=await r.json(); if(r.ok&&j?.ok){ localStorage.setItem('ekids_admin_token', j.token); localStorage.setItem('ekids_admin_email', login.email); setToken(j.token); } else { setError(j?.error||'Invalid credentials'); }}}>
          <Input type="email" placeholder="Admin email" autoComplete="email" value={login.email} onChange={(e)=>setLogin(v=>({...v, email:e.target.value}))} className="max-w-xs"/>
          <Input type="password" placeholder="Admin password" autoComplete="current-password" value={login.password} onChange={(e)=>setLogin(v=>({...v, password:e.target.value}))} className="max-w-xs"/>
          <Button variant="outline" type="submit">Sign In</Button>
        </form>
      )}
      {token && (
        <div className="mb-6 flex items-center gap-3">
          <Button variant="outline" onClick={()=>load()}>Refresh</Button>
          <Button variant="destructive" onClick={()=>{localStorage.removeItem('ekids_admin_token'); setToken('');}}>Sign Out</Button>
        </div>
      )}
      {error && <div className="text-destructive mb-4">{error}</div>}
      {loading ? (
        <div className="text-foreground/70">Loading…</div>
      ) : (
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-playful mb-4">Enrollments</h2>
            <div className="grid gap-4">
              {enrollments.map((it:any)=>(<Row key={String(it._id)} item={it} type="enroll" />))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-playful mb-4">Appointments</h2>
            <div className="grid gap-4">
              {appointments.map((it:any)=>(<Row key={String(it._id)} item={it} type="appointment" />))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;


