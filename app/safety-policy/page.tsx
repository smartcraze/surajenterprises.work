import React from 'react';
import { Shield, AlertCircle, Eye, CheckCircle, Heart } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Safety Policy',
    description: 'Safety Policy of SURAJ ENTERPRISES',
};
const SafetyPolicy = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-800 to-blue-900 dark:from-blue-900 dark:to-blue-950 py-6 sm:py-12 px-3 sm:px-6 lg:px-8 text-white">
            <div className="max-w-5xl mx-auto">
                {/* Header Section with Bold Statement */}
                <div className="text-center mb-8 sm:mb-16">
                    <div className="inline-block p-2 sm:p-3 rounded-full bg-red-600 dark:bg-red-700 mb-4 sm:mb-6">
                        <AlertCircle size={36} className="sm:hidden" />
                        <AlertCircle size={48} className="hidden sm:block" />
                    </div>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 font-sans tracking-tight">
                        SAFETY IS <span className="text-yellow-400 dark:text-yellow-300">NON-NEGOTIABLE</span>
                    </h1>
                    <p className="text-lg sm:text-xl lg:text-2xl font-medium max-w-3xl mx-auto px-2">
                        We protect lives first. Production second.
                    </p>
                </div>

                {/* Safety Record Section */}
                <div className="bg-gradient-to-r from-blue-900 to-blue-800 dark:from-blue-950 dark:to-blue-900 shadow-2xl rounded-lg p-4 sm:p-8 mb-8 sm:mb-12 border-l-8 border-green-500 dark:border-green-400">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/4 flex justify-center mb-4 md:mb-0">
                            <div className="bg-green-500 dark:bg-green-600 p-3 sm:p-5 rounded-full">
                                <Shield size={48} className="sm:hidden" />
                                <Shield size={64} className="hidden sm:block" />
                            </div>
                        </div>
                        <div className="md:w-3/4 text-center md:text-left">
                            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Our Safety Promise</h2>
                            <p className="text-lg sm:text-xl mb-3 sm:mb-4">
                                <span className="text-green-400 dark:text-green-300 font-bold">20+ YEARS</span> with zero serious injuries
                            </p>
                            <p className="text-base sm:text-lg">
                                Safety is not just a priority that can change — it's a core value embedded in everything we do.
                                We maintain the highest standards because your life matters more than any deadline.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Safety Equipment Section */}
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center px-2">
                    MANDATORY SAFETY EQUIPMENT <span className="text-red-500 dark:text-red-400 block sm:inline mt-1">NO EXCEPTIONS</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
                    {/* Card 1 */}
                    <div className="bg-blue-800 dark:bg-blue-900 rounded-lg overflow-hidden shadow-lg border-t-4 border-yellow-500 dark:border-yellow-400 hover:transform hover:scale-105 transition-transform duration-300">
                        <div className="p-4 sm:p-6">
                            <div className="bg-yellow-500 dark:bg-yellow-600 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                                <svg className="h-6 w-6 sm:h-8 sm:w-8 text-blue-900 dark:text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                </svg>
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-center mb-2">Head Protection</h3>
                            <p className="text-sm sm:text-base text-blue-200 dark:text-blue-300 text-center">ANSI-certified safety helmets required at all times</p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-blue-800 dark:bg-blue-900 rounded-lg overflow-hidden shadow-lg border-t-4 border-orange-500 dark:border-orange-400 hover:transform hover:scale-105 transition-transform duration-300">
                        <div className="p-4 sm:p-6">
                            <div className="bg-orange-500 dark:bg-orange-600 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                                <svg className="h-6 w-6 sm:h-8 sm:w-8 text-blue-900 dark:text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                </svg>
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-center mb-2">High-Visibility Gear</h3>
                            <p className="text-sm sm:text-base text-blue-200 dark:text-blue-300 text-center">Class 3 reflective jackets for maximum visibility</p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-blue-800 dark:bg-blue-900 rounded-lg overflow-hidden shadow-lg border-t-4 border-green-500 dark:border-green-400 hover:transform hover:scale-105 transition-transform duration-300">
                        <div className="p-4 sm:p-6">
                            <div className="bg-green-500 dark:bg-green-600 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                                <svg className="h-6 w-6 sm:h-8 sm:w-8 text-blue-900 dark:text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                                </svg>
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-center mb-2">Safety Gloves</h3>
                            <p className="text-sm sm:text-base text-blue-200 dark:text-blue-300 text-center">Cut-resistant & impact-resistant protection</p>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-blue-800 dark:bg-blue-900 rounded-lg overflow-hidden shadow-lg border-t-4 border-purple-500 dark:border-purple-400 hover:transform hover:scale-105 transition-transform duration-300">
                        <div className="p-4 sm:p-6">
                            <div className="bg-purple-500 dark:bg-purple-600 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                                <Eye size={24} className="sm:hidden text-blue-900 dark:text-blue-800" />
                                <Eye size={32} className="hidden sm:block text-blue-900 dark:text-blue-800" />
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-center mb-2">Eye Protection</h3>
                            <p className="text-sm sm:text-base text-blue-200 dark:text-blue-300 text-center">ANSI Z87.1 compliant safety glasses at all times</p>
                        </div>
                    </div>

                    {/* Card 5 */}
                    <div className="bg-blue-800 dark:bg-blue-900 rounded-lg overflow-hidden shadow-lg border-t-4 border-red-500 dark:border-red-400 hover:transform hover:scale-105 transition-transform duration-300">
                        <div className="p-4 sm:p-6">
                            <div className="bg-red-500 dark:bg-red-600 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                                <svg className="h-6 w-6 sm:h-8 sm:w-8 text-blue-900 dark:text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-center mb-2">Certified Equipment</h3>
                            <p className="text-sm sm:text-base text-blue-200 dark:text-blue-300 text-center">Daily inspections & regular maintenance required</p>
                        </div>
                    </div>

                    {/* Card 6 */}
                    <div className="bg-blue-800 dark:bg-blue-900 rounded-lg overflow-hidden shadow-lg border-t-4 border-pink-500 dark:border-pink-400 hover:transform hover:scale-105 transition-transform duration-300">
                        <div className="p-4 sm:p-6">
                            <div className="bg-pink-500 dark:bg-pink-600 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                                <Heart size={24} className="sm:hidden text-blue-900 dark:text-blue-800" />
                                <Heart size={32} className="hidden sm:block text-blue-900 dark:text-blue-800" />
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-center mb-2">Medical Response</h3>
                            <p className="text-sm sm:text-base text-blue-200 dark:text-blue-300 text-center">First aid kits & trained personnel on every site</p>
                        </div>
                    </div>
                </div>

                {/* Safety Commitment Banner */}
                <div className="bg-red-600 dark:bg-red-700 p-4 sm:p-8 rounded-lg shadow-2xl mb-8 sm:mb-12">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="md:w-2/3 mb-4 md:mb-0 text-center md:text-left">
                            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">YOUR SAFETY IS OUR RESPONSIBILITY</h2>
                            <p className="text-base sm:text-xl">
                                Every worker has the right and obligation to stop work they deem unsafe. No questions asked.
                            </p>
                        </div>
                        <div className="md:w-1/3 flex justify-center">
                            <CheckCircle size={60} className="sm:hidden" />
                            <CheckCircle size={80} className="hidden sm:block" />
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center bg-blue-800 dark:bg-blue-900 p-4 sm:p-8 rounded-lg shadow-lg border-2 border-yellow-400 dark:border-yellow-300">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">SAFETY STARTS WITH YOU</h2>
                    <p className="text-base sm:text-xl mb-6 sm:mb-8 px-2">
                        "We believe that every worker deserves to return home safely every day.
                        Our commitment to safety is absolute and non-negotiable."
                    </p>
                    <div className="bg-yellow-500 dark:bg-yellow-600 text-blue-900 dark:text-blue-800 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg inline-block text-lg sm:text-xl tracking-wide hover:bg-yellow-400 dark:hover:bg-yellow-500 transition-colors duration-300">
                        REPORT SAFETY CONCERNS
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SafetyPolicy;