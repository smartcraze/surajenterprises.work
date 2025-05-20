"use client"
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const phrases = [
  "Building Your Vision with Precision",
  "Crafting Excellence in Construction",
  "Delivering Quality & Reliability",
  "Your Trusted Construction Partner"
];

export default function HeroSection() {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(false);
      setTimeout(() => {
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        setIsTyping(true);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const notify = () => toast.success("20+ Years of Trusted Civil Contracting Experience");

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
        <div className="h-32 flex items-center justify-center">
          <AnimatePresence mode="wait">
            {isTyping && (
              <motion.h1
                key={currentPhraseIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-2xl text-shadow-black text-shadow-md"
              >
                {phrases[currentPhraseIndex]}
              </motion.h1>
            )}
          </AnimatePresence>
        </div>

        <p className="text-lg md:text-2xl mb-6 drop-shadow-md text-yellow-500 bg-black/50 p-2 rounded-lg font-sans">
          High-quality construction solutions tailored to your needs.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/get-quote" >
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-xl shadow-lg transition">
              Get a Quote
            </Button>
          </Link>

          <Link href="/contact">
            <Button className="bg-white/80 text-black hover:bg-white hover:shadow-xl font-medium px-6 py-3 rounded-xl backdrop-blur-md transition border border-white/40">
              Contact Us
            </Button>
          </Link>

          <Link href="/projects">
            <Button className="bg-gradient-to-r from-transparent to-white/10 text-white hover:from-white/20 hover:to-white/30 border border-white/30 px-6 py-3 rounded-xl transition backdrop-blur-md font-medium">
              See Projects
            </Button>
          </Link>
        </div>

        {/* Experience Button - Positioned below main buttons with different styling */}
        <div className="mt-8">
          <Button
            onClick={notify}
            className="bg-gradient-to-r from-amber-400 to-yellow-600 hover:from-amber-500 hover:to-yellow-700 text-white font-bold px-8 py-4 rounded-full shadow-xl transition-all transform hover:scale-105 border-2 border-yellow-300/30"
          >
            <span className="flex items-center gap-2">
              <span className="text-xs font-normal">Our</span>
              <span>Experience</span>
              <span className="text-xs font-normal">→</span>
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
}