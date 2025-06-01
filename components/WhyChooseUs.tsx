import { Award, Clock, Shield } from "lucide-react";
import { PT_Sans } from 'next/font/google';
import { WobbleCard } from './ui/wobble-card';
import Image from "next/image";

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

export default function WhyChooseUs() {
    return (
        <div className="mx-20 m-2">
            <WobbleCard
                containerClassName="bg-blue-700"
                className=""

            >
                <h1 className="text-center text-4xl mb-4">Why Choose us</h1>
                <div className="flex justify-center item-center gap-4">
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
                
            </WobbleCard>
        </div>
    )
}









