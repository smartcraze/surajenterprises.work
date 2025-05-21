"use client";
import { Project } from "@/app/data/projects";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

interface ProjectCardProps {
    project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
    const [isHovered, setIsHovered] = useState(false);

    // Dummy construction images based on category
    const getDummyImage = (category: string) => {
        switch (category) {
            case 'Residential':
                return 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop';
            case 'Commercial':
                return 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop';
            case 'Industrial':
                return 'https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?w=800&auto=format&fit=crop';
            default:
                return 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&auto=format&fit=crop';
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative overflow-hidden rounded-2xl bg-white shadow-xl dark:bg-gray-800"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative h-64 w-full overflow-hidden">
                <Image
                    src={getDummyImage(project.category)}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4 text-white">
                    <span className="rounded-full bg-yellow-500 px-3 py-1 text-sm font-medium">
                        {project.category}
                    </span>
                    <h3 className="mt-2 text-xl font-bold">{project.title}</h3>
                </div>
            </div>

            <motion.div
                initial={false}
                animate={{ height: isHovered ? "auto" : 0 }}
                className="overflow-hidden bg-white dark:bg-gray-800"
            >
                <div className="p-6">
                    <p className="mb-4 text-gray-600 dark:text-gray-300">{project.description}</p>

                    <div className="mb-4 grid grid-cols-2 gap-4 text-sm">
                        <div>
                            <span className="font-semibold text-gray-700 dark:text-gray-300">Location:</span>
                            <p className="text-gray-600 dark:text-gray-400">{project.location}</p>
                        </div>
                        <div>
                            <span className="font-semibold text-gray-700 dark:text-gray-300">Year:</span>
                            <p className="text-gray-600 dark:text-gray-400">{project.year}</p>
                        </div>
                        <div>
                            <span className="font-semibold text-gray-700 dark:text-gray-300">Size:</span>
                            <p className="text-gray-600 dark:text-gray-400">{project.size}</p>
                        </div>
                        <div>
                            <span className="font-semibold text-gray-700 dark:text-gray-300">Duration:</span>
                            <p className="text-gray-600 dark:text-gray-400">{project.duration}</p>
                        </div>
                    </div>

                    <div className="mb-4">
                        <h4 className="mb-2 font-semibold text-gray-700 dark:text-gray-300">Key Features:</h4>
                        <ul className="grid grid-cols-2 gap-2">
                            {project.features.map((feature, index) => (
                                <li key={index} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                                    <span className="mr-2 text-yellow-500">•</span>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mt-4">
                        <span className="font-semibold text-gray-700 dark:text-gray-300">Client:</span>
                        <p className="text-gray-600 dark:text-gray-400">{project.client}</p>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
} 