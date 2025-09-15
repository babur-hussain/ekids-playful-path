import { Heart, Star, Award, Users } from "lucide-react";
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
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-20 text-primary/10 animate-float">
        <Star size={50} />
      </div>
      <div className="absolute bottom-32 left-16 text-secondary/10 animate-bounce-gentle">
        <Heart size={45} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-cute text-foreground mb-6">
            Meet Our{" "}
            <span className="text-transparent bg-gradient-rainbow bg-clip-text animate-bounce-gentle">
              Teachers
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Our passionate educators bring years of experience, endless patience, 
            and genuine love for children. They create magical learning moments every day.
          </p>
        </div>

        {/* Teachers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teachers.map((teacher, index) => (
            <div 
              key={teacher.name}
              className="bg-card rounded-3xl p-6 shadow-soft hover-lift group text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Photo */}
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden shadow-playful group-hover:shadow-glow transition-all duration-300">
                  <img 
                    src={teacher.image} 
                    alt={`${teacher.name} - eKids Play School teacher`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute -top-2 -right-2 bg-cta rounded-full p-2 shadow-soft group-hover:animate-wiggle">
                  <Star className="text-cta-foreground" size={16} />
                </div>
              </div>

              {/* Info */}
              <div className="space-y-3">
                <h3 className="text-lg font-playful font-bold text-foreground">
                  {teacher.name}
                </h3>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-center gap-2 text-primary">
                    <Award size={14} />
                    <span>{teacher.experience} experience</span>
                  </div>
                  
                  <div className="text-foreground/70">
                    {teacher.qualifications}
                  </div>
                  
                  <div className="bg-accent/10 rounded-full px-3 py-1 text-accent-foreground text-xs">
                    {teacher.speciality}
                  </div>
                </div>

                {/* Fun Fact */}
                <div className="bg-gradient-soft rounded-2xl p-3 mt-4">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <Heart className="text-secondary" size={14} />
                    <span className="text-xs font-semibold text-foreground">Fun Fact</span>
                  </div>
                  <p className="text-xs text-foreground/70 italic">
                    {teacher.funFact}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Teacher Philosophy */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-cute text-foreground">
              Why Our Teachers Make the Difference
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 rounded-full p-3 flex-shrink-0">
                  <Heart className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-playful font-semibold text-foreground mb-2">
                    Passionate & Caring
                  </h4>
                  <p className="text-foreground/70 text-sm">
                    Every teacher is carefully selected for their genuine love of children 
                    and commitment to nurturing young minds.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-secondary/10 rounded-full p-3 flex-shrink-0">
                  <Award className="text-secondary" size={20} />
                </div>
                <div>
                  <h4 className="font-playful font-semibold text-foreground mb-2">
                    Highly Qualified
                  </h4>
                  <p className="text-foreground/70 text-sm">
                    Our team holds degrees in early childhood education, child development, 
                    and related fields, with ongoing professional development.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-accent/10 rounded-full p-3 flex-shrink-0">
                  <Users className="text-accent" size={20} />
                </div>
                <div>
                  <h4 className="font-playful font-semibold text-foreground mb-2">
                    Individual Attention
                  </h4>
                  <p className="text-foreground/70 text-sm">
                    With small class sizes, our teachers can focus on each child's 
                    unique needs, interests, and learning style.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-hero rounded-3xl p-8 shadow-playful text-center">
            <div className="text-4xl mb-4 animate-bounce-gentle">
              👩‍🏫
            </div>
            <h4 className="text-2xl font-cute text-foreground mb-4">
              Join Our Teaching Family
            </h4>
            <p className="text-foreground/80 mb-6 leading-relaxed">
              Are you passionate about early childhood education? We're always 
              looking for dedicated teachers who share our love for nurturing 
              young learners.
            </p>
            
            <div className="space-y-3 text-sm text-foreground/70">
              <div className="flex items-center justify-center gap-2">
                <Star className="text-cta" size={16} />
                <span>Competitive salaries</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Heart className="text-secondary" size={16} />
                <span>Supportive work environment</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Award className="text-primary" size={16} />
                <span>Professional development opportunities</span>
              </div>
            </div>

            <div className="mt-6">
              <a 
                href="mailto:careers@ekidsplayschool.com"
                className="text-primary font-playful font-semibold hover:underline"
              >
                careers@ekidsplayschool.com
              </a>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-16 bg-card rounded-3xl p-8 lg:p-12 shadow-playful text-center">
          <div className="max-w-3xl mx-auto">
            <div className="text-3xl mb-4">💖</div>
            <blockquote className="text-lg lg:text-xl text-foreground/80 italic mb-6 leading-relaxed">
              "The teachers at eKids don't just educate our children – they truly care for them. 
              My daughter comes home every day excited to share what she learned and can't wait 
              to see her teachers again. That says everything about the love and dedication here."
            </blockquote>
            <cite className="text-foreground/60 font-playful">
              — Parent Testimonial
            </cite>
            
            <div className="flex justify-center space-x-2 mt-4">
              <Star className="text-cta animate-pulse-soft" size={20} />
              <Star className="text-cta animate-pulse-soft" size={20} />
              <Star className="text-cta animate-pulse-soft" size={20} />
              <Star className="text-cta animate-pulse-soft" size={20} />
              <Star className="text-cta animate-pulse-soft" size={20} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeachersSection;