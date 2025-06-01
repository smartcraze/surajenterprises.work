import AboutUs from "@/components/Aboutus";
import HeroSection from "@/components/Herosection";
import Footer from "@/components/Footer";
import WhyChooseUs from "@/components/WhyChooseUs";
import { ContactForm } from "@/components/Contactus";
import { Testomonials } from "@/components/Testomonials";
function Home() {
  return (
    <div className="bg-gradient-to-b from-gray-50 via-blue-50 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <HeroSection />
      <AboutUs />
      <WhyChooseUs />
      <ContactForm />
      <Testomonials />
      <Footer />
    </div>
  );
}

export default Home;
