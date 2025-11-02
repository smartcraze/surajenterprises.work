import Footer from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <Footer />
    </main>
  );
}
