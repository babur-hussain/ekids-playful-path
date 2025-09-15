import { Shield, Heart, Lock, Camera, Cross, Users, Sparkles, Star } from "lucide-react";

const safetyFeatures = [
  {
    icon: Lock,
    title: "Secure Premises",
    description: "Controlled access with keycard entry, secure perimeter fencing, and monitored entry points.",
    color: "text-primary"
  },
  {
    icon: Camera,
    title: "Safety Monitoring",
    description: "Age-appropriate supervision with trained staff maintaining constant visual contact with children.",
    color: "text-secondary"
  },
  {
    icon: Cross,
    title: "Health & First Aid",
    description: "Certified first aid trained staff, fully equipped medical kit, and emergency response protocols.",
    color: "text-accent"
  },
  {
    icon: Users,
    title: "Background Checked Staff",
    description: "All team members undergo thorough background checks and continuous safety training.",
    color: "text-cta"
  },
  {
    icon: Shield,
    title: "Child-Safe Environment",
    description: "Rounded corners, safety locks, non-toxic materials, and age-appropriate equipment throughout.",
    color: "text-primary"
  },
  {
    icon: Heart,
    title: "Emotional Safety",
    description: "Nurturing approach with positive reinforcement, conflict resolution, and emotional support.",
    color: "text-secondary"
  }
];

const SafetySection = () => {
  return (
    <section className="py-20 bg-muted relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-16 left-12 text-primary/10 animate-float">
        <Shield size={60} />
      </div>
      <div className="absolute bottom-20 right-16 text-secondary/10 animate-bounce-gentle">
        <Heart size={50} />
      </div>
      <div className="absolute top-1/3 right-8 text-accent/10 animate-pulse-soft">
        <Star size={40} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-cute text-foreground mb-6">
            Safety &{" "}
            <span className="text-transparent bg-gradient-rainbow bg-clip-text animate-bounce-gentle">
              Care First
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Your child's safety and well-being are our highest priorities. We've created 
            a secure, nurturing environment where children can explore and learn with complete peace of mind.
          </p>
        </div>

        {/* Safety Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {safetyFeatures.map((feature, index) => (
            <div 
              key={feature.title}
              className="bg-card rounded-3xl p-8 shadow-soft hover-lift group text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-soft mb-6 ${feature.color} group-hover:animate-wiggle`}>
                <feature.icon size={32} />
              </div>
              <h3 className="text-xl font-playful font-bold text-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Main Safety Message */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-cute text-foreground">
              Peace of Mind for Parents
            </h3>
            
            <div className="space-y-4 text-foreground/70 leading-relaxed">
              <p>
                We understand that entrusting your precious child to our care is a big decision. 
                That's why we go above and beyond to create the safest possible environment, 
                both physically and emotionally.
              </p>
              <p>
                Our comprehensive safety protocols are designed with young children in mind, 
                ensuring they can explore, play, and learn freely while being completely protected. 
                Every detail has been carefully considered – from the height of our furniture 
                to the materials we use in our art activities.
              </p>
              <p>
                Most importantly, our caring staff creates an atmosphere of emotional safety 
                where every child feels valued, heard, and loved. We believe that when children 
                feel secure, they're free to discover their amazing potential.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-primary/10 rounded-2xl p-4 text-center">
                <div className="text-2xl font-bold text-primary mb-1">24/7</div>
                <div className="text-sm text-foreground/70">Security Monitoring</div>
              </div>
              <div className="bg-secondary/10 rounded-2xl p-4 text-center">
                <div className="text-2xl font-bold text-secondary mb-1">1:6</div>
                <div className="text-sm text-foreground/70">Teacher-Child Ratio</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {/* Emergency Protocols */}
            <div className="bg-gradient-hero rounded-3xl p-8 shadow-playful">
              <div className="text-center mb-6">
                <div className="text-3xl mb-3 animate-bounce-gentle">🚨</div>
                <h4 className="text-xl font-cute text-foreground">
                  Emergency Preparedness
                </h4>
              </div>
              <div className="space-y-3 text-sm text-foreground/80">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cta rounded-full"></div>
                  <span>Regular fire and emergency drills</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cta rounded-full"></div>
                  <span>Direct communication with local emergency services</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cta rounded-full"></div>
                  <span>Detailed emergency contact system</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cta rounded-full"></div>
                  <span>Staff trained in pediatric first aid & CPR</span>
                </div>
              </div>
            </div>

            {/* Health & Hygiene */}
            <div className="bg-card rounded-3xl p-8 shadow-playful">
              <div className="text-center mb-6">
                <div className="text-3xl mb-3 animate-pulse-soft">🧼</div>
                <h4 className="text-xl font-cute text-foreground">
                  Health & Hygiene
                </h4>
              </div>
              <div className="space-y-3 text-sm text-foreground/70">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Daily sanitization of all surfaces and toys</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Hand washing stations at child height</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Air purification systems in all rooms</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Healthy snacks and allergy management</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Parent Communication */}
        <div className="bg-gradient-hero rounded-3xl p-8 lg:p-12 shadow-playful text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center space-x-3 mb-6">
              <Heart className="text-secondary animate-pulse-soft" size={32} />
              <Sparkles className="text-accent animate-bounce-gentle" size={32} />
              <Heart className="text-secondary animate-pulse-soft" size={32} />
            </div>
            
            <h3 className="text-3xl lg:text-4xl font-cute text-foreground mb-6">
              Open Communication Policy
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-card/80 rounded-2xl p-6">
                <div className="text-2xl mb-3">📱</div>
                <h4 className="font-playful font-semibold text-foreground mb-2">
                  Daily Updates
                </h4>
                <p className="text-sm text-foreground/70">
                  Receive photos and updates about your child's day, activities, and milestones.
                </p>
              </div>
              
              <div className="bg-card/80 rounded-2xl p-6">
                <div className="text-2xl mb-3">🚪</div>
                <h4 className="font-playful font-semibold text-foreground mb-2">
                  Open Door Policy
                </h4>
                <p className="text-sm text-foreground/70">
                  Parents are always welcome to visit, observe, or volunteer in our programs.
                </p>
              </div>
              
              <div className="bg-card/80 rounded-2xl p-6">
                <div className="text-2xl mb-3">🤝</div>
                <h4 className="font-playful font-semibold text-foreground mb-2">
                  Parent Conferences
                </h4>
                <p className="text-sm text-foreground/70">
                  Regular meetings to discuss your child's progress and development goals.
                </p>
              </div>
            </div>

            <p className="text-lg text-foreground/80 italic">
              "We believe that the best care happens when parents and teachers work together 
              as a team, united in their love and commitment to each child's success."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetySection;