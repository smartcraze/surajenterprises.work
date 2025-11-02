import React from "react";
import { Construction, HardHat, Layers, CheckCircle2 } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      icon: <Layers className="w-10 h-10 text-amber-600" />,
      title: "Shuttering Work",
      description:
        "Professional formwork solutions for all types of construction projects. We provide high-quality shuttering services with precision and expertise.",
      features: [
        "Column & Beam Shuttering",
        "Slab Shuttering",
        "Wall Shuttering",
        "Custom Formwork Solutions",
      ],
      bgColor: "bg-amber-500/10",
      borderColor: "border-amber-600",
    },
    {
      icon: <Construction className="w-10 h-10 text-blue-600" />,
      title: "Bar Bending",
      description:
        "Expert reinforcement steel bar bending services ensuring structural strength and compliance with engineering specifications.",
      features: [
        "Reinforcement Bar Bending",
        "Steel Cutting & Shaping",
        "As per Design Specifications",
        "Quality Material Usage",
      ],
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-600",
    },
    {
      icon: <HardHat className="w-10 h-10 text-slate-600" />,
      title: "Concrete Work",
      description:
        "Complete concrete solutions from mixing to pouring and finishing. We ensure durability and strength in every concrete structure.",
      features: [
        "Concrete Pouring",
        "Mixing & Preparation",
        "Foundation Work",
        "Finishing & Curing",
      ],
      bgColor: "bg-slate-500/10",
      borderColor: "border-slate-600",
    },
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

      <div className="relative z-10 w-full max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex justify-center items-center gap-4 mb-6">
            <Construction className="w-12 h-12 text-amber-600" />
            <HardHat className="w-10 h-10 text-neutral-700" />
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-4">
            Our Services
          </h1>
          <p className="text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto">
            Delivering construction excellence with{" "}
            <span className="underline-squiggle text-amber-700 font-semibold">
              100% dedication
            </span>
            . As trusted contractors, we provide comprehensive construction
            services for your project needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-neutral-50 border-2 ${service.borderColor} rounded-xl p-8 hover:scale-[1.02] transition-transform shadow-[0_3px_10px_rgb(0,0,0,0.1)] animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 ${service.bgColor} rounded-full flex items-center justify-center mb-6`}
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-neutral-600 mb-6 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-neutral-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-amber-50 border-2 border-amber-600 rounded-xl p-8 sm:p-12 text-center animate-fade-in-up animation-delay-300">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center">
              <HardHat className="w-8 h-8 text-white" />
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
            Why Choose Suraj Enterprises?
          </h2>

          <p className="text-lg text-neutral-700 max-w-3xl mx-auto mb-8">
            We are committed contractors who believe in delivering excellence
            through dedication, quality workmanship, and timely completion of
            every project.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-6 border border-amber-600/30">
              <div className="text-4xl font-bold text-amber-600 mb-2">
                100%
              </div>
              <div className="text-neutral-900 font-semibold mb-1">
                Dedication
              </div>
              <div className="text-sm text-neutral-600">
                Committed to excellence
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-amber-600/30">
              <div className="text-4xl font-bold text-amber-600 mb-2">
                Expert
              </div>
              <div className="text-neutral-900 font-semibold mb-1">
                Team
              </div>
              <div className="text-sm text-neutral-600">
                Skilled professionals
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-amber-600/30">
              <div className="text-4xl font-bold text-amber-600 mb-2">
                Quality
              </div>
              <div className="text-neutral-900 font-semibold mb-1">
                Assured
              </div>
              <div className="text-sm text-neutral-600">
                Premium standards
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center animate-fade-in-up animation-delay-400">
          <p className="text-neutral-600 mb-4">
            Ready to start your construction project?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-neutral-800 hover:scale-105 transition-transform"
          >
            <Construction className="w-5 h-5" />
            Get a Quote Today
          </a>
        </div>
      </div>
    </div>
  );
}