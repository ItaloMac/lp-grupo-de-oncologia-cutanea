import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PillarsSection from "@/components/PillarsSection";
import ServicesSection from "@/components/ServicesSection";
import CancerTypesSection from "@/components/CancerTypesSection";
import SurgerySection from "@/components/SurgerySection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <TeamSection />
        <PillarsSection />
        <ServicesSection />
        <CancerTypesSection />
        <SurgerySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
