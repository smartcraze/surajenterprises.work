import { Award, Clock, Shield } from "lucide-react";
import { PT_Sans } from "next/font/google";
import { WobbleCard } from "./ui/wobble-card";

const ptSans = PT_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

const WhyChooseUsCard = ({
  icon: Icon,
  title,
  description,
  bgColor,
}: {
  icon: any;
  title: string;
  description: string;
  bgColor: string;
}) => (
  <div
    className="bg-white/10 dark:bg-gray-800/50 backdrop-blur-md rounded-xl p-6 sm:p-8 border-2 border-dashed border-gray-200/20 dark:border-gray-700/50 
      hover:border-yellow-500/50 dark:hover:border-yellow-400/50 transition-all duration-300 flex flex-col h-full group"
  >
    <div
      className={`${bgColor} w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
      aria-hidden="true"
    >
      <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
    </div>
    <h3
      className="text-xl sm:text-2xl font-bold mb-3 text-white group-hover:text-yellow-400 transition-colors duration-300"
      style={{ fontFamily: ptSans.style.fontFamily }}
    >
      {title}
    </h3>
    <p
      className="text-white/90 dark:text-gray-300 text-base sm:text-lg leading-relaxed flex-grow"
      style={{ fontFamily: ptSans.style.fontFamily }}
    >
      {description}
    </p>
  </div>
);

export default function WhyChooseUs() {
  return (
    <div className="mx-4 sm:mx-10 lg:mx-20 my-8">
      <WobbleCard containerClassName="bg-blue-700 dark:bg-green-900  rounded-2xl shadow-lg">
        <h1
          className="text-center text-3xl sm:text-4xl font-bold mb-8 "
          style={{ fontFamily: ptSans.style.fontFamily }}
        >
          Why Choose Us
        </h1>

        <div className="flex flex-wrap lg:flex-nowrap justify-center gap-6 sm:gap-8">
          <div className="w-full sm:w-80 lg:w-1/3">
            <WhyChooseUsCard
              icon={Award}
              title="Highly Skilled"
              description="Our rigorous hiring process ensures we employ only the most skilled professionals in the industry, each bringing years of specialized experience."
              bgColor="bg-yellow-500"
            />
          </div>
          <div className="w-full sm:w-80 lg:w-1/3">
            <WhyChooseUsCard
              icon={Shield}
              title="Safety Focused"
              description="Safety is our priority. Our teams undergo regular safety training and follow strict protocols to ensure incident-free project execution."
              bgColor="bg-green-500"
            />
          </div>
          <div className="w-full sm:w-80 lg:w-1/3">
            <WhyChooseUsCard
              icon={Clock}
              title="Efficient Execution"
              description="Our experienced workforce delivers projects on time and within budget while maintaining the highest quality standards throughout."
              bgColor="bg-purple-500"
            />
          </div>
        </div>
      </WobbleCard>
    </div>
  );
}
