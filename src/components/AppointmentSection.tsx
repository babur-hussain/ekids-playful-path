import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, Heart, Star, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useGlassDialog } from "@/components/ui/GlassDialog";

type AppointmentSectionProps = {
  compact?: boolean;
};

const AppointmentSection = ({ compact = false }: AppointmentSectionProps) => {
  const { toast } = useToast();
  const { close } = useGlassDialog();
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    childName: "",
    childAge: "",
    parentName: "",
    parentPhone: "",
    parentEmail: "",
    preferredSchedule: "",
    additionalInfo: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.childName || !formData.parentName || !formData.parentPhone) {
      toast({
        title: "Please fill in required fields",
        description: "Child's name, parent name, and phone number are required.",
        variant: "destructive"
      });
      return;
    }

    // Submit to backend
    fetch((import.meta as any).env?.VITE_API_BASE ? `${(import.meta as any).env.VITE_API_BASE}/appointments` : '/api/appointments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    }).then(async (resp) => {
      if (!resp.ok) throw new Error('Failed');
      setSuccess(true);
      setTimeout(() => {
        close();
        setSuccess(false);
      }, 1600);
    }).catch(() => {
      toast({ title: 'Failed to send appointment', variant: 'destructive' });
    });

    // Reset form
    setFormData({
      childName: "",
      childAge: "",
      parentName: "",
      parentPhone: "",
      parentEmail: "",
      preferredSchedule: "",
      additionalInfo: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className={compact ? "py-2 bg-transparent relative" : "py-20 bg-gradient-soft relative overflow-hidden"}>
      {!compact && (
        <>
          {/* Background elements */}
          <div className="absolute top-16 left-12 text-primary/20 animate-float">
            <Calendar size={50} />
          </div>
          <div className="absolute bottom-20 right-16 text-secondary/20 animate-bounce-gentle">
            <Star size={40} />
          </div>
          <div className="absolute top-1/2 right-8 text-accent/20 animate-pulse-soft">
            <Sparkles size={35} />
          </div>
        </>
      )}

      <div className={compact ? "px-0 relative z-10 bg-gradient-soft rounded-3xl p-4 md:p-8 shadow-soft" : "container mx-auto px-4 relative z-10"}>
        {success && (
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="rounded-2xl bg-card/80 backdrop-blur-md border border-white/30 shadow-2xl px-8 py-10 text-center animate-in fade-in-0 zoom-in-95">
              <div className="text-5xl mb-4">🎉</div>
              <div className="text-xl font-playful text-foreground mb-2">Appointment Submitted!</div>
              <div className="text-foreground/70">We’ll confirm your visit shortly.</div>
            </div>
          </div>
        )}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-cute text-foreground mb-6">
            Book Your{" "}
            <span className="text-transparent bg-gradient-rainbow bg-clip-text animate-bounce-gentle">
              Visit
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Take the first step towards your child's amazing learning journey. 
            Schedule a visit to see our nurturing environment and meet our caring teachers.
          </p>
          
          <div className="flex justify-center items-center space-x-3 mt-6">
            <Heart className="text-secondary animate-pulse-soft" size={20} />
            <span className="text-base font-playful text-foreground/80">
              We're excited to welcome your little one!
            </span>
            <Heart className="text-secondary animate-pulse-soft" size={20} />
          </div>
        </div>

        <div className={compact ? "grid grid-cols-1 gap-6 items-start" : "grid lg:grid-cols-2 gap-12 items-start"}>
          {/* Form */}
          <Card className={compact ? "shadow-soft border bg-card/90 rounded-2xl" : "shadow-playful border-0 bg-card hover-lift"}>
            <CardHeader className={compact ? "text-center pb-4" : "text-center pb-6"}>
              <CardTitle className="text-2xl md:text-3xl font-playful text-foreground flex items-center justify-center gap-2">
                <Calendar className="text-primary" size={24} />
                Schedule Your Visit
              </CardTitle>
            </CardHeader>
            <CardContent className={compact ? "pt-2" : undefined}>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Child Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-playful font-semibold text-foreground flex items-center gap-2">
                    <Star className="text-cta" size={18} />
                    About Your Child
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="childName" className="text-foreground font-playful">
                        Child's Name *
                      </Label>
                      <Input 
                        id="childName"
                        value={formData.childName}
                        onChange={(e) => handleInputChange("childName", e.target.value)}
                        placeholder="Enter your child's name"
                        className="border-2 border-border focus:border-primary transition-colors"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="childAge" className="text-foreground font-playful">
                        Child's Age
                      </Label>
                      <Select onValueChange={(value) => handleInputChange("childAge", value)}>
                        <SelectTrigger className="border-2 border-border focus:border-primary">
                          <SelectValue placeholder="Select age group" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1.5-2">1.5 - 2 years</SelectItem>
                          <SelectItem value="2-3">2 - 3 years</SelectItem>
                          <SelectItem value="3-4">3 - 4 years</SelectItem>
                          <SelectItem value="4-5">4 - 5 years</SelectItem>
                          <SelectItem value="5-6">5 - 6 years</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Parent Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-playful font-semibold text-foreground flex items-center gap-2">
                    <Heart className="text-secondary" size={18} />
                    Parent/Guardian Details
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="parentName" className="text-foreground font-playful">
                        Your Name *
                      </Label>
                      <Input 
                        id="parentName"
                        value={formData.parentName}
                        onChange={(e) => handleInputChange("parentName", e.target.value)}
                        placeholder="Enter your full name"
                        className="border-2 border-border focus:border-primary transition-colors"
                      />
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="parentPhone" className="text-foreground font-playful">
                          Phone Number *
                        </Label>
                        <Input 
                          id="parentPhone"
                          type="tel"
                          value={formData.parentPhone}
                          onChange={(e) => handleInputChange("parentPhone", e.target.value)}
                          placeholder="Your contact number"
                          className="border-2 border-border focus:border-primary transition-colors"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="parentEmail" className="text-foreground font-playful">
                          Email Address
                        </Label>
                        <Input 
                          id="parentEmail"
                          type="email"
                          value={formData.parentEmail}
                          onChange={(e) => handleInputChange("parentEmail", e.target.value)}
                          placeholder="your.email@example.com"
                          className="border-2 border-border focus:border-primary transition-colors"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Preferences */}
                <div className="space-y-4">
                  <h3 className="text-lg font-playful font-semibold text-foreground flex items-center gap-2">
                    <Clock className="text-accent" size={18} />
                    Preferred Schedule
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="schedule" className="text-foreground font-playful">
                        When would you like to visit?
                      </Label>
                      <Select onValueChange={(value) => handleInputChange("preferredSchedule", value)}>
                        <SelectTrigger className="border-2 border-border focus:border-primary">
                          <SelectValue placeholder="Select your preferred time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="morning">Morning (9:00 AM - 12:00 PM)</SelectItem>
                          <SelectItem value="afternoon">Afternoon (1:00 PM - 4:00 PM)</SelectItem>
                          <SelectItem value="weekend">Weekend Visit</SelectItem>
                          <SelectItem value="flexible">I'm flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="additionalInfo" className="text-foreground font-playful">
                        Additional Information
                      </Label>
                      <Textarea 
                        id="additionalInfo"
                        value={formData.additionalInfo}
                        onChange={(e) => handleInputChange("additionalInfo", e.target.value)}
                        placeholder="Any special needs, questions, or information you'd like us to know about your child..."
                        className="border-2 border-border focus:border-primary transition-colors min-h-[100px]"
                      />
                    </div>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  variant="cta" 
                  size="lg" 
                  className="w-full"
                >
                  <Calendar className="mr-2" size={20} />
                  Book Our Visit Today!
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Right column content (hidden in compact) */}
          {!compact && (
            <div className="space-y-6">
              <Card className="shadow-playful border-0 bg-gradient-hero hover-lift">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-4 animate-bounce-gentle">🎉</div>
                  <h3 className="text-2xl font-cute text-foreground mb-4">What to Expect</h3>
                  <div className="space-y-3 text-foreground/80">
                    <p>• Meet our friendly teachers and staff</p>
                    <p>• Tour our safe, colorful classrooms</p>
                    <p>• See children learning through play</p>
                    <p>• Ask questions about our programs</p>
                    <p>• Learn about our daily routines</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-playful border-0 bg-card hover-lift">
                <CardContent className="p-8 text-center">
                  <div className="text-3xl mb-4 animate-float">📞</div>
                  <h3 className="text-xl font-cute text-foreground mb-4">Quick Contact</h3>
                  <div className="space-y-2 text-foreground/70">
                    <p className="font-playful">Call us directly:</p>
                    <p className="text-lg font-bold text-primary">+1 (555) 123-KIDS</p>
                    <p className="text-sm">Monday - Friday, 8:00 AM - 5:00 PM</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-playful border-0 bg-accent/10 hover-lift">
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center space-x-2 mb-4">
                    <Sparkles className="text-accent animate-pulse-soft" size={24} />
                    <Heart className="text-secondary animate-bounce-gentle" size={24} />
                    <Sparkles className="text-accent animate-pulse-soft" size={24} />
                  </div>
                  <h3 className="text-lg font-cute text-foreground mb-3">We Can't Wait to Meet You!</h3>
                  <p className="text-sm text-foreground/70">Every child brings their own special light to our school. We're here to help that light shine brighter.</p>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;