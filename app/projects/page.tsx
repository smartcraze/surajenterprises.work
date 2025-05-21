"use client";
import { Cover } from "@/components/ui/cover";
import { Project } from "@/generated/prisma";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export default function ProjectSection() {
    return (
        <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-blue-50 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-200/30 via-transparent to-transparent dark:from-blue-800/30"></div>
            </div>
            <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
                <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
            </div>
            <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
                <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
            </div>
            <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
                <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
            </div>
            <div className="w-full">
                <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 dark:from-blue-800 dark:via-blue-900 dark:to-blue-950 rounded-3xl shadow-2xl p-8 md:p-10 text-white border-2 border-dashed border-white/20 dark:border-gray-700/50 relative overflow-hidden">
                    {/* Decorative elements */}
                    <div className="absolute -top-0.5 -left-0.5 w-4 h-4 bg-yellow-500 rounded-br-lg" />
                    <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-yellow-500 rounded-tl-lg" />

                    <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/90">
                        Building Dreams at <br /> <Cover>Warp Speed</Cover>
                    </h1>
                    <motion.p
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        transition={{
                            duration: 0.3,
                            delay: 0.8,
                        }}
                        className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-white/90"
                    >
                        Explore our portfolio of exceptional construction projects. From residential masterpieces
                        to commercial landmarks, we bring architectural visions to life with precision and expertise.
                    </motion.p>
                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        transition={{
                            duration: 0.3,
                            delay: 1,
                        }}
                        className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
                    >
                        <Link href="/get-quote" className="w-60 transform rounded-lg bg-yellow-500 px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-yellow-400 cursor-pointer text-center">
                            Get a Quote
                        </Link>
                    </motion.div>
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 10,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.3,
                            delay: 1.2,
                        }}
                        className="relative z-10 mt-20 rounded-3xl border border-white/20 bg-white/10 p-4 shadow-md backdrop-blur-sm"
                    >
                        <div className="w-full overflow-hidden rounded-xl border border-white/20">
                            <Image
                                src="/schema.png"
                                alt="Landing page preview"
                                className="aspect-[16/9] h-auto w-full object-cover"
                                height={1000}
                                width={1000}
                            />
                        </div>
                    </motion.div>
                    <ProjectCard src="/hero.webp" alt="umiya hebal" />
                </div>
            </div>
        </div>
    );
}

function ProjectCard({ src, alt = "Project Image" }: { src: string, alt?: string }) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 10,
            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                duration: 0.3,
                delay: 1.2,
            }}
            className="relative z-10 mt-20 rounded-3xl border border-white/20 bg-white/10 p-4 shadow-md backdrop-blur-sm"
        >
            <div className="relative w-full overflow-hidden rounded-xl border border-white/20">
                <Image
                    src={src}
                    alt={alt}
                    className="aspect-[16/9] h-auto w-full object-cover"
                    height={1000}
                    width={1000}
                />
                <div className="absolute top-4 right-4">
                    <div className="rounded-full bg-yellow-500 px-3 py-1 md:px-6 md:py-2 shadow-lg">
                        <h1 className="text-sm md:text-xl font-semibold text-white">
                            {alt}
                        </h1>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}