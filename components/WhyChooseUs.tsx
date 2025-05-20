import { Award, Clock, Shield } from "lucide-react";
import { PT_Sans } from 'next/font/google';

const ptSans = PT_Sans({
    weight: ['400', '700'],
    subsets: ['latin'],
    display: 'swap',
});

const WhyChooseUsCard = ({ icon: Icon, title, description, bgColor }: {
    icon: any;
    title: string;
    description: string;
    bgColor: string;
}) => (
    <div className="bg-white/10 dark:bg-gray-800/50 backdrop-blur-md rounded-xl p-8 border-2 border-dashed border-gray-200/20 dark:border-gray-700/50 hover:border-yellow-500/50 dark:hover:border-yellow-400/50 transition-all duration-300 h-full group">
        <div className={`${bgColor} w-14 h-14 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
            <Icon className="w-7 h-7 text-white" />
        </div>
        <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-yellow-400 transition-colors duration-300">{title}</h3>
        <p className="text-white/90 dark:text-gray-300 text-lg leading-relaxed">{description}</p>
    </div>
);

function WhyChooseUs() {
    return (
        <section className={`py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 via-blue-50 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 ${ptSans.className}`}>
            <div className="max-w-7xl mx-auto">
                <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 dark:from-blue-800 dark:via-blue-900 dark:to-blue-950 rounded-3xl shadow-2xl p-8 md:p-10 text-white border-2 border-dashed border-white/20 dark:border-gray-700/50 relative overflow-hidden">
                    {/* Decorative elements */}
                    <div className="absolute -top-0.5 -left-0.5 w-4 h-4 bg-yellow-500 rounded-br-lg" />
                    <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-yellow-500 rounded-tl-lg" />

                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-6">Why Choose Our Workforce</h2>
                        <div className="w-24 h-1 bg-yellow-500 mx-auto rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <WhyChooseUsCard
                            icon={Award}
                            title="Highly Skilled"
                            description="Our rigorous hiring process ensures we employ only the most skilled professionals in the industry, each bringing years of specialized experience."
                            bgColor="bg-yellow-500"
                        />
                        <WhyChooseUsCard
                            icon={Shield}
                            title="Safety Focused"
                            description="Safety is our priority. Our teams undergo regular safety training and follow strict protocols to ensure incident-free project execution."
                            bgColor="bg-green-500"
                        />
                        <WhyChooseUsCard
                            icon={Clock}
                            title="Efficient Execution"
                            description="Our experienced workforce delivers projects on time and within budget while maintaining the highest quality standards throughout."
                            bgColor="bg-purple-500"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs;