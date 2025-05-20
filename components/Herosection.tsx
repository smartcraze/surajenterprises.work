import { Button } from '@/components/ui/button';
import Link from 'next/link';

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
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-black/60 to-transparent" />
        <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-black/60 to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4  text-white drop-shadow-2xl text-shadow-black  text-shadow-md ">
          Building Your Vision with Precision
        </h1>
        <p className="text-lg md:text-2xl mb-6 drop-shadow-md text-yellow-500 bg-black/50 p-2 rounded-lg font-sans">
          High-quality construction solutions tailored to your needs.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/get-quote" >
            <Button  className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-xl shadow-lg transition">
              Get a Quote
            </Button>
          </Link>

          <Link href="/contact">
            <Button  className="bg-white/80 text-black hover:bg-white hover:shadow-xl font-medium px-6 py-3 rounded-xl backdrop-blur-md transition border border-white/40">
              Contact Us
            </Button>
          </Link>

          <Link href="/projects">
            <Button  className="bg-gradient-to-r from-transparent to-white/10 text-white hover:from-white/20 hover:to-white/30 border border-white/30 px-6 py-3 rounded-xl transition backdrop-blur-md font-medium">
              See Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
