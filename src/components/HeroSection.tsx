import { Button } from "@/components/ui/button";
import GlassDialog from "@/components/ui/GlassDialog";
import AppointmentSection from "@/components/AppointmentSection";
import EnrollForm from "@/components/EnrollForm";
import { Heart, Star, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Primary floating elements */}
        <div className="absolute top-20 left-10 text-secondary animate-float">
          <Star size={40} className="filter drop-shadow-lg" />
        </div>
        <div className="absolute top-32 right-16 text-accent animate-bounce-gentle">
          <Heart size={35} className="filter drop-shadow-lg" />
        </div>
        <div className="absolute bottom-32 left-20 text-cta animate-pulse-soft">
          <Sparkles size={45} className="filter drop-shadow-lg" />
        </div>
        <div className="absolute top-1/2 right-8 text-secondary animate-float-delayed">
          <Star size={30} className="filter drop-shadow-lg" />
        </div>
        
        {/* Additional magical elements */}
        <div className="absolute top-1/4 left-1/4 text-purple animate-sparkle">
          <Sparkles size={25} className="opacity-60" />
        </div>
        <div className="absolute bottom-1/4 right-1/3 text-primary animate-rotate-slow">
          <Star size={20} className="opacity-40" />
        </div>
        <div className="absolute top-3/4 left-1/3 text-accent animate-pulse-soft">
          <Heart size={28} className="opacity-50" />
        </div>
        
        {/* Background pattern overlay */}
        <div className="absolute inset-0 bg-stars opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 py-16 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Enhanced */}
          <div className="text-center lg:text-left space-y-10">
            <div className="space-y-6">
              <div className="relative">
                <h1 className="text-6xl lg:text-8xl font-cute text-foreground leading-tight animate-slide-up">
                  Welcome to{" "}
                  <span className="relative">
                    <span className="text-transparent bg-gradient-rainbow bg-clip-text animate-gradient-shift bg-[length:200%_200%]">
                      eKids
                    </span>
                    <div className="absolute -top-2 -right-2 text-2xl animate-sparkle">✨</div>
                  </span>
                </h1>
                {/* Decorative underline */}
                <div className="absolute -bottom-2 left-0 lg:left-auto lg:right-0 w-32 h-1 bg-gradient-rainbow rounded-full animate-scale-in"></div>
              </div>
              
              <h2 className="text-3xl lg:text-5xl font-playful text-foreground/90 animate-slide-up" style={{animationDelay: "0.2s"}}>
                Where Learning Meets Fun!
              </h2>
              
              <div className="relative">
                <p className="text-xl lg:text-2xl text-foreground/75 max-w-lg mx-auto lg:mx-0 leading-relaxed animate-slide-up" style={{animationDelay: "0.4s"}}>
                  A nurturing space for your child to explore, play, and grow in a safe, 
                  loving environment filled with wonder and discovery.
                </p>
                {/* Decorative elements */}
                <div className="absolute -left-4 top-0 text-primary/30 animate-float">
                  <Heart size={16} />
                </div>
                <div className="absolute -right-4 bottom-0 text-accent/30 animate-bounce-gentle">
                  <Star size={14} />
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start animate-slide-up" style={{animationDelay: "0.6s"}}>
              <GlassDialog
                title="Enroll Now"
                description="Fill the form and our team will reach out to you."
                trigger={
                  <Button variant="cta" size="lg" className="group relative overflow-hidden shadow-magical hover:shadow-glow">
                    <span className="relative z-10">Enroll Your Child Today!</span>
                    <div className="absolute inset-0 bg-gradient-sunset opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Button>
                }
              >
                <div className="p-2">
                  <EnrollForm />
                </div>
              </GlassDialog>
              <GlassDialog
                title="Schedule a Visit"
                description="Choose your preferred time and we’ll confirm shortly."
                trigger={
                  <Button variant="outline" size="lg" className="glass-effect border-2 border-primary/30 hover:border-primary hover:bg-primary/10">
                    Schedule a Visit
                  </Button>
                }
              >
                <div className="p-2">
                  <AppointmentSection compact />
                </div>
              </GlassDialog>
            </div>

            {/* Enhanced Trust Indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 animate-slide-up" style={{animationDelay: "0.8s"}}>
              {[
                { icon: Star, text: "Ages 1.5 - 6 years", color: "text-cta" },
                { icon: Heart, text: "Licensed & Insured", color: "text-secondary" },
                { icon: Sparkles, text: "Qualified Teachers", color: "text-accent" }
              ].map((item, index) => (
                <div key={item.text} className="flex items-center gap-3 group">
                  <div className="p-2 rounded-full bg-card/50 group-hover:bg-card transition-colors duration-300">
                    <item.icon className={`${item.color} group-hover:animate-wiggle`} size={18} />
                  </div>
                  <span className="text-sm font-playful text-foreground/70 group-hover:text-foreground transition-colors">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image - Enhanced */}
          <div className="relative animate-slide-up" style={{animationDelay: "0.3s"}}>
            <div className="relative group">
              {/* Main image container */}
              <div className="relative rounded-[2rem] overflow-hidden shadow-dreamy hover:shadow-magical transition-shadow duration-300 hover:scale-105 will-change-transform" style={{transform: 'translateZ(0)'}}>
                <img 
                  src={heroImage} 
                  alt="Happy children playing and learning at eKids Play School"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105 will-change-transform"
                  style={{transform: 'translateZ(0)'}}
                />
                {/* Magical overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Floating badges - enhanced and optimized */}
              <div className="absolute -top-6 -right-6 bg-gradient-sunset p-5 rounded-2xl shadow-magical hover:shadow-glow transition-transform duration-300 animate-bounce-gentle hover:scale-105 cursor-pointer will-change-transform" style={{transform: 'translateZ(0)'}}>
                <Heart className="text-secondary-foreground" size={28} />
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-gradient-magic p-5 rounded-2xl shadow-magical hover:shadow-glow transition-transform duration-300 animate-float hover:scale-105 cursor-pointer will-change-transform" style={{transform: 'translateZ(0)'}}>
                <Sparkles className="text-accent-foreground" size={28} />
              </div>
              
              {/* Additional floating elements - optimized */}
              <div className="absolute top-1/4 -left-3 bg-card/80 p-3 rounded-full shadow-soft animate-pulse-soft will-change-transform" style={{transform: 'translateZ(0)'}}>
                <Star className="text-primary" size={20} />
              </div>
              
              <div className="absolute bottom-1/4 -right-3 bg-card/80 p-3 rounded-full shadow-soft animate-sparkle will-change-transform" style={{transform: 'translateZ(0)'}}>
                <Heart className="text-cta" size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" className="w-full h-20 fill-background">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{stopColor: "hsl(var(--background))", stopOpacity: 0.8}} />
              <stop offset="50%" style={{stopColor: "hsl(var(--background))", stopOpacity: 1}} />
              <stop offset="100%" style={{stopColor: "hsl(var(--background))", stopOpacity: 0.8}} />
            </linearGradient>
          </defs>
          <path d="M0,60 C300,20 600,100 900,40 C1050,10 1150,80 1200,60 L1200,120 L0,120 Z" fill="url(#waveGradient)"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;