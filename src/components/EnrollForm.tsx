import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { submitEnroll } from '@/lib/api';
import { useGlassDialog } from '@/components/ui/GlassDialog';
import { useToast } from '@/hooks/use-toast';

const EnrollForm = () => {
  const { toast } = useToast();
  const { close } = useGlassDialog();
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    childName: '',
    childAge: '',
    parentName: '',
    parentPhone: '',
    parentEmail: '',
    additionalInfo: '',
  });

  const onChange = (k: string, v: string) => setFormData(prev => ({ ...prev, [k]: v }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.childName || !formData.parentName || !formData.parentPhone) {
      toast({ title: 'Please fill required fields', variant: 'destructive' });
      return;
    }
    setLoading(true);
    try {
      const resp = await fetch('/api/enroll', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      let r: any = {};
      try { r = await resp.json(); } catch { r = { ok: false, error: 'Server error' }; }
      if (resp.ok && r?.ok) {
        setSuccess(true);
        setTimeout(() => {
          close();
          setSuccess(false);
        }, 1600);
        setFormData({ childName: '', childAge: '', parentName: '', parentPhone: '', parentEmail: '', additionalInfo: '' });
      } else {
        throw new Error(r?.error || 'Failed');
      }
    } catch (err: any) {
      toast({ title: 'Submission failed', description: err.message, variant: 'destructive' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="grid gap-4 relative">
      {success && (
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="rounded-2xl bg-card/80 backdrop-blur-md border border-white/30 shadow-2xl px-8 py-10 text-center animate-in fade-in-0 zoom-in-95">
            <div className="text-5xl mb-4">🎉</div>
            <div className="text-xl font-playful text-foreground mb-2">Submitted Successfully!</div>
            <div className="text-foreground/70">We’ll contact you shortly.</div>
          </div>
        </div>
      )}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label>Child's Name *</Label>
          <Input value={formData.childName} onChange={e => onChange('childName', e.target.value)} placeholder="Enter child's name" />
        </div>
        <div>
          <Label>Child's Age</Label>
          <Input value={formData.childAge} onChange={e => onChange('childAge', e.target.value)} placeholder="e.g. 4" />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label>Your Name *</Label>
          <Input value={formData.parentName} onChange={e => onChange('parentName', e.target.value)} placeholder="Enter your name" />
        </div>
        <div>
          <Label>Phone Number *</Label>
          <Input value={formData.parentPhone} onChange={e => onChange('parentPhone', e.target.value)} placeholder="Your contact number" />
        </div>
      </div>
      <div>
        <Label>Email</Label>
        <Input value={formData.parentEmail} onChange={e => onChange('parentEmail', e.target.value)} placeholder="you@example.com" />
      </div>
      <div>
        <Label>Additional Info</Label>
        <Textarea value={formData.additionalInfo} onChange={e => onChange('additionalInfo', e.target.value)} placeholder="Any details you'd like to share" />
      </div>
      <Button type="submit" disabled={loading}>{loading ? 'Submitting...' : 'Submit Enrollment'}</Button>
    </form>
  );
};

export default EnrollForm;


