import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Construction, HardHat, Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";

function Footer() {
    return (
        <footer className="relative bg-neutral-50 border-t-2 border-neutral-200 py-12">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.02]">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `repeating-linear-gradient(90deg, #000 0px, #000 1px, transparent 1px, transparent 50px),
                                       repeating-linear-gradient(0deg, #000 0px, #000 1px, transparent 1px, transparent 50px)`,
                    }}
                />
            </div>

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Top Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
                    {/* About Section */}
                    <div>
                        <div className="flex items-center gap-2 mb-5">
                            <Construction className="w-7 h-7 text-amber-600" />
                            <h2 className="text-neutral-900 text-xl font-bold">Suraj Enterprises</h2>
                        </div>
                        <ul className="space-y-3 text-sm text-neutral-600 leading-relaxed">
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-1" />
                                <span>Proven project expertise</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-1" />
                                <span>Skilled, experienced team</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-1" />
                                <span>Safety, quality, delivery</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-1" />
                                <span>Worked with top firms</span>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h2 className="text-neutral-900 text-base font-bold mb-5">Quick Links</h2>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/" className="text-neutral-600 hover:text-amber-600 transition-colors duration-300 text-sm font-medium">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/projects" className="text-neutral-600 hover:text-amber-600 transition-colors duration-300 text-sm font-medium">
                                    Our Projects
                                </Link>
                            </li>
                           
                            <li>
                                <Link href="/manpower" className="text-neutral-600 hover:text-amber-600 transition-colors duration-300 text-sm font-medium">
                                    Manpower
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-neutral-600 hover:text-amber-600 transition-colors duration-300 text-sm font-medium">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Our Services */}
                    <div>
                        <h2 className="text-neutral-900 text-base font-bold mb-5">Our Services</h2>
                        <ul className="space-y-3 text-sm text-neutral-600">
                            <li className="hover:text-amber-600 transition-colors duration-300 cursor-pointer font-medium">
                                Shuttering Work
                            </li>
                            <li className="hover:text-amber-600 transition-colors duration-300 cursor-pointer font-medium">
                                Bar Bending
                            </li>
                            <li className="hover:text-amber-600 transition-colors duration-300 cursor-pointer font-medium">
                                Concrete Work
                            </li>
                            <li className="hover:text-amber-600 transition-colors duration-300 cursor-pointer font-medium">
                                Project Management
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h2 className="text-neutral-900 text-base font-bold mb-5">Contact Us</h2>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <Phone className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                                <a href="tel:+917488659074" className="text-sm text-neutral-600 hover:text-amber-600 transition-colors font-medium">
                                    +91 7488659074
                                </a>
                            </div>
                            <div className="flex items-start gap-3">
                                <Mail className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                                <a href="mailto:work.surajenterprises@gmail.com" className="text-sm text-neutral-600 hover:text-amber-600 transition-colors break-all font-medium leading-relaxed">
                                    work.surajenterprises@gmail.com
                                </a>
                            </div>
                            <div className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-neutral-600 leading-relaxed">
                                    Vidyaranyapura, Bangalore, Karnataka
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-neutral-300 mb-8"></div>

                {/* Bottom Section */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pb-4">
                    <p className="text-sm text-neutral-600 text-center sm:text-left">
                        © {new Date().getFullYear()} Suraj Enterprises. All rights reserved.
                    </p>
                    <div className="flex items-center gap-2">
                        <HardHat className="w-5 h-5 text-amber-600" />
                        <span className="text-sm text-neutral-700 font-semibold">
                            Building Excellence Since Years
                        </span>
                    </div>
                </div>
            </div>

            <BottomImage />
        </footer>
    );
}

export default Footer;

export function BottomImage() {
    return (
        <div className="relative w-full aspect-[5/1] overflow-hidden">
            <Image
                src="/perfect.png"
                alt="Suraj Enterprises Logo"
                fill
                className="object-cover object-[center_47%] invert dark:invert-0"
            />
        </div>
    );
}
