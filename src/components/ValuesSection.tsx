import { BookOpen, Puzzle, Users, Shield, Heart, Sparkles, Star } from "lucide-react";
import GlassDialog from "@/components/ui/GlassDialog";

const ageGroups = [
  {
    title: "Toddlers",
    age: "1.5 - 3 years",
    description: "Gentle introduction to social play and basic skills",
    color: "bg-primary/10 text-primary",
    icon: "🧸"
  },
  {
    title: "Preschoolers", 
    age: "3 - 5 years",
    description: "Structured learning through creative exploration",
    color: "bg-secondary/10 text-secondary",
    icon: "🎨"
  },
  {
    title: "Kindergarten",
    age: "5 - 6 years", 
    description: "School readiness with advanced learning concepts",
    color: "bg-accent/10 text-accent",
    icon: "📚"
  }
];

const values = [
  {
    icon: BookOpen,
    title: "Learning Through Play",
    description: "We believe the best learning happens when children are engaged, curious, and having fun.",
    color: "text-primary"
  },
  {
    icon: Sparkles,
    title: "Encouraging Curiosity", 
    description: "Every question is celebrated, every discovery is treasured, fostering lifelong learners.",
    color: "text-cta"
  },
  {
    icon: Users,
    title: "Building Social Skills",
    description: "Teaching kindness, sharing, and friendship through guided group activities and free play.",
    color: "text-secondary"
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "Physical and emotional safety is our top priority, creating a secure foundation for growth.",
    color: "text-accent"
  },
  {
    icon: Heart,
    title: "Inclusive Environment",
    description: "Celebrating diversity and ensuring every child feels valued, respected, and loved.",
    color: "text-destructive"
  },
  {
    icon: Puzzle,
    title: "Individual Growth",
    description: "Recognizing each child's unique pace and style of learning, adapting to their needs.",
    color: "text-primary"
  }
];

const ValuesSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 bg-dots opacity-40"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-glow opacity-30"></div>
      
      <div className="absolute top-20 right-20 text-primary/15 animate-float">
        <Sparkles size={80} />
      </div>
      <div className="absolute bottom-32 left-16 text-secondary/15 animate-bounce-gentle">
        <Heart size={70} />
      </div>
      <div className="absolute top-1/3 left-1/4 text-accent/10 animate-rotate-slow">
        <Star size={60} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Age Groups */}
        <div className="text-center mb-24">
          <div className="relative inline-block mb-8">
            <h2 className="text-5xl lg:text-7xl font-cute text-foreground mb-6">
              Our{" "}
              <span className="text-transparent bg-gradient-rainbow bg-clip-text animate-gradient-shift bg-[length:200%_200%]">
                Age Groups
              </span>
            </h2>
            <div className="absolute -top-4 -right-4 text-3xl animate-sparkle">🌟</div>
          </div>
          <p className="text-xl text-foreground/70 mb-16 max-w-3xl mx-auto leading-relaxed">
            Tailored programs designed specifically for each developmental stage, 
            ensuring every child receives age-appropriate learning experiences.
          </p>
          
          <div className="grid md:grid-cols-3 gap-10 mb-20">
            {ageGroups.map((group, index) => (
              <GlassDialog
                key={group.title}
                title={`${group.title} (${group.age})`}
                description={group.description}
                trigger={
                  <div 
                    className="relative group cursor-pointer"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="absolute inset-0 bg-gradient-magic rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                    
                    <div className="relative bg-card rounded-3xl p-10 shadow-dreamy hover:shadow-magical transition-all duration-500 hover:scale-105 card-magical">
                      <div className="text-6xl mb-6 group-hover:animate-bounce-gentle transition-all duration-300">
                        {group.icon}
                      </div>
                      <h3 className="text-3xl font-playful font-bold text-foreground mb-4">
                        {group.title}
                      </h3>
                      <div className={`inline-block px-6 py-3 rounded-full text-lg font-bold mb-6 ${group.color} shadow-soft`}>
                        {group.age}
                      </div>
                      <p className="text-foreground/70 leading-relaxed text-lg">
                        {group.description}
                      </p>
                      <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                        <Star className="text-primary" size={20} />
                      </div>
                      <div className="absolute bottom-4 left-4 opacity-20 group-hover:opacity-40 transition-opacity">
                        <Heart className="text-secondary" size={16} />
                      </div>
                    </div>
                  </div>
                }
              >
                <div className="space-y-3 text-foreground/80">
                  <p>This program blends playful exploration with foundational learning—perfect for {group.title.toLowerCase()}.</p>
                  <p>Families receive simple at‑home activity ideas to reinforce classroom learning.</p>
                </div>
              </GlassDialog>
            ))}
          </div>
        </div>

        {/* Enhanced Values */}
        <div className="text-center mb-20">
          <div className="relative inline-block mb-8">
            <h2 className="text-5xl lg:text-7xl font-cute text-foreground mb-6">
              Our{" "}
              <span className="text-transparent bg-gradient-sunset bg-clip-text animate-gradient-shift bg-[length:200%_200%]">
                Values
              </span>
            </h2>
            <div className="absolute -bottom-2 -left-2 text-2xl animate-sparkle">💖</div>
          </div>
          <p className="text-xl text-foreground/70 max-w-4xl mx-auto leading-relaxed">
            These core principles guide everything we do, ensuring your child receives 
            the best possible start in their educational journey filled with love, care, and wonder.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {values.map((value, index) => (
            <GlassDialog
              key={value.title}
              title={value.title}
              description={value.description}
              trigger={
                <div 
                  className="relative group cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative bg-card rounded-3xl p-8 shadow-dreamy hover:shadow-magical transition-all duration-500 hover:scale-105 card-magical text-center h-full">
                    <div className="relative mb-8">
                      <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-soft ${value.color} group-hover:animate-wiggle transition-all duration-300 shadow-soft`}>
                        <value.icon size={36} />
                      </div>
                      <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-sparkle">✨</div>
                    </div>
                    <h3 className="text-xl font-playful font-bold text-foreground mb-4">{value.title}</h3>
                    <p className="text-foreground/70 leading-relaxed">{value.description}</p>
                    <div className="absolute inset-0 rounded-3xl bg-gradient-rainbow opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10"></div>
                  </div>
                </div>
              }
            >
              <div className="space-y-3 text-foreground/80">
                <p>We bring "{value.title.toLowerCase()}" to life with playful routines, stories, and projects.</p>
                <p>Teachers model and celebrate this value daily so kids absorb it naturally.</p>
              </div>
            </GlassDialog>
          ))}
        </div>

        {/* Enhanced Philosophy Statement */}
        <div className="relative">
          <div className="bg-gradient-hero rounded-[2rem] p-12 lg:p-16 text-center shadow-magical relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-stars opacity-20"></div>
            <div className="absolute top-8 left-8 text-secondary/20 animate-float">
              <Heart size={40} />
            </div>
            <div className="absolute bottom-8 right-8 text-accent/20 animate-bounce-gentle">
              <Sparkles size={35} />
            </div>
            
            <div className="max-w-5xl mx-auto relative z-10">
              <div className="text-4xl mb-6 animate-pulse-soft">🌈</div>
              <h3 className="text-4xl lg:text-5xl font-cute text-foreground mb-8">
                Our Philosophy
              </h3>
              <div className="relative">
                <p className="text-xl lg:text-2xl text-foreground/85 leading-relaxed mb-8 italic">
                  "At eKids, we believe every child is unique and special. Our playful, nurturing 
                  environment helps them explore the world, build meaningful friendships, and develop 
                  the self-confidence they need to thrive in life and beyond."
                </p>
                {/* Decorative quotes */}
                <div className="absolute -top-4 -left-4 text-4xl text-primary/30">"</div>
                <div className="absolute -bottom-4 -right-4 text-4xl text-primary/30">"</div>
              </div>
              
              <div className="flex justify-center space-x-4 mt-8">
                <Heart className="text-secondary animate-pulse-soft" size={28} />
                <Sparkles className="text-accent animate-bounce-gentle" size={28} />
                <Star className="text-cta animate-sparkle" size={28} />
                <Heart className="text-secondary animate-pulse-soft" size={28} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;