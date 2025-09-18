import { Brain, Sparkles } from "lucide-react";

const points = [
  { left: true, title: "Focused Mind", subtitle: "Knowledge Retention" },
  { left: true, title: "Analytical Mind", subtitle: "Knowledge Application" },
  { left: true, title: "Conscientious Mind", subtitle: "Knowledge Acquisition" },
  { left: false, title: "Inventive Mind", subtitle: "Knowledge Development" },
  { left: false, title: "Empathetic Mind", subtitle: "Emotional balance grows learning" },
];

const PentemindSection = () => {
  return (
    <section className="relative overflow-hidden py-20 bg-background">
      {/* soft background wave */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-0 right-0 h-72 bg-primary/5 rounded-b-[50%]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-cute text-foreground mb-2">PENTEMIND</h2>
          <p className="text-foreground/70 font-semibold">The Learning Minds</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* left bullets */}
          <div className="hidden lg:flex flex-col gap-10">
            {points.filter(p => p.left).map((p) => (
              <div key={p.title} className="flex items-center gap-3">
                <span className="h-3 w-3 rounded-full border-2 border-primary" />
                <div>
                  <div className="text-xl font-playful text-foreground">{p.title}</div>
                  <div className="text-sm text-foreground/70">{p.subtitle}</div>
                </div>
              </div>
            ))}
          </div>

          {/* center brain */}
          <div className="relative mx-auto">
            <div className="mx-auto h-64 w-64 rounded-full bg-gradient-to-r from-primary to-accent shadow-magical flex items-center justify-center will-change-transform" style={{transform: 'translateZ(0)'}}>
              <Brain className="text-secondary-foreground" size={80} />
            </div>
            <Sparkles className="absolute -top-3 -right-3 text-cta animate-bounce-gentle" size={22} />
          </div>

          {/* right bullets */}
          <div className="hidden lg:flex flex-col gap-10">
            {points.filter(p => !p.left).map((p) => (
              <div key={p.title} className="flex items-center gap-3 justify-end">
                <div className="text-right">
                  <div className="text-xl font-playful text-foreground">{p.title}</div>
                  <div className="text-sm text-foreground/70">{p.subtitle}</div>
                </div>
                <span className="h-3 w-3 rounded-full border-2 border-accent" />
              </div>
            ))}
          </div>
        </div>

        {/* mobile list */}
        <div className="lg:hidden mt-10 grid gap-4">
          {points.map(p => (
            <div key={p.title} className="rounded-2xl bg-card p-4 shadow-soft">
              <div className="text-lg font-playful text-foreground">{p.title}</div>
              <div className="text-sm text-foreground/70">{p.subtitle}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PentemindSection;


