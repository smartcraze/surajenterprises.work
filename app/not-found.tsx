import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Construction, Home, HardHat } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative flex flex-1 w-full flex-col items-center justify-center overflow-hidden bg-white px-4">
   
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(90deg, #000 0px, #000 1px, transparent 1px, transparent 50px),
                           repeating-linear-gradient(0deg, #000 0px, #000 1px, transparent 1px, transparent 50px)`,
        }} />
      </div>

      <div className="relative z-10 text-center w-full max-w-4xl mx-auto max-h-screen flex flex-col justify-center py-8">
        {/* Construction Theme Icons */}
        <div className="flex justify-center items-center gap-6 mb-6 animate-fade-in">
          <Construction className="w-16 h-16 text-amber-600 animate-bounce" style={{ animationDuration: '2s' }} />
          <HardHat className="w-14 h-14 text-neutral-700" />
          <Construction className="w-16 h-16 text-amber-600 animate-bounce" style={{ animationDuration: '2s', animationDelay: '0.5s' }} />
        </div>

        {/* 404 Number */}
        <div className="mb-6 animate-fade-in-up">
          <h1 className="text-[150px] sm:text-[180px] lg:text-[200px] font-extrabold leading-none text-neutral-900 tracking-tighter">
            404
          </h1>
          <div className="h-1.5 w-32 bg-amber-600 mx-auto -mt-8 rounded-full" />
        </div>

        {/* Main Message */}
        <div className="space-y-3 mb-6 animate-fade-in-up animation-delay-100">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900">
            Page Under Construction
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto">
            Looks like this page hasn&apos;t been built yet. Our team is working on it!
          </p>
        </div>

        {/* Construction Message Box */}
        <div className="bg-amber-50 border-2 border-amber-600 rounded-xl p-5 mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center">
                <HardHat className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="text-left">
              <h3 className="font-semibold text-neutral-900 mb-1.5 text-base">Construction Notice</h3>
              <p className="text-sm text-neutral-700">
                The page you&apos;re looking for might have been moved, deleted, or is currently under development.
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-300">
          <Link href="/">
            <Button
              size="lg"
              className="bg-black text-white hover:bg-neutral-800 w-[220px] hover:scale-105 transition-transform"
            >
              <Home className="w-5 h-5" />
              Back to Home
            </Button>
          </Link>
          <Link href="/projects">
            <Button
              variant="outline"
              size="lg"
              className="border-neutral-400 text-neutral-800 w-[220px] hover:scale-105 transition-transform"
            >
              <Construction className="w-5 h-5" />
              View Projects
            </Button>
          </Link>
        </div>
      </div>

     
    </div>
  );
}