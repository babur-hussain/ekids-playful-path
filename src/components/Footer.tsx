import { Heart, Phone, Mail, MapPin, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gradient-hero relative overflow-hidden">
      {/* Top wave decoration */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" className="w-full h-16 fill-background rotate-180">
          <path d="M0,60 C300,20 900,100 1200,60 L1200,120 L0,120 Z"></path>
        </svg>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-12 text-secondary/20 animate-float">
        <Star size={30} />
      </div>
      <div className="absolute bottom-20 right-16 text-accent/20 animate-bounce-gentle">
        <Heart size={35} />
      </div>

      <div className="container mx-auto px-4 pt-20 pb-8 relative z-10">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          {/* School Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-3xl font-cute text-foreground mb-4">
                eKids Play School
              </h3>
              <p className="text-foreground/80 leading-relaxed max-w-md">
                Where learning meets fun! We provide a nurturing environment for children 
                aged 1.5-6 years to explore, play, and grow through quality early childhood education.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-foreground/70">
                <MapPin className="text-primary" size={18} />
                <span>123 Rainbow Street, Happy Valley, HV 12345</span>
              </div>
              <div className="flex items-center gap-3 text-foreground/70">
                <Phone className="text-secondary" size={18} />
                <span>+1 (555) 123-KIDS</span>
              </div>
              <div className="flex items-center gap-3 text-foreground/70">
                <Mail className="text-accent" size={18} />
                <span>hello@ekidsplayschool.com</span>
              </div>
            </div>

            <div className="flex space-x-4">
              <Button variant="outline" size="sm">
                Facebook
              </Button>
              <Button variant="outline" size="sm">
                Instagram
              </Button>
              <Button variant="outline" size="sm">
                YouTube
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-playful font-bold text-foreground">
              Quick Links
            </h4>
            <div className="space-y-3">
              {[
                "About Us",
                "Our Programs",
                "Activities",
                "Teachers",
                "Safety & Care",
                "Enrollment",
                "Contact Us"
              ].map((link) => (
                <div key={link}>
                  <a 
                    href="#" 
                    className="text-foreground/70 hover:text-primary transition-colors duration-200 hover:underline"
                  >
                    {link}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Hours & Info */}
          <div className="space-y-6">
            <h4 className="text-xl font-playful font-bold text-foreground">
              School Hours
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-foreground/70">
                <Clock className="text-cta" size={16} />
                <div>
                  <div className="font-semibold">Monday - Friday</div>
                  <div className="text-sm">7:30 AM - 6:00 PM</div>
                </div>
              </div>
              <div className="text-foreground/70 text-sm">
                Extended hours available upon request
              </div>
            </div>

            <div className="bg-card/20 rounded-2xl p-4">
              <div className="text-center mb-3">
                <div className="text-2xl animate-bounce-gentle">🎉</div>
              </div>
              <h5 className="font-playful font-semibold text-foreground mb-2 text-center">
                Now Enrolling!
              </h5>
              <p className="text-sm text-foreground/70 text-center mb-3">
                Limited spots available for Fall 2024
              </p>
              <Button variant="cta" size="sm" className="w-full">
                Apply Today
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-foreground/60 text-sm">
              © 2024 eKids Play School. All rights reserved. Made with{" "}
              <Heart className="inline text-secondary" size={14} /> for little learners.
            </div>
            
            <div className="flex space-x-6 text-sm text-foreground/60">
              <a href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Accessibility
              </a>
            </div>
          </div>

          {/* Final Message */}
          <div className="text-center mt-6 pt-6 border-t border-foreground/10">
            <div className="flex justify-center space-x-2 mb-2">
              <Star className="text-cta animate-pulse-soft" size={16} />
              <Heart className="text-secondary animate-bounce-gentle" size={16} />
              <Star className="text-cta animate-pulse-soft" size={16} />
            </div>
            <p className="text-foreground/70 text-sm italic">
              "Every child is a different kind of flower, and together they make this world a beautiful garden."
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;