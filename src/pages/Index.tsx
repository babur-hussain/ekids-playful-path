import HeroSection from "@/components/HeroSection";
import WhyPlaySchoolSection from "@/components/WhyPlaySchoolSection";
import ValuesSection from "@/components/ValuesSection";
import ActivitiesSection from "@/components/ActivitiesSection";
import TeachersSection from "@/components/TeachersSection";
import SafetySection from "@/components/SafetySection";
import AppointmentSection from "@/components/AppointmentSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <WhyPlaySchoolSection />
      <ValuesSection />
      <ActivitiesSection />
      <TeachersSection />
      <SafetySection />
      <AppointmentSection />
      <Footer />
    </div>
  );
};

export default Index;
