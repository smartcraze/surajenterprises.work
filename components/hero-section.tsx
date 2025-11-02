"use client";
import React from "react";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { Button } from "@/components/ui/button";
import { FeatureCards } from "@/components/feature-cards";
import Link from "next/link";

export function HeroSection() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-white dark:bg-neutral-900 px-4">
      <BackgroundRippleEffect />

      <div className="relative z-10 text-center w-full max-w-5xl mx-auto">
        {/* Badge */}
       

        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-neutral-900 dark:text-white leading-tight animate-fade-in-up">
          Building Your Vision with&nbsp;Precision
        </h1>

        <p className="mt-6 text-xl sm:text-2xl text-neutral-700 dark:text-neutral-300 font-semibold animate-fade-in-up animation-delay-100">
          Experts in{" "}
          <span className="underline-squiggle text-yellow-700 dark:text-white font-bold">
            Bar Bending & Shuttering
          </span>{" "}
          Works
        </p>

        <p className="mt-6 text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
          We take up building contracts and deliver reliable, on-time, and
          high-quality construction services. Our skilled team ensures strength,
          precision, and excellence in every project we handle.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-400">
          <Button
            size="lg"
            className="bg-black text-white hover:bg-neutral-800 w-[200px] hover:scale-105 transition-transform"
          >
            Get a Quote
          </Button>
          <Link href="/projects">
            <Button
              variant="outline"
              size="lg"
              className="border-neutral-400 text-neutral-800 dark:text-white dark:border-neutral-700 w-[200px] hover:scale-105 transition-transform"
            >
              View Our Work
            </Button>
          </Link>
        </div>
        
        {/* Key Features Grid */}
        <FeatureCards />
      </div>
    </div>
  );
}
