import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden text-black dark:text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/hero.webp")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Gradient Overlays (side shadows + neutral tint) */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Neutral tint overlay (not theme-dependent) */}
        <div className="absolute inset-0 bg-black/50" />
        {/* Left shadow */}
        <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-black/60 to-transparent" />
        {/* Right shadow */}
        <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-black/60 to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg text-white">
          Building Your Vision with Precision
        </h1>
        <p className="text-lg md:text-2xl mb-6 drop-shadow-md text-white">
          High-quality construction solutions tailored to your needs.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-xl transition">
            Get a Quote
          </Button>
          <Button className="bg-white text-black hover:bg-gray-200 font-semibold px-6 py-3 rounded-xl transition">
            Contact Us
          </Button>
          <Button className="border border-white  px-6 py-3 rounded-xl hover:bg-white hover:text-black transition text-black">
            See Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
