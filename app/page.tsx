import AboutUs from "@/components/Aboutus";
import HeroSection from "@/components/Herosection";
import Footer from "@/components/Footer";
import { Toaster } from 'react-hot-toast';
import ManPower from "@/components/ManPower";
function Home() {
  return (
    <div>
      <Toaster />
      <HeroSection />
      <ManPower />
      <AboutUs />
      <Footer />

    </div>
  );
}

export default Home;
