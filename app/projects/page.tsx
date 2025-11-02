"use client";
import React, { useState, useEffect } from "react";
import { getAllProjects, getCompletedProjects } from "@/data/projects";
import Image from "next/image";
import { Construction, HardHat, Building2, ChevronUp, CheckCircle2 } from "lucide-react";

export default function ProjectsPage() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  const projects = getAllProjects();
  const completedProjects = getCompletedProjects();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
            <Building2 className="w-12 h-12 text-amber-600" />
            <Construction className="w-10 h-10 text-neutral-700" />
            <HardHat className="w-12 h-12 text-amber-600" />
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-4">
            Our Projects
          </h1>
          <p className="text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto">
            Showcasing our{" "}
            <span className="underline-squiggle text-amber-700 font-semibold">
              construction excellence
            </span>{" "}
            through successfully delivered projects across Bangalore.
          </p>
        </div>

        {/* Ongoing Projects Section */}
        <div className="mb-20">
          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="h-px w-20 bg-amber-600"></div>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900">
              Ongoing Projects
            </h2>
            <div className="h-px w-20 bg-amber-600"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div
                key={project.id}
                className="bg-neutral-50 border-2 border-neutral-200 rounded-xl overflow-hidden hover:scale-[1.02] transition-transform shadow-[0_3px_10px_rgb(0,0,0,0.1)] animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {/* Main Image */}
                <div className="relative h-72 overflow-hidden group">
                  <Image
                    src={project.imageUrl[0]}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 right-4 bg-amber-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    In Progress
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-neutral-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Gallery Thumbnails */}
                  {project.imageUrl.length > 1 && (
                    <div className="flex gap-3 overflow-x-auto pb-2">
                      {project.imageUrl.slice(1).map((url, index) => (
                        <div
                          key={index}
                          className="relative flex-shrink-0 w-28 h-20 rounded-lg overflow-hidden border-2 border-neutral-300 hover:border-amber-600 transition-colors"
                        >
                          <Image
                            src={url}
                            alt={`${project.title} view ${index + 2}`}
                            fill
                            className="object-cover"
                            sizes="112px"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Completed Projects Section */}
        <div className="mb-12">
          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="h-px w-20 bg-green-600"></div>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900">
              Completed Projects
            </h2>
            <div className="h-px w-20 bg-green-600"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {completedProjects.map((project, idx) => (
              <div
                key={project.id}
                className="bg-neutral-50 border-2 border-green-600 rounded-xl overflow-hidden hover:scale-[1.02] transition-transform shadow-[0_3px_10px_rgb(0,0,0,0.1)] animate-fade-in-up"
                style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden group">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    Completed
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-amber-50 border-2 border-amber-600 rounded-xl p-8 sm:p-12 text-center animate-fade-in-up animation-delay-300">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-8">
            Project Stats
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-6 border border-amber-600/30">
              <div className="text-4xl font-bold text-amber-600 mb-2">
                {projects.length}
              </div>
              <div className="text-neutral-900 font-semibold mb-1">
                Ongoing Projects
              </div>
              <div className="text-sm text-neutral-600">
                Currently in progress
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-amber-600/30">
              <div className="text-4xl font-bold text-green-600 mb-2">
                {completedProjects.length}
              </div>
              <div className="text-neutral-900 font-semibold mb-1">
                Completed Projects
              </div>
              <div className="text-sm text-neutral-600">
                Successfully delivered
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-amber-600/30">
              <div className="text-4xl font-bold text-amber-600 mb-2">
                100%
              </div>
              <div className="text-neutral-900 font-semibold mb-1">
                Client Satisfaction
              </div>
              <div className="text-sm text-neutral-600">
                Quality guaranteed
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-amber-600 text-white p-3 rounded-full shadow-lg hover:bg-amber-700 hover:scale-110 transition-all z-50 animate-fade-in"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}
