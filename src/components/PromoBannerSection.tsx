import { Calendar, Building2, ChevronRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import { Button } from "@/components/ui/button";

const PromoBannerSection = () => {
  return (
    <section className="relative overflow-hidden py-20 bg-gradient-hero">
      {/* Decorative background shapes (stay on GPU) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-primary/15 blur-3xl will-change-transform" style={{transform: 'translateZ(0)'}} />
        <div className="absolute -bottom-24 -right-24 w-[420px] h-[420px] rounded-full bg-accent/15 blur-3xl will-change-transform" style={{transform: 'translateZ(0)'}} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left copy */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card/70 backdrop-blur text-sm font-semibold text-foreground/80 shadow-soft will-change-transform" style={{transform: 'translateZ(0)'}}>
              <Sparkles className="text-cta" size={16} />
              Admission Open
            </div>

            <h2 className="text-4xl lg:text-6xl font-cute text-foreground leading-tight">
              Build a foundation for a lifetime of learning
            </h2>

            <p className="text-lg text-foreground/80 max-w-xl">
              A nurturing space where curiosity grows and every day is filled with play, discovery, and gentle guidance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button variant="cta" size="lg" className="group relative overflow-hidden shadow-magical hover:shadow-glow">
                <span className="relative z-10 flex items-center gap-2">
                  Enroll Now
                  <ChevronRight className="transition-transform group-hover:translate-x-0.5" size={18} />
                </span>
                <div className="absolute inset-0 bg-gradient-sunset opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>

              <Button variant="outline" size="lg" className="glass-effect border-2 border-primary/30 hover:border-primary hover:bg-primary/10">
                <Calendar size={18} className="mr-2" />
                Book a Visit
              </Button>
            </div>

            {/* Quick actions pill */}
            <div className="mt-6 inline-flex items-center gap-4 rounded-full bg-card/80 px-4 py-2 shadow-soft hover:shadow-playful transition-shadow">
              <div className="inline-flex items-center gap-2 text-sm font-semibold">
                <Calendar className="text-primary" size={16} />
                Admission Enquiry
              </div>
              <span className="h-4 w-px bg-border" />
              <div className="inline-flex items-center gap-2 text-sm font-semibold">
                <Building2 className="text-accent" size={16} />
                Start a Franchise
              </div>
            </div>
          </div>

          {/* Right visual */}
          <div className="relative">
            <div className="relative rounded-[2rem] overflow-hidden shadow-dreamy hover:shadow-magical transition-shadow duration-300 will-change-transform" style={{transform: 'translateZ(0)'}}>
              <img
                src={heroImage}
                alt="Joyful child learning at eKids Play School"
                className="w-full h-auto object-cover will-change-transform"
                style={{transform: 'translateZ(0)'}}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-accent/10" />
            </div>

            {/* Floating icons */}
            <div className="absolute -left-6 top-6 bg-gradient-magic p-4 rounded-2xl shadow-magical animate-float will-change-transform" style={{transform: 'translateZ(0)'}}>
              <Sparkles className="text-accent-foreground" size={20} />
            </div>
            <div className="absolute -right-6 bottom-6 bg-gradient-sunset p-4 rounded-2xl shadow-magical animate-bounce-gentle will-change-transform" style={{transform: 'translateZ(0)'}}>
              <Calendar className="text-secondary-foreground" size={20} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBannerSection;


