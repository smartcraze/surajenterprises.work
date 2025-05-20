import AboutUs from "@/components/Aboutus";
import HeroSection from "@/components/Herosection";
import Footer from "@/components/Footer";
import { Toaster } from 'react-hot-toast';
import ManPower from "@/components/ManPower";
import WhyChooseUs from "@/components/WhyChooseUs";
import { ContactForm } from "@/components/Contactus";

function Home() {
  return (
    <div className="bg-gradient-to-b from-gray-50 via-blue-50 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Toaster />
      <HeroSection />
      <AboutUs />
      <WhyChooseUs />
      <ContactForm />
      <Footer />

    </div>
  );
}

export default Home;
