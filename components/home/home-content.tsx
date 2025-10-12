import { HeroSection } from "./hero-section";
import { ServicesSection } from "./services-section";
import { FeaturesSection } from "./features-section";
import { ProjectsSection } from "./projects-section";
import { ManpowerSection } from "./manpower-section";
import { TestimonialsSection } from "./testimonials-section";
import { ContactSection } from "./contact-section";

export const HomeContent = () => {
  return (
    <main className="flex flex-col overflow-hidden">
      <HeroSection />

      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10 md:space-y-10">
        <ServicesSection />
        <FeaturesSection />
        <ProjectsSection />
        <ManpowerSection />
        <TestimonialsSection />
        <ContactSection />
      </div>
    </main>
  );
};
