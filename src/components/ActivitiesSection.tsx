import { Palette, BookOpen, TreePine, Music, Languages, Gamepad2, Leaf, Heart } from "lucide-react";
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
    <section className="py-20 bg-muted relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-dots opacity-30"></div>
      
      {/* Floating elements */}
      <div className="absolute top-16 left-8 text-primary/20 animate-float">
        <Palette size={40} />
      </div>
      <div className="absolute bottom-24 right-12 text-secondary/20 animate-bounce-gentle">
        <Music size={36} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-cute text-foreground mb-6">
            Fun{" "}
            <span className="text-transparent bg-gradient-rainbow bg-clip-text animate-bounce-gentle">
              Activities
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Every day brings new adventures! Our carefully planned activities ensure 
            your child develops essential skills while having the time of their life.
          </p>
        </div>

        {/* Featured Activity Image */}
        <div className="mb-16 text-center">
          <div className="relative inline-block rounded-3xl overflow-hidden shadow-playful hover-lift">
            <img 
              src={activityIcons} 
              alt="Colorful educational activity icons and illustrations"
              className="w-full max-w-2xl h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
          </div>
        </div>

        {/* Activities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {activities.map((activity, index) => (
            <div 
              key={activity.title}
              className="bg-card rounded-3xl p-6 shadow-soft hover-lift group text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon and Emoji */}
              <div className="relative mb-6">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-soft ${activity.color} group-hover:animate-wiggle`}>
                  <activity.icon size={28} />
                </div>
                <div className="absolute -top-2 -right-2 text-2xl group-hover:animate-bounce-gentle">
                  {activity.emoji}
                </div>
              </div>

              <h3 className="text-lg font-playful font-bold text-foreground mb-3">
                {activity.title}
              </h3>
              <p className="text-sm text-foreground/70 leading-relaxed">
                {activity.description}
              </p>
            </div>
          ))}
        </div>

        {/* Daily Schedule Highlight */}
        <div className="bg-gradient-hero rounded-3xl p-8 lg:p-12 shadow-playful">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-cute text-foreground mb-4">
              A Day at eKids
            </h3>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Our structured yet flexible daily routine ensures a perfect balance 
              of learning, play, rest, and discovery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { time: "8:00 AM", activity: "Welcome Circle", icon: "👋" },
              { time: "9:00 AM", activity: "Learning Play", icon: "🧠" },
              { time: "11:00 AM", activity: "Outdoor Fun", icon: "🌞" },
              { time: "2:00 PM", activity: "Creative Time", icon: "🎨" }
            ].map((schedule, index) => (
              <div 
                key={schedule.time}
                className="bg-card/80 rounded-2xl p-4 text-center group hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-2xl mb-2 group-hover:animate-bounce-gentle">
                  {schedule.icon}
                </div>
                <div className="text-sm font-bold text-foreground mb-1">
                  {schedule.time}
                </div>
                <div className="text-xs text-foreground/70">
                  {schedule.activity}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="flex justify-center space-x-2 mb-6">
            <Heart className="text-secondary animate-pulse-soft" size={24} />
            <span className="text-lg font-playful text-foreground">
              Ready to see the magic happen?
            </span>
            <Heart className="text-secondary animate-pulse-soft" size={24} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;