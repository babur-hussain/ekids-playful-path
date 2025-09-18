import { Palette, BookOpen, TreePine, Music, Languages, Gamepad2, Leaf, Heart, Sparkles, Star } from "lucide-react";
import GlassDialog from "@/components/ui/GlassDialog";
import activityIcons from "@/assets/activity-icons.jpg";

const activities = [
  {
    icon: Palette,
    title: "Art & Craft",
    description: "Creative expression through painting, drawing, and hands-on craft projects that develop fine motor skills.",
    color: "text-secondary",
    emoji: "🎨"
  },
  {
    icon: BookOpen,
    title: "Storytelling",
    description: "Magical story sessions that spark imagination, build vocabulary, and create a love for reading.",
    color: "text-primary",
    emoji: "📚"
  },
  {
    icon: TreePine,
    title: "Outdoor Play",
    description: "Fresh air adventures in our safe playground, promoting physical development and gross motor skills.",
    color: "text-accent",
    emoji: "🌳"
  },
  {
    icon: Music,
    title: "Music & Dance",
    description: "Rhythm, melody, and movement activities that enhance coordination and musical appreciation.",
    color: "text-cta",
    emoji: "🎵"
  },
  {
    icon: Languages,
    title: "Language Learning",
    description: "Fun introduction to letters, sounds, and basic words through games and interactive activities.",
    color: "text-primary",
    emoji: "🔤"
  },
  {
    icon: Gamepad2,
    title: "Interactive Games",
    description: "Educational puzzles and games that develop problem-solving skills and logical thinking.",
    color: "text-secondary",
    emoji: "🧩"
  },
  {
    icon: Leaf,
    title: "Nature Exploration",
    description: "Discovering the natural world through garden visits, plant care, and outdoor investigations.",
    color: "text-accent",
    emoji: "🌱"
  }
];

const ActivitiesSection = () => {
  return (
    <section className="py-24 bg-gradient-soft relative overflow-hidden">
      {/* Enhanced background decoration */}
      <div className="absolute inset-0 bg-clouds opacity-40"></div>
      <div className="absolute inset-0 bg-gradient-glow opacity-20"></div>
      
      {/* Floating elements */}
      <div className="absolute top-16 left-8 text-primary/20 animate-float">
        <Palette size={50} />
      </div>
      <div className="absolute bottom-24 right-12 text-secondary/20 animate-bounce-gentle">
        <Music size={45} />
      </div>
      <div className="absolute top-1/3 right-1/4 text-accent/15 animate-sparkle">
        <TreePine size={40} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="relative inline-block mb-8">
            <h2 className="text-5xl lg:text-7xl font-cute text-foreground mb-6">
              Fun{" "}
              <span className="text-transparent bg-gradient-magic bg-clip-text animate-gradient-shift bg-[length:200%_200%]">
                Activities
              </span>
            </h2>
            <div className="absolute -top-6 -right-6 text-4xl animate-rotate-slow">🎨</div>
            <div className="absolute -bottom-2 -left-4 text-3xl animate-bounce-gentle">🎵</div>
          </div>
          <p className="text-xl lg:text-2xl text-foreground/75 max-w-4xl mx-auto leading-relaxed">
            Every day brings new adventures! Our carefully planned activities ensure 
            your child develops essential skills while having the time of their life in 
            a world of creativity and wonder.
          </p>
        </div>

        {/* Enhanced Featured Activity Image */}
        <div className="mb-20 text-center">
          <div className="relative inline-block group">
            <div className="relative rounded-[2rem] overflow-hidden shadow-magical hover:shadow-glow transition-all duration-500">
              <img 
                src={activityIcons} 
                alt="Colorful educational activity icons and illustrations"
                className="w-full max-w-3xl h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            {/* Floating decorative elements */}
            <div className="absolute -top-4 -left-4 bg-gradient-sunset p-4 rounded-2xl shadow-dreamy animate-float">
              <Palette className="text-secondary-foreground" size={24} />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-gradient-magic p-4 rounded-2xl shadow-dreamy animate-bounce-gentle">
              <Music className="text-accent-foreground" size={24} />
            </div>
          </div>
        </div>

        {/* Enhanced Activities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-20">
          {activities.map((activity, index) => (
            <GlassDialog
              key={activity.title}
              title={activity.title}
              description={activity.description}
              trigger={
                <div 
                  className="relative group cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative bg-card rounded-3xl p-8 shadow-dreamy hover:shadow-magical transition-all duration-500 hover:scale-105 card-magical text-center h-full">
                    {/* Icon and Emoji container */}
                    <div className="relative mb-8">
                      <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-soft ${activity.color} group-hover:animate-wiggle transition-all duration-300 shadow-soft`}>
                        <activity.icon size={32} />
                      </div>
                      <div className="absolute -top-3 -right-3 text-3xl group-hover:animate-bounce-gentle transform group-hover:scale-125 transition-transform duration-300">
                        {activity.emoji}
                      </div>
                      {/* Magical sparkle effect */}
                      <div className="absolute -bottom-1 -left-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-sparkle">
                        <Sparkles className="text-cta" size={16} />
                      </div>
                    </div>

                    <h3 className="text-xl font-playful font-bold text-foreground mb-4">
                      {activity.title}
                    </h3>
                    <p className="text-sm text-foreground/70 leading-relaxed">
                      {activity.description}
                    </p>
                    <div className="absolute inset-0 rounded-3xl bg-gradient-rainbow opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10"></div>
                  </div>
                </div>
              }
            >
              <div className="text-foreground/80 leading-relaxed space-y-3">
                <p>Our {activity.title.toLowerCase()} sessions are designed to be hands-on, joyful, and developmentally appropriate.</p>
                <p>We focus on building confidence, collaboration, and creativity through guided play.</p>
              </div>
            </GlassDialog>
          ))}
        </div>

        {/* Enhanced Daily Schedule */}
        <div className="relative">
          <div className="bg-gradient-hero rounded-[2rem] p-12 lg:p-16 shadow-magical relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 bg-stars opacity-30"></div>
            <div className="absolute top-8 left-8 text-secondary/20 animate-float">
              <Heart size={40} />
            </div>
            <div className="absolute bottom-8 right-8 text-accent/20 animate-rotate-slow">
              <Star size={35} />
            </div>
            
            <div className="text-center mb-12 relative z-10">
              <div className="text-5xl mb-6 animate-bounce-gentle">⏰</div>
              <h3 className="text-4xl lg:text-5xl font-cute text-foreground mb-6">
                A Day at eKids
              </h3>
              <p className="text-xl text-foreground/85 max-w-3xl mx-auto leading-relaxed">
                Our structured yet flexible daily routine ensures a perfect balance 
                of learning, play, rest, and discovery in a magical environment.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 relative z-10">
              {[
                { time: "8:00 AM", activity: "Welcome Circle", icon: "👋", color: "bg-primary/20" },
                { time: "9:00 AM", activity: "Learning Play", icon: "🧠", color: "bg-secondary/20" },
                { time: "11:00 AM", activity: "Outdoor Fun", icon: "🌞", color: "bg-accent/20" },
                { time: "2:00 PM", activity: "Creative Time", icon: "🎨", color: "bg-cta/20" }
              ].map((schedule, index) => (
                <div 
                  key={schedule.time}
                  className="relative group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`${schedule.color} rounded-2xl p-6 text-center group hover:scale-105 transition-all duration-300 shadow-soft hover:shadow-playful card-magical`}>
                    <div className="text-4xl mb-4 group-hover:animate-bounce-gentle transition-all duration-300">
                      {schedule.icon}
                    </div>
                    <div className="text-lg font-bold text-foreground mb-2">
                      {schedule.time}
                    </div>
                    <div className="text-sm text-foreground/70 font-playful">
                      {schedule.activity}
                    </div>
                    
                    {/* Hover effect decoration */}
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Sparkles className="text-primary" size={12} />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center relative z-10">
              <div className="flex justify-center space-x-3 mb-6">
                <Heart className="text-secondary animate-pulse-soft" size={28} />
                <span className="text-xl font-playful text-foreground">
                  Ready to see the magic happen?
                </span>
                <Heart className="text-secondary animate-pulse-soft" size={28} />
              </div>
              
              <div className="inline-flex items-center gap-2 bg-card/30 rounded-full px-6 py-3 backdrop-blur-sm">
                <Sparkles className="text-cta animate-sparkle" size={20} />
                <span className="text-foreground/80 font-playful">Every day is an adventure!</span>
                <Sparkles className="text-cta animate-sparkle" size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;