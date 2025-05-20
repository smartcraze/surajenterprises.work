import AboutUs from "@/components/Aboutus";
import HeroSection from "@/components/Herosection";
import Footer from "@/components/Footer";
import { Toaster } from 'react-hot-toast';
function Home() {
  return (
    <div>
      <Toaster />
      <HeroSection />
      <AboutUs />
      <Footer />

    </div>
  );
}

export default Home;
