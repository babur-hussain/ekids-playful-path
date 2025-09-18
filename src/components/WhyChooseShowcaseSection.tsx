import heroImage from "@/assets/hero-image.jpg";
import activityImage from "@/assets/activity-icons.jpg";
import teacherImage from "@/assets/teacher-image.jpg";

type Item = {
  title: string;
  description: string;
  image: string;
  shape: "square" | "circle" | "tilt" | "triangle";
};

const items: Item[] = [
  {
    title: "Holistic Learning",
    description: "All‑round development through academics, play, and life skills.",
    image: activityImage,
    shape: "square",
  },
  {
    title: "Expert Educators",
    description: "Caring teachers nurturing every child's unique potential.",
    image: teacherImage,
    shape: "circle",
  },
  {
    title: "Safe and Secure",
    description: "Protected, child‑friendly environment for peace of mind.",
    image: heroImage,
    shape: "tilt",
  },
  {
    title: "Innovative Learning",
    description: "Modern methods that make learning joyful and impactful.",
    image: activityImage,
    shape: "triangle",
  },
];

const Frame = ({ shape, src, alt }: { shape: Item["shape"]; src: string; alt: string }) => {
  if (shape === "circle") {
    return (
      <div className="relative w-48 h-48 mx-auto rounded-full border-4 border-primary/40 shadow-soft overflow-hidden bg-card">
        <img src={src} alt={alt} className="w-full h-full object-cover" />
        <div className="absolute inset-0 rounded-full ring-2 ring-primary/30 ring-offset-4 ring-offset-background pointer-events-none" />
      </div>
    );
  }
  if (shape === "tilt") {
    return (
      <div className="relative w-48 h-48 mx-auto rotate-6">
        <div className="absolute inset-0 rounded-2xl border-4 border-accent/40 bg-card shadow-playful overflow-hidden">
          <img src={src} alt={alt} className="w-full h-full object-cover" />
        </div>
      </div>
    );
  }
  if (shape === "triangle") {
    return (
      <div className="relative w-48 h-48 mx-auto">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon points="50,5 95,90 5,90" className="fill-card" />
          <polygon points="50,5 95,90 5,90" className="fill-none stroke-[3]" stroke="currentColor" />
          <defs>
            <clipPath id="triClip">
              <polygon points="50,8 92,88 8,88" />
            </clipPath>
          </defs>
          <image href={src} x="0" y="0" width="100" height="100" preserveAspectRatio="xMidYMid slice" clipPath="url(#triClip)" />
        </svg>
      </div>
    );
  }
  // square
  return (
    <div className="relative w-44 h-44 mx-auto -rotate-3">
      <div className="absolute inset-0 rounded-xl border-4 border-primary/40 bg-card shadow-soft overflow-hidden">
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      </div>
      <div className="absolute -inset-2 rounded-xl border-2 border-dashed border-primary/40 pointer-events-none" />
    </div>
  );
};

const DottedPath = () => (
  <svg className="absolute left-0 right-0 -top-8 hidden lg:block" height="170" viewBox="0 0 1200 170" fill="none">
    <path d="M80 120 C 200 40, 340 160, 480 100 S 820 40, 1120 120" stroke="currentColor" className="text-primary/30" strokeDasharray="6 10" strokeWidth="2" />
    <circle cx="260" cy="120" r="6" className="fill-primary/40" />
    <circle cx="600" cy="100" r="6" className="fill-accent/40" />
    <circle cx="940" cy="120" r="6" className="fill-primary/40" />
  </svg>
);

const WhyChooseShowcaseSection = () => {
  return (
    <section className="relative overflow-hidden py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="relative">
          <DottedPath />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
            {items.map((item) => (
              <div key={item.title} className="text-center group">
                <Frame shape={item.shape} src={item.image} alt={item.title} />
                <h3 className="mt-6 text-xl font-playful text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-foreground/70 max-w-xs mx-auto">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseShowcaseSection;


