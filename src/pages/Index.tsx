import HeroSection from "@/components/HeroSection";
import WhyPlaySchoolSection from "@/components/WhyPlaySchoolSection";
import ValuesSection from "@/components/ValuesSection";
import ActivitiesSection from "@/components/ActivitiesSection";
import TeachersSection from "@/components/TeachersSection";
import SafetySection from "@/components/SafetySection";
import AppointmentSection from "@/components/AppointmentSection";
import PromoBannerSection from "@/components/PromoBannerSection";
import PentemindSection from "@/components/PentemindSection";
import AboutBriefSection from "@/components/AboutBriefSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import WhyChooseShowcaseSection from "@/components/WhyChooseShowcaseSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <PromoBannerSection />
      <PentemindSection />
      <AboutBriefSection />
      <WhyChooseSection />
      <WhyChooseShowcaseSection />
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
