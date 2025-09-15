import { BookOpen, Puzzle, Users, Shield, Heart, Sparkles } from "lucide-react";

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
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 right-20 text-primary/10 animate-float">
        <Sparkles size={60} />
      </div>
      <div className="absolute bottom-32 left-16 text-secondary/10 animate-bounce-gentle">
        <Heart size={50} />
      </div>

      <div className="container mx-auto px-4">
        {/* Age Groups */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-cute text-foreground mb-6">
            Our{" "}
            <span className="text-transparent bg-gradient-rainbow bg-clip-text">
              Age Groups
            </span>
          </h2>
          <p className="text-lg text-foreground/70 mb-12 max-w-2xl mx-auto">
            Tailored programs designed specifically for each developmental stage
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {ageGroups.map((group, index) => (
              <div 
                key={group.title}
                className="bg-card rounded-3xl p-8 shadow-soft hover-lift group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4 group-hover:animate-bounce-gentle">
                  {group.icon}
                </div>
                <h3 className="text-2xl font-playful font-bold text-foreground mb-2">
                  {group.title}
                </h3>
                <div className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 ${group.color}`}>
                  {group.age}
                </div>
                <p className="text-foreground/70">
                  {group.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-cute text-foreground mb-6">
            Our{" "}
            <span className="text-transparent bg-gradient-rainbow bg-clip-text">
              Values
            </span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            These core principles guide everything we do, ensuring your child receives 
            the best possible start in their educational journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={value.title}
              className="bg-card rounded-3xl p-8 shadow-soft hover-lift group text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-soft mb-6 ${value.color} group-hover:animate-wiggle`}>
                <value.icon size={32} />
              </div>
              <h3 className="text-xl font-playful font-bold text-foreground mb-4">
                {value.title}
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Philosophy Statement */}
        <div className="mt-20 bg-gradient-hero rounded-3xl p-8 lg:p-12 text-center shadow-playful">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl lg:text-4xl font-cute text-foreground mb-6">
              Our Philosophy
            </h3>
            <p className="text-lg lg:text-xl text-foreground/80 leading-relaxed mb-6">
              "At eKids, we believe every child is unique and special. Our playful, nurturing 
              environment helps them explore the world, build meaningful friendships, and develop 
              the self-confidence they need to thrive in life."
            </p>
            <div className="flex justify-center space-x-2">
              <Heart className="text-secondary animate-pulse-soft" size={24} />
              <Sparkles className="text-accent animate-bounce-gentle" size={24} />
              <Heart className="text-secondary animate-pulse-soft" size={24} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;