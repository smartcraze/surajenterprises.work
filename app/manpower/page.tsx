import React from "react";
import Image from "next/image";
import { Construction, HardHat, Users, MessageCircle } from "lucide-react";

export default function ManpowerPage() {
  const manpowerImages = [
    { src: "/man-power/man-power (2).jpeg", alt: "Skilled Construction Workers" },
    { src: "/man-power/man-power (3).jpeg", alt: "Team Coordination on Site" },
    { src: "/man-power/man-power (4).jpeg", alt: "Professional Bar Bending Work" },
    { src: "/man-power/man-power (5).jpeg", alt: "Shuttering Installation Team" },
    { src: "/man-power/man-power (6).jpeg", alt: "Concrete Work in Progress" },
    { src: "/man-power/man-power (7).jpeg", alt: "Expert Construction Crew" },
    { src: "/man-power/man-power (8).jpeg", alt: "On-Site Project Execution" },
    { src: "/man-power/man-power (9).jpeg", alt: "Dedicated Workforce" },
  ];

  return (
    <div className="relative flex flex-1 w-full flex-col overflow-y-auto bg-white px-4 py-12">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(90deg, #000 0px, #000 1px, transparent 1px, transparent 50px),
                           repeating-linear-gradient(0deg, #000 0px, #000 1px, transparent 1px, transparent 50px)`,
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex justify-center items-center gap-4 mb-6">
            <Users className="w-12 h-12 text-amber-600" />
            <HardHat className="w-10 h-10 text-neutral-700" />
            <Construction className="w-12 h-12 text-amber-600" />
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-4">
            Our Manpower
          </h1>
          <p className="text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto">
            Meet our{" "}
            <span className="underline-squiggle text-amber-700 font-semibold">
              skilled workforce
            </span>{" "}
            - the backbone of every successful project. Our dedicated team of
            professionals brings expertise, dedication, and excellence to every
            construction site.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto animate-fade-in-up animation-delay-100">
          <div className="bg-amber-50 border-2 border-amber-600 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-amber-600 mb-2">50+</div>
            <div className="text-neutral-900 font-semibold">
              Skilled Workers
            </div>
          </div>

          <div className="bg-neutral-50 border-2 border-neutral-300 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-neutral-900 mb-2">100%</div>
            <div className="text-neutral-900 font-semibold">
              Safety Compliant
            </div>
          </div>

          <div className="bg-amber-50 border-2 border-amber-600 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-amber-600 mb-2">24/7</div>
            <div className="text-neutral-900 font-semibold">
              Project Support
            </div>
          </div>
        </div>

        {/* Images Gallery */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center animate-fade-in-up animation-delay-200">
            Our Team in Action
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {manpowerImages.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-[4/3] overflow-hidden rounded-xl border-2 border-neutral-200 shadow-[0_3px_10px_rgb(0,0,0,0.1)] hover:shadow-[0_8px_20px_rgb(0,0,0,0.15)] transition-all animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-semibold text-sm">
                      {image.alt}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Our Team Section */}
        <div className="bg-neutral-50 border-2 border-neutral-200 rounded-xl p-8 sm:p-12 mb-16 animate-fade-in-up animation-delay-300">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-8 text-center">
            Why Our Manpower Stands Out
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center">
                  <HardHat className="w-6 h-6 text-amber-600" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">
                  Experienced Professionals
                </h3>
                <p className="text-sm text-neutral-600">
                  Our team consists of skilled workers with years of experience
                  in construction projects.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center">
                  <Construction className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">
                  Specialized Skills
                </h3>
                <p className="text-sm text-neutral-600">
                  Expertise in shuttering, bar bending, concrete work, and all
                  construction activities.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">
                  Team Coordination
                </h3>
                <p className="text-sm text-neutral-600">
                  Well-coordinated teams ensuring smooth project execution and
                  timely delivery.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-slate-500/10 rounded-full flex items-center justify-center">
                  <HardHat className="w-6 h-6 text-slate-600" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">
                  Safety First
                </h3>
                <p className="text-sm text-neutral-600">
                  Committed to maintaining the highest safety standards on every
                  project site.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action - WhatsApp */}
        <div className="bg-gradient-to-br from-amber-50 to-amber-100 border-2 border-amber-600 rounded-xl p-8 sm:p-12 text-center animate-fade-in-up animation-delay-400">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center animate-pulse">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
            Ready to Build Something Amazing?
          </h2>

          <p className="text-lg text-neutral-700 max-w-2xl mx-auto mb-8">
            Don&apos;t wait! Get started at the earliest with our expert team.
            <br />
            <span className="font-semibold text-amber-700">
              Talk to us on WhatsApp now and bring your construction vision to life!
            </span>
          </p>

          <a
            href="https://wa.me/917488659074?text=Hi%2C%20I'm%20interested%20in%20your%20construction%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 hover:scale-105 transition-transform text-lg shadow-lg"
          >
            <MessageCircle className="w-6 h-6" />
            Chat on WhatsApp - Let&apos;s Start Today!
          </a>

          <p className="mt-6 text-sm text-neutral-600">
            Available Monday - Saturday, 9 AM - 6 PM
          </p>
        </div>
      </div>
    </div>
  );
}