import { Brain, Sparkles, Target, FlaskConical, Lightbulb, HeartHandshake } from "lucide-react";

const leftRows = [
  { title: "Focused Mind", subtitle: "Knowledge Retention" },
  { title: "Analytical Mind", subtitle: "Knowledge Application" },
  { title: "Conscientious Mind", subtitle: "Knowledge Acquisition" },
];

const rightRows = [
  { title: "Inventive Mind", subtitle: "Knowledge Development" },
  { title: "Empathetic Mind", subtitle: "Emotional Balance" },
];

const mobileItems = [
  { title: "Focused Mind", subtitle: "Knowledge Retention", icon: Target, color: "text-primary" },
  { title: "Analytical Mind", subtitle: "Knowledge Application", icon: FlaskConical, color: "text-secondary" },
  { title: "Conscientious Mind", subtitle: "Knowledge Acquisition", icon: Sparkles, color: "text-accent" },
  { title: "Inventive Mind", subtitle: "Knowledge Development", icon: Lightbulb, color: "text-cta" },
  { title: "Empathetic Mind", subtitle: "Emotional Balance", icon: HeartHandshake, color: "text-secondary" },
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
          <h2 className="text-4xl lg:text-5xl font-cute text-foreground mb-2">E-KIDS</h2>
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

        {/* mobile enhanced list */}
        <div className="lg:hidden mt-8 grid gap-4">
          <div className="flex justify-center mb-2">
            <div className="h-24 w-24 rounded-full bg-gradient-to-r from-primary/30 to-accent/30 shadow-soft flex items-center justify-center">
              <Brain className="text-foreground/80" size={40} />
            </div>
          </div>
          {mobileItems.map((item) => (
            <div key={item.title} className="rounded-2xl bg-card/90 border border-border/40 p-4 shadow-soft">
              <div className="flex items-start gap-3">
                <div className={`shrink-0 rounded-xl bg-gradient-soft p-3 shadow-soft ${item.color}`}>
                  <item.icon size={18} />
                </div>
                <div className="flex-1">
                  <div className="text-base font-playful font-semibold text-foreground">{item.title}</div>
                  <div className="text-xs text-foreground/70">{item.subtitle}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PentemindSection;


