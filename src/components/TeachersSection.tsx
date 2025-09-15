import { Heart, Star, Award, Users, Sparkles } from "lucide-react";
import teacherImage from "@/assets/teacher-image.jpg";

const teachers = [
  {
    name: "Ms. Sarah Johnson",
    experience: "8 years",
    qualifications: "M.Ed Early Childhood",
    funFact: "Loves painting animals with the children",
    speciality: "Art & Creative Expression",
    image: teacherImage
  },
  {
    name: "Ms. Maria Rodriguez",
    experience: "6 years", 
    qualifications: "B.A Child Development",
    funFact: "Speaks 3 languages fluently",
    speciality: "Language & Literacy",
    image: teacherImage
  },
  {
    name: "Ms. Emily Chen",
    experience: "10 years",
    qualifications: "M.S Child Psychology",
    funFact: "Has a therapy dog named Buddy",
    speciality: "Social-Emotional Learning",
    image: teacherImage
  },
  {
    name: "Ms. Jennifer Williams",
    experience: "7 years",
    qualifications: "B.Ed Early Childhood",
    funFact: "Former professional dancer",
    speciality: "Music & Movement",
    image: teacherImage
  }
];

const TeachersSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Enhanced background decoration */}
      <div className="absolute inset-0 bg-dots opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-glow opacity-25"></div>
      
      <div className="absolute top-20 right-20 text-primary/15 animate-float">
        <Star size={60} />
      </div>
      <div className="absolute bottom-32 left-16 text-secondary/15 animate-bounce-gentle">
        <Heart size={55} />
      </div>
      <div className="absolute top-1/3 left-1/4 text-accent/10 animate-rotate-slow">
        <Award size={50} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="relative inline-block mb-8">
            <h2 className="text-5xl lg:text-7xl font-cute text-foreground mb-6">
              Meet Our{" "}
              <span className="text-transparent bg-gradient-magic bg-clip-text animate-gradient-shift bg-[length:200%_200%]">
                Teachers
              </span>
            </h2>
            <div className="absolute -top-6 -right-6 text-4xl animate-bounce-gentle">👩‍🏫</div>
            <div className="absolute -bottom-2 -left-4 text-3xl animate-sparkle">⭐</div>
          </div>
          <p className="text-xl lg:text-2xl text-foreground/75 max-w-4xl mx-auto leading-relaxed">
            Our passionate educators bring years of experience, endless patience, 
            and genuine love for children. They create magical learning moments every day 
            with creativity, care, and wonder.
          </p>
        </div>

        {/* Enhanced Teachers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
          {teachers.map((teacher, index) => (
            <div 
              key={teacher.name}
              className="relative group"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative bg-card rounded-3xl p-8 shadow-dreamy hover:shadow-magical transition-all duration-500 hover:scale-105 card-magical text-center h-full">
                {/* Enhanced Photo */}
                <div className="relative mb-8">
                  <div className="relative w-28 h-28 mx-auto rounded-2xl overflow-hidden shadow-playful group-hover:shadow-glow transition-all duration-500">
                    <img 
                      src={teacher.image} 
                      alt={`${teacher.name} - eKids Play School teacher`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Magical overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  {/* Enhanced badge */}
                  <div className="absolute -top-3 -right-3 bg-gradient-sunset p-3 rounded-xl shadow-soft group-hover:animate-wiggle group-hover:shadow-glow transition-all duration-300">
                    <Star className="text-cta-foreground" size={18} />
                  </div>
                  
                  {/* Heart decoration */}
                  <div className="absolute -bottom-2 -left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-sparkle">
                    <Heart className="text-secondary" size={20} />
                  </div>
                </div>

                {/* Enhanced Info */}
                <div className="space-y-4">
                  <h3 className="text-xl font-playful font-bold text-foreground">
                    {teacher.name}
                  </h3>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-center gap-2 text-primary">
                      <Award size={16} />
                      <span className="font-semibold">{teacher.experience} experience</span>
                    </div>
                    
                    <div className="text-foreground/70 font-medium">
                      {teacher.qualifications}
                    </div>
                    
                    <div className="bg-gradient-soft rounded-full px-4 py-2 text-accent-foreground text-xs font-semibold shadow-soft">
                      {teacher.speciality}
                    </div>
                  </div>

                  {/* Enhanced Fun Fact */}
                  <div className="bg-gradient-hero rounded-2xl p-4 mt-6 relative overflow-hidden">
                    <div className="absolute top-2 right-2 opacity-20">
                      <Sparkles size={16} />
                    </div>
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Heart className="text-secondary" size={16} />
                      <span className="text-sm font-bold text-foreground">Fun Fact</span>
                    </div>
                    <p className="text-xs text-foreground/75 italic leading-relaxed">
                      {teacher.funFact}
                    </p>
                  </div>
                </div>
                
                {/* Background glow effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-rainbow opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Teacher Philosophy */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <div className="relative">
              <h3 className="text-4xl font-cute text-foreground mb-6">
                Why Our Teachers Make the Difference
              </h3>
              <div className="absolute -top-4 -left-4 text-3xl animate-sparkle">💖</div>
            </div>
            
            <div className="space-y-6">
              {[
                {
                  icon: Heart,
                  title: "Passionate & Caring",
                  description: "Every teacher is carefully selected for their genuine love of children and commitment to nurturing young minds with endless patience and creativity.",
                  color: "bg-primary/10 text-primary"
                },
                {
                  icon: Award,
                  title: "Highly Qualified",
                  description: "Our team holds degrees in early childhood education, child development, and related fields, with ongoing professional development and training.",
                  color: "bg-secondary/10 text-secondary"
                },
                {
                  icon: Users,
                  title: "Individual Attention",
                  description: "With small class sizes, our teachers can focus on each child's unique needs, interests, and learning style, ensuring personalized growth.",
                  color: "bg-accent/10 text-accent"
                }
              ].map((item, index) => (
                <div key={item.title} className="flex items-start gap-6 group">
                  <div className={`${item.color} rounded-2xl p-4 flex-shrink-0 shadow-soft group-hover:shadow-playful transition-all duration-300`}>
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-playful font-bold text-foreground mb-3">
                      {item.title}
                    </h4>
                    <p className="text-foreground/70 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-hero rounded-[2rem] p-10 shadow-magical text-center relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-stars opacity-20"></div>
              <div className="absolute top-4 left-4 text-secondary/20 animate-float">
                <Heart size={30} />
              </div>
              <div className="absolute bottom-4 right-4 text-accent/20 animate-bounce-gentle">
                <Star size={25} />
              </div>
              
              <div className="relative z-10">
                <div className="text-5xl mb-6 animate-bounce-gentle">
                  👩‍🏫
                </div>
                <h4 className="text-3xl font-cute text-foreground mb-6">
                  Join Our Teaching Family
                </h4>
                <p className="text-foreground/85 mb-8 leading-relaxed text-lg">
                  Are you passionate about early childhood education? We're always 
                  looking for dedicated teachers who share our love for nurturing 
                  young learners and creating magical moments.
                </p>
                
                <div className="space-y-4 text-foreground/75 mb-8">
                  {[
                    { icon: Star, text: "Competitive salaries & benefits", color: "text-cta" },
                    { icon: Heart, text: "Supportive work environment", color: "text-secondary" },
                    { icon: Award, text: "Professional development", color: "text-primary" }
                  ].map((benefit) => (
                    <div key={benefit.text} className="flex items-center justify-center gap-3">
                      <benefit.icon className={benefit.color} size={18} />
                      <span className="font-playful">{benefit.text}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-card/30 rounded-xl p-4 backdrop-blur-sm">
                  <a 
                    href="mailto:careers@ekidsplayschool.com"
                    className="text-primary font-playful font-bold text-lg hover:underline transition-all duration-300 hover:text-primary/80"
                  >
                    ekidsbetul1@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Testimonial */}
        <div className="relative">
          <div className="bg-gradient-soft rounded-[2rem] p-12 lg:p-16 shadow-magical text-center relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 bg-clouds opacity-20"></div>
            <div className="absolute top-8 left-8 text-primary/15 animate-float">
              <Sparkles size={40} />
            </div>
            <div className="absolute bottom-8 right-8 text-secondary/15 animate-pulse-soft">
              <Heart size={45} />
            </div>
            
            <div className="max-w-4xl mx-auto relative z-10">
              <div className="text-5xl mb-8 animate-pulse-soft">💖</div>
              
              <div className="relative mb-8">
                <blockquote className="text-xl lg:text-2xl text-foreground/85 italic leading-relaxed">
                  "The teachers at eKids don't just educate our children – they truly care for them. 
                  My daughter comes home every day excited to share what she learned and can't wait 
                  to see her teachers again. That says everything about the love and dedication here."
                </blockquote>
                {/* Decorative quotes */}
                <div className="absolute -top-4 -left-4 text-6xl text-primary/20 font-serif">"</div>
                <div className="absolute -bottom-4 -right-4 text-6xl text-primary/20 font-serif">"</div>
              </div>
              
              <cite className="text-foreground/60 font-playful text-lg block mb-6">
                — Sarah M., Parent of Emma (Age 4)
              </cite>
              
              <div className="flex justify-center space-x-2">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i}
                    className="text-cta animate-pulse-soft fill-current" 
                    size={24}
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeachersSection;