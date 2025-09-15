import { Button } from "@/components/ui/button";
import { Heart, Star, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 text-secondary animate-float">
          <Star size={32} />
        </div>
        <div className="absolute top-32 right-16 text-accent animate-bounce-gentle">
          <Heart size={28} />
        </div>
        <div className="absolute bottom-32 left-20 text-cta animate-pulse-soft">
          <Sparkles size={36} />
        </div>
        <div className="absolute top-1/2 right-8 text-secondary animate-float">
          <Star size={24} />
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-cute text-foreground leading-tight">
                Welcome to{" "}
                <span className="text-transparent bg-gradient-rainbow bg-clip-text animate-bounce-gentle">
                  eKids
                </span>
              </h1>
              <h2 className="text-2xl lg:text-4xl font-playful text-foreground/80">
                Where Learning Meets Fun!
              </h2>
              <p className="text-lg lg:text-xl text-foreground/70 max-w-md mx-auto lg:mx-0">
                A nurturing space for your child to explore, play, and grow in a safe, 
                loving environment.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="cta" size="lg" className="wiggle hover:wiggle">
                Enroll Your Child Today!
              </Button>
              <Button variant="outline" size="lg">
                Schedule a Visit
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-foreground/60">
              <div className="flex items-center gap-2">
                <Star className="text-cta" size={16} />
                <span>Ages 1.5 - 6 years</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="text-secondary" size={16} />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="text-accent" size={16} />
                <span>Qualified Teachers</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-playful hover-lift">
              <img 
                src={heroImage} 
                alt="Happy children playing and learning at eKids Play School"
                className="w-full h-auto object-cover"
              />
              {/* Overlay with gentle gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/10 to-transparent"></div>
            </div>
            
            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 bg-secondary rounded-full p-4 shadow-playful animate-bounce-gentle">
              <Heart className="text-secondary-foreground" size={24} />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-accent rounded-full p-4 shadow-playful animate-float">
              <Sparkles className="text-accent-foreground" size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" className="w-full h-16 fill-background">
          <path d="M0,60 C300,20 900,100 1200,60 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;