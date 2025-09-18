import { Brain, Sparkles } from "lucide-react";

const leftRows = [
  { title: "Focused Mind", subtitle: "Knowledge Retention" },
  { title: "Analytical Mind", subtitle: "Knowledge Application" },
  { title: "Conscientious Mind", subtitle: "Knowledge Acquisition" },
];

const rightRows = [
  { title: "Inventive Mind", subtitle: "Knowledge Development" },
  { title: "Empathetic Mind", subtitle: "Emotional Balance" },
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
          <h2 className="text-4xl lg:text-5xl font-cute text-foreground mb-2">PENTEMIND</h2>
          <p className="text-foreground/70 font-semibold">The Learning Minds</p>
        </div>

        {/* Desktop layout with connected rows */}
        <div className="hidden lg:grid lg:grid-cols-[1fr_auto_1fr] gap-12 items-center">
          {/* Left side rows */}
          <div className="space-y-12">
            {leftRows.map((p) => (
              <div key={p.title} className="grid grid-cols-[auto_1fr_auto] items-center gap-3">
                <div>
                  <div className="text-2xl font-playful text-foreground leading-tight">{p.title}</div>
                  <div className="text-sm text-foreground/70">{p.subtitle}</div>
                </div>
                {/* connector line */}
                <div className="h-px w-full bg-gradient-to-r from-foreground/30 to-transparent" />
                <span className="h-3 w-3 rounded-full border-2 border-primary" />
              </div>
            ))}
          </div>

          {/* Brain center */}
          <div className="relative mx-auto">
            <div className="h-64 w-64 rounded-full bg-gradient-to-r from-primary to-accent shadow-magical flex items-center justify-center will-change-transform" style={{transform: 'translateZ(0)'}}>
              <Brain className="text-secondary-foreground" size={84} />
            </div>
            <Sparkles className="absolute -top-3 -right-3 text-cta animate-bounce-gentle" size={22} />
          </div>

          {/* Right side rows */}
          <div className="space-y-12">
            {rightRows.map((p) => (
              <div key={p.title} className="grid grid-cols-[auto_1fr_auto] items-center gap-3">
                <span className="h-3 w-3 rounded-full border-2 border-accent justify-self-end" />
                <div className="h-px w-full bg-gradient-to-l from-foreground/30 to-transparent" />
                <div className="text-right">
                  <div className="text-2xl font-playful text-foreground leading-tight">{p.title}</div>
                  <div className="text-sm text-foreground/70">{p.subtitle}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* mobile list */}
        <div className="lg:hidden mt-10 grid gap-4">
          {[...leftRows, ...rightRows].map(p => (
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


