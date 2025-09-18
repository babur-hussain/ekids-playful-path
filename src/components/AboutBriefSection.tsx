import heroImage from "@/assets/teacher-image.jpg";

const AboutBriefSection = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-cute text-foreground">About Us</h2>
          <div className="mx-auto mt-2 h-1 w-24 rounded-full bg-primary/60" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-[2rem] overflow-hidden shadow-playful will-change-transform" style={{transform: 'translateZ(0)'}}>
              <img src={heroImage} alt="Happy child at school" className="w-full h-auto object-cover" />
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-playful text-foreground">eKids Preschool</h3>
            <p className="text-foreground/80 leading-relaxed">
              eKids Preschool is a warm, playful learning space where children explore, discover, and grow. Our
              experienced educators blend structured activities with creative play to build strong foundations in
              language, numbers, motor skills, social-emotional learning, and curiosity.
            </p>

            <h4 className="text-xl font-playful text-foreground">Our Advantage</h4>
            <p className="text-foreground/80 leading-relaxed">
              We focus on safety, love, and joyful learning. With small group attention and engaging classrooms, we
              ensure every child feels seen, supported, and excited to come back every day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBriefSection;


