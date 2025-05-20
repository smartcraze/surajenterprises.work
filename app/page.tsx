import AboutUs from "@/components/Aboutus";
import HeroSection from "@/components/Herosection";
import Footer from "@/components/Footer";
import { Toaster } from 'react-hot-toast';
import ManPower from "@/components/ManPower";
import WhyChooseUs from "@/components/WhyChooseUs";
function Home() {
  return (
    <div>
      <Toaster />
      <HeroSection />
      <AboutUs />
      
      <WhyChooseUs />
      <Footer />

    </div>
  );
}

export default Home;
