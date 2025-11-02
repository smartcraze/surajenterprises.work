import Footer from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { ComplianceSection } from "@/components/compliance-section";
import { WhyChooseUs } from "@/components/why-choose-us";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <ComplianceSection />
      <WhyChooseUs />
      <Footer />
    </main>
  );
}
