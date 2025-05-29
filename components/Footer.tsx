import React from "react";
import Link from "next/link";
import Image from "next/image";

function Footer() {
    return (
        <footer className="relative bg-gradient-to-b from-slate-800 via-slate-900 to-black text-gray-400 py-12">
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80" />

            <div className="relative max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
                <div>
                    <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
                    <p className="mb-4 text-gray-400/90">
                        Suraj Enterprises is a leading construction company with over 20 years of experience. We specialize in delivering high-quality construction solutions with precision and excellence.
                    </p>
                </div>
                <div>
                    <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
                    <ul className="space-y-2">
                        <li>
                            <Link href="/safety-policy">
                                <span className="hover:text-yellow-400 transition-colors duration-300 cursor-pointer">
                                    Safety Policy
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/projects">
                                <span className="hover:text-yellow-400 transition-colors duration-300 cursor-pointer">
                                    Our Projects
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/services">
                                <span className="hover:text-yellow-400 transition-colors duration-300 cursor-pointer">
                                    Services
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link href="#contact">
                                <span className="hover:text-yellow-400 transition-colors duration-300 cursor-pointer">
                                    Contact
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-white text-lg font-semibold mb-4">Our Services</h2>
                    <ul className="space-y-2">
                        <li>
                            <span className="hover:text-yellow-400 transition-colors duration-300 cursor-pointer">
                                Construction Management
                            </span>
                        </li>
                        <li>
                            <span className="hover:text-yellow-400 transition-colors duration-300 cursor-pointer">
                                Project Planning
                            </span>
                        </li>
                        <li>
                            <span className="hover:text-yellow-400 transition-colors duration-300 cursor-pointer">
                                Quality Assurance
                            </span>
                        </li>
                        <li>
                            <span className="hover:text-yellow-400 transition-colors duration-300 cursor-pointer">
                                Skilled Manpower
                            </span>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
                    <p className="mb-2">
                        <span className="hover:text-yellow-400 transition-colors duration-300">
                            Phone: +91 XXXXXXXXXX
                        </span>
                    </p>
                    <p className="mb-2">
                        <span className="hover:text-yellow-400 transition-colors duration-300">
                            Email: info@surajenterprises.com
                        </span>
                    </p>
                    <p className="mb-2">
                        <span className="hover:text-yellow-400 transition-colors duration-300">
                            Address: Bangalore, Karnataka
                        </span>
                    </p>
                </div>
            </div>

            <div className="relative w-full aspect-[5/1] overflow-hidden">
                <Image
                    src="/perfect.png"
                    alt="Suraj Enterprises Logo"
                    fill
                    className="object-cover object-[center_47%]"
                />
            </div>

        </footer>
    );
}

export default Footer;