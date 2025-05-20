import React from "react";
import Link from "next/link";

function Footer() {
    return (
        <footer className="bg-black text-gray-400 py-12">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
                <div>
                    <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
                    <p className="mb-4">
                        Suraj Enterprises is a leading construction company with over 20 years of experience. We specialize in delivering high-quality construction solutions with precision and excellence.
                    </p>
                </div>
                <div>
                    <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
                    <ul className="space-y-2">
                        <li>
                            <Link href="/">
                                <span className="hover:text-white transition-colors duration-300 cursor-pointer">
                                    Home
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/projects">
                                <span className="hover:text-white transition-colors duration-300 cursor-pointer">
                                    Our Projects
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/services">
                                <span className="hover:text-white transition-colors duration-300 cursor-pointer">
                                    Services
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact">
                                <span className="hover:text-white transition-colors duration-300 cursor-pointer">
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
                            <span className="hover:text-white transition-colors duration-300 cursor-pointer">
                                Construction Management
                            </span>
                        </li>
                        <li>
                            <span className="hover:text-white transition-colors duration-300 cursor-pointer">
                                Project Planning
                            </span>
                        </li>
                        <li>
                            <span className="hover:text-white transition-colors duration-300 cursor-pointer">
                                Quality Assurance
                            </span>
                        </li>
                        <li>
                            <span className="hover:text-white transition-colors duration-300 cursor-pointer">
                                Skilled Manpower
                            </span>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
                    <p className="mb-2">
                        <span className="hover:text-white transition-colors duration-300">
                            Phone: +91 XXXXXXXXXX
                        </span>
                    </p>
                    <p className="mb-2">
                        <span className="hover:text-white transition-colors duration-300">
                            Email: info@surajenterprises.com
                        </span>
                    </p>
                    <p className="mb-2">
                        <span className="hover:text-white transition-colors duration-300">
                            Address: Bangalore, Karnataka
                        </span>
                    </p>
                </div>
            </div>

            <div className="w-full flex mt-4 items-center justify-center px-4">
                <h1 className="text-center text-4xl md:text-6xl lg:text-[8rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-yellow-500/50 to-amber-700/50 select-none whitespace-nowrap leading-none">
                    SURAJ ENTERPRISES
                </h1>
            </div>





        </footer>
    );
}

export default Footer;