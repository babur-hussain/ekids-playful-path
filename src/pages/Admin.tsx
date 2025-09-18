import { useEffect, useState } from 'react';
import { STATUS_OPTIONS } from '@/lib/status';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

type Item = any;

const Admin = () => {
  const [loading, setLoading] = useState(true);
  const [enrollments, setEnrollments] = useState<Item[]>([]);
  const [appointments, setAppointments] = useState<Item[]>([]);
  const [selected, setSelected] = useState<{ id: string; type: 'enroll'|'appointment'; status: string; remark: string } | null>(null);

  const load = async () => {
    setLoading(true);
    const password = localStorage.getItem('ekids_admin_pw') || '';
    const r = await fetch('/api/admin-list', { headers: { 'x-admin-password': password } });
    const j = await r.json();
    if (j?.ok) {
      setEnrollments(j.enrollments || []);
      setAppointments(j.appointments || []);
    }
    setLoading(false);
  };

  useEffect(() => { load(); }, []);

  const save = async () => {
    if (!selected) return;
    if (!selected.remark) return alert('Remark is required');
    const password = localStorage.getItem('ekids_admin_pw') || '';
    await fetch('/api/admin-update', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(selected),
      headers: { 'Content-Type': 'application/json', 'x-admin-password': password },
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
      <div className="mb-6 flex items-center gap-3">
        <Input type="password" placeholder="Admin password" defaultValue={localStorage.getItem('ekids_admin_pw')||''} onBlur={(e)=>localStorage.setItem('ekids_admin_pw', e.target.value)} className="max-w-xs" />
        <Button variant="outline" onClick={load}>Unlock/Refresh</Button>
      </div>
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


