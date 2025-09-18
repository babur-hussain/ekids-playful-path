import { ShieldCheck, Sparkles, Users } from "lucide-react";

const items = [
  {
    icon: Sparkles,
    title: "Holistic Learning",
    desc: "Balanced growth across academics, play, and life skills.",
  },
  {
    icon: Users,
    title: "Expert Educators",
    desc: "Caring teachers committed to every child's potential.",
  },
  {
    icon: ShieldCheck,
    title: "Safe and Secure",
    desc: "Protected, child‑friendly environment for peace of mind.",
  },
  {
    icon: Sparkles,
    title: "Innovative Learning",
    desc: "Modern methods that make learning joyful and impactful.",
  },
];

const WhyChooseSection = () => {
  return (
    <section className="py-20 bg-gradient-soft relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-cute text-foreground">Why Choose eKids?</h2>
          <p className="mt-3 text-foreground/70 max-w-2xl mx-auto">
            Your trusted partner in exceptional early education—where care, creativity, and curiosity come together.
          </p>
        </div>

        {/* Dotted connector style */}
        <div className="relative">
          <svg className="absolute inset-x-0 -top-6 hidden lg:block" height="120" viewBox="0 0 1200 120" fill="none">
            <path d="M20 60 C 220 20, 380 100, 600 60 S 980 20, 1180 60" stroke="currentColor" className="text-primary/30" strokeDasharray="6 10" strokeWidth="2" />
          </svg>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {items.map((item, idx) => (
              <div key={item.title} className="group bg-card rounded-3xl p-6 text-center shadow-soft hover:shadow-playful transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-soft mb-4">
                  <item.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-playful text-xl text-foreground mb-2">{item.title}</h3>
                <p className="text-foreground/70 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;


