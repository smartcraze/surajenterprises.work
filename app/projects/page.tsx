"use client";
import React, { useState, useEffect } from "react";
import { getAllProjects, getCompletedProjects } from "@/data/projects";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronUpIcon } from "lucide-react";

export default function Projects() {
  const [isLoading, setIsLoading] = useState(true);
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

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="min-h-screen bg-white dark:bg-neutral-950 px-6 py-16 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-center mb-8 text-neutral-900 dark:text-neutral-100">
          Current Ongoing Projects
        </h1>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-md hover:shadow-xl transition-all duration-300 bg-neutral-100 dark:bg-neutral-900 group"
          >
            <div className="overflow-hidden h-56 relative">
              <Image
                src={project.imageUrl[0]}
                alt={project.title}
                width={600}
                height={400}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <div className="p-6 space-y-4">
              <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-blue-500 transition-colors duration-300">
                {project.title}
              </h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-3">
                {project.description}
              </p>

              {project.imageUrl.length > 1 && (
                <div className="flex gap-3 pt-3 overflow-x-auto pb-2">
                  {project.imageUrl.slice(1).map((url, index) => (
                    <div key={index} className="relative flex-shrink-0">
                      <Image
                        src={url}
                        alt={`${project.title} ${index + 1}`}
                        width={120}
                        height={80}
                        className="h-20 w-32 object-cover rounded-lg border border-neutral-300 dark:border-neutral-700 hover:border-blue-500 transition-colors duration-300"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-20"
      >
        <h1 className="text-4xl font-bold text-center mb-12 text-neutral-900 dark:text-neutral-100">
          Completed Projects
        </h1>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {completedProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
              className="rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-md hover:shadow-xl transition-all duration-300 bg-neutral-100 dark:bg-neutral-900 group"
            >
              <div className="overflow-hidden h-56 relative">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm">
                  Completed
                </div>
              </div>

              <div className="p-6 space-y-4">
                <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-green-500 transition-colors duration-300">
                  {project.title}
                </h2>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Scroll to top button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </motion.button>
      )}
    </section>
  );
}
