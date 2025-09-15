import { Brain, Users, Heart, GraduationCap, Sparkles, Star } from "lucide-react";

const benefits = [
  {
    icon: Brain,
    title: "Cognitive Development",
    description: "Stimulating activities that enhance thinking, problem-solving, and creativity through play-based learning.",
    color: "text-primary"
  },
  {
    icon: Users,
    title: "Social Skills",
    description: "Learning to share, communicate, and build friendships in a supportive group environment.",
    color: "text-secondary"
  },
  {
    icon: Heart,
    title: "Emotional Safety",
    description: "A nurturing space where children feel secure, loved, and confident to express themselves.",
    color: "text-accent"
  },
  {
    icon: GraduationCap,
    title: "School Readiness",
    description: "Preparing your child for formal education with structured learning and independence skills.",
    color: "text-cta"
  }
];

const WhyPlaySchoolSection = () => {
  return (
    <section className="py-20 bg-gradient-soft relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-clouds opacity-30"></div>
      
      {/* Floating elements */}
      <div className="absolute top-10 left-10 text-primary/20 animate-float">
        <Star size={40} />
      </div>
      <div className="absolute bottom-20 right-16 text-secondary/20 animate-bounce-gentle">
        <Sparkles size={36} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-cute text-foreground mb-6">
            Why Choose{" "}
            <span className="text-transparent bg-gradient-rainbow bg-clip-text">
              Play School?
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Early childhood is a magical time of discovery. Our play school provides the perfect 
            foundation for your child's lifelong learning journey through carefully designed 
            experiences that nurture every aspect of their development.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={benefit.title}
              className="bg-card rounded-3xl p-8 shadow-soft hover-lift text-center group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-soft mb-6 ${benefit.color} group-hover:animate-wiggle`}>
                <benefit.icon size={32} />
              </div>
              <h3 className="text-xl font-playful font-bold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Story Section */}
        <div className="bg-card rounded-3xl p-8 lg:p-12 shadow-playful">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2 space-y-6">
              <h3 className="text-3xl font-cute text-foreground">
                Our Story
              </h3>
              <div className="space-y-4 text-foreground/70 leading-relaxed">
                <p>
                  eKids Play School was born from a simple belief: every child deserves a loving, 
                  nurturing environment where they can discover their unique potential. Founded with 
                  love, care, and a vision to support children's holistic development, we've created 
                  a space where learning feels like play.
                </p>
                <p>
                  Our approach celebrates each child's individuality while fostering essential skills 
                  for life. From our cozy reading corners to our vibrant art spaces, every area is 
                  designed to spark curiosity and joy in learning.
                </p>
                <p>
                  We understand that choosing the right environment for your child is one of the most 
                  important decisions you'll make. That's why we're committed to providing not just 
                  education, but a second home where your little one can flourish.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-hero rounded-2xl p-6 text-center shadow-playful animate-float">
                <div className="text-4xl font-cute text-foreground mb-2">
                  🌟
                </div>
                <div className="text-2xl font-playful font-bold text-foreground mb-1">
                  500+
                </div>
                <div className="text-foreground/70">
                  Happy Families
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyPlaySchoolSection;