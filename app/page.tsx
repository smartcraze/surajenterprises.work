import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full text-white overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/hero.webp"
          alt="Construction Site"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
      
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          Building Your Vision with Precision
        </h1>
        <p className="text-lg md:text-2xl mb-6 drop-shadow-md">
          High-quality construction solutions tailored to your needs.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-xl transition">
            Get a Quote
          </Button>
          <Button className="bg-white text-black hover:bg-gray-200 font-semibold px-6 py-3 rounded-xl transition">
            Contact Us
          </Button>
          <Button className="bg-transparent border border-white text-white px-6 py-3 rounded-xl hover:bg-white hover:text-black transition">
            See Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
