import React from "react";
import Link from "next/link";
import Image from "next/image";

function Footer() {
    return (
        <footer className="relative bg-gradient-to-b from-blue-50 via-blue-50 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12">
            {/* Light gradient overlay for light mode, dark overlay for dark mode */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-white/70 dark:from-black/30 dark:via-black/50 dark:to-black/80 pointer-events-none" />

            <div className="relative max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
                <div>
                    <h2 className="text-gray-900 dark:text-white text-lg font-semibold mb-4">Years in Business</h2>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                        <li>✅ Proven project expertise</li>
                        <li>👷 Skilled, experienced team</li>
                        <li>🛠️ Safety, quality, delivery</li>
                        <li>🌐 Worked with top firms</li>
                        <li>📍 Active in major cities</li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-gray-900 dark:text-white text-lg font-semibold mb-4">Quick Links</h2>
                    <ul className="space-y-2">
                        <li>
                            <Link href="/safety-policy">
                                <span className="hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors duration-300 cursor-pointer text-gray-700 dark:text-gray-400">
                                    Safety Policy
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/projects">
                                <span className="hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors duration-300 cursor-pointer text-gray-700 dark:text-gray-400">
                                    Our Projects
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/services">
                                <span className="hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors duration-300 cursor-pointer text-gray-700 dark:text-gray-400">
                                    Services
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link href="#contact">
                                <span className="hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors duration-300 cursor-pointer text-gray-700 dark:text-gray-400">
                                    Contact
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-gray-900 dark:text-white text-lg font-semibold mb-4">Our Services</h2>
                    <ul className="space-y-2">
                        <li>
                            <span className="hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors duration-300 cursor-pointer text-gray-700 dark:text-gray-400">
                                Construction Management
                            </span>
                        </li>
                        <li>
                            <span className="hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors duration-300 cursor-pointer text-gray-700 dark:text-gray-400">
                                Project Planning
                            </span>
                        </li>
                        <li>
                            <span className="hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors duration-300 cursor-pointer text-gray-700 dark:text-gray-400">
                                Quality Assurance
                            </span>
                        </li>
                        <li>
                            <span className="hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors duration-300 cursor-pointer text-gray-700 dark:text-gray-400">
                                Skilled Manpower
                            </span>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-gray-900 dark:text-white text-lg font-semibold mb-4">Contact Us</h2>
                    <p className="mb-2">
                        <span className="hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors duration-300 text-gray-700 dark:text-gray-400">
                            Phone: +91 9880494435
                        </span>
                    </p>
                    <p className="mb-2">
                        <span className="hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors duration-300 text-gray-700 dark:text-gray-400">
                            Email work.surajenterprises@gmail.com
                        </span>
                    </p>
                    <p className="mb-2">
                        <span className="hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors duration-300 text-gray-700 dark:text-gray-400">
                            Address: vidyaranyapura, Bangalore, Karnataka
                        </span>
                    </p>
                </div>
            </div>

            <BottomImage />
        </footer>
    );
}

export default Footer;

function BottomImage() {
    return (
        <div className="relative w-full aspect-[5/1] overflow-hidden">
            <Image
                src="/perfect.png"
                alt="Suraj Enterprises Logo"
                fill
                className="object-cover object-[center_47%] invert dark:invert-0"
            />
        </div>
    )
}
