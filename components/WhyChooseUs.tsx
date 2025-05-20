"use client"
import { Award, Shield, Clock } from 'lucide-react';

function WhyChooseUs() {
    return (
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-700 dark:to-blue-900 rounded-2xl shadow-xl p-8 text-white">
                <h2 className="text-3xl font-bold mb-6 text-center">Why Choose Our Workforce</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                        <div className="bg-yellow-500 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                            <Award className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Highly Skilled</h3>
                        <p className="text-white/90">
                            Our rigorous hiring process ensures we employ only the most skilled professionals in the industry, each bringing years of specialized experience.
                        </p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                        <div className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                            <Shield className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Safety Focused</h3>
                        <p className="text-white/90">
                            Safety is our priority. Our teams undergo regular safety training and follow strict protocols to ensure incident-free project execution.
                        </p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                        <div className="bg-purple-500 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                            <Clock className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Efficient Execution</h3>
                        <p className="text-white/90">
                            Our experienced workforce delivers projects on time and within budget while maintaining the highest quality standards throughout.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhyChooseUs;