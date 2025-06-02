"use client"

import Image from "next/image";
import React from "react";
import WobbleCardDemo from "@/components/WobbleCard";

export default function Page() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* ✅ Visible Dot Grid Background */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black
        bg-[radial-gradient(#d1d5db_1px,transparent_1px)] 
        dark:bg-[radial-gradient(#52525b_1px,transparent_1px)] 
        [background-size:20px_20px]" />

<main className="relative z-10 flex flex-col items-center justify-start min-h-screen pt-24 px-4 md:px-12 text-center">
  {/* 💫 Display Hero Image */}
  <div className="w-[180px] h-[180px] rounded-full overflow-hidden border-4 border-white dark:border-zinc-800 shadow-xl mb-6 animate-fade-in">
    <Image
      src="/projects/img1.jpg" // Change to your display picture
      alt="Hero"
      width={180}
      height={180}
      className="object-cover w-full h-full"
    />
  </div>

  {/* 🌟 Stylish Heading */}
  <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-zinc-800 dark:text-white tracking-tight leading-tight mb-4 animate-fade-in">
    Welcome to <span className="text-blue-600 dark:text-blue-400">Vaswani Star Light</span>
  </h1>
  <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-300 max-w-2xl animate-fade-in delay-100">
    This is an ongoing showcase of our latest work. Scroll to explore the gallery!
  </p>

  <div className="mt-12 w-full">
    <WobbleCardDemo />
    <ProjectGallery />
  </div>
</main>

    </div>
  );
}

const projectImages = [
  "img1.jpg",
  "img2.jpg",
  "img3.jpg",
  "img4.jpg",
  "img5.jpg",
  "img6.jpg",
];

function ProjectGallery() {
  return (
    <section className="w-full max-w-7xl py-12">
      <h2 className="text-4xl font-extrabold text-center mb-10 text-gray-800 dark:text-white">
        Vaswani Star Light(On going)
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 md:px-0">
        {projectImages.map((img, index) => (
          <div
            key={index}
            className="bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 
                       rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition hover:scale-105 duration-300"
          >
            <Image
              src={`/projects/${img}`}
              alt={`Project ${index + 1}`}
              width={500}
              height={300}
              className="w-full h-[240px] object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
