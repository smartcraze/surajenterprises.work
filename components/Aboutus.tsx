import { PT_Sans } from 'next/font/google';
import Image from 'next/image';
import { FaHardHat, FaWrench, FaTools, FaIndustry, FaBolt, FaPlug, FaHammer, FaCogs } from 'react-icons/fa';

const ptSans = PT_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export default function AboutUs() {
  return (
    <section className={`relative py-24 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-blue-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 ${ptSans.className}`}>
      {/* Background Overlay for subtle texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-transparent dark:from-blue-900/20 opacity-30 pointer-events-none" />

      {/* Container */}
      <div className="max-w-5xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-800 dark:text-white tracking-tight">
            About Suraj Enterprises
          </h1>
          <div className="w-24 h-1 bg-yellow-500 mx-auto rounded-full" />
        </div>

        <div className="space-y-20">
          {/* Introduction */}
          <div className="relative bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 border-2 border-dashed border-gray-200 dark:border-gray-600">
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-200 leading-relaxed text-center">
              Suraj Enterprises is a trusted name in the construction industry, committed to delivering top-quality projects across multiple locations. With decades of expertise, we bring professionalism, reliability, and excellence to every contract.
            </p>
            {/* Decorative corner element */}
            <div className="absolute -top-0.5 -left-0.5 w-4 h-4 bg-yellow-500 rounded-br-lg" />
            <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-yellow-500 rounded-tl-lg" />
          </div>

          {/* Lead Contractor Section */}
          <div className="mt-12 bg-gray-800 dark:bg-gray-900 text-white rounded-xl p-8 shadow-lg border-2 border-dashed border-gray-700 dark:border-gray-600">
            <div className="absolute -top-3 left-8 bg-yellow-500 text-gray-800 font-semibold px-4 py-1 rounded-full text-sm">
              
            </div>
            <div className="space-y-6 mt-6">
              <h3 className="text-3xl font-semibold text-yellow-400 text-center">Our Vision & What We Stand For</h3>
              <p className="text-lg leading-relaxed">
                At <span className="font-semibold text-yellow-400">Suraj Enterprises</span>, construction isn’t just a job — it’s our purpose. We are deeply serious about the work we do, the people we hire, and the impact we create. With decades of field experience, we aim to set a new standard in the contracting and construction space.
              </p>
              <p className="text-lg leading-relaxed">
                Our vision is to become one of India’s most trusted and respected names in civil works and skilled manpower solutions. We believe that true success lies in <span className="font-semibold text-yellow-400">commitment, discipline, and skilled execution</span> — and that’s exactly what we deliver on every project. No shortcuts. No compromises.
              </p>
              <p className="text-lg leading-relaxed">
                Every worker we deploy, every contractor we assign, carries the same vision: <span className="italic text-yellow-400">to build with honesty, precision, and pride</span>.
              </p>

              

              <p className="mt-6 text-center italic text-yellow-400 text-lg">
                “We don’t just want to be a contractor. We want to be <strong>your</strong> contractor — the one you trust every time.”
              </p>
            </div>
          </div>


          {/* Skilled Workers Section */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Skilled Workforce Card */}
            <div className="relative bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 border-2 border-dashed border-gray-200 dark:border-gray-600 hover:shadow-xl transition-shadow duration-300">
              <div className="absolute -top-3 left-8 bg-yellow-500 text-gray-800 font-semibold px-4 py-1 rounded-full text-sm">
                Skilled Workforce
              </div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Our Skilled Workforce</h2>
              <div className="space-y-4">
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  We maintain a diverse team of highly skilled professionals:
                </p>
                <ul className="grid grid-cols-2 gap-4">
                  {[
                    { role: 'Foremen', icon: <FaHardHat className="text-xl" /> },
                    { role: 'Fitters', icon: <FaWrench className="text-xl" /> },
                    { role: 'Helpers', icon: <FaTools className="text-xl" /> },
                    { role: 'Barbenders', icon: <FaIndustry className="text-xl" /> },
                    { role: 'Welders', icon: <FaBolt className="text-xl" /> },
                    { role: 'Electricians', icon: <FaPlug className="text-xl" /> },
                    { role: 'Carpenters', icon: <FaHammer className="text-xl" /> },
                    { role: 'Machine workers', icon: <FaCogs className="text-xl" /> },
                  ].map((worker, index) => (
                    <li key={index} className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 group">
                      <span className="text-xl">{worker.icon}</span>
                      <span className="group-hover:text-gray-800 dark:group-hover:text-white transition-colors duration-300">
                        {worker.role}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-yellow-500 rounded-bl-lg" />
            </div>

            {/* Government Registration Card */}
            <div className="relative bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 border-2 border-dashed border-gray-200 dark:border-gray-600 hover:shadow-xl transition-shadow duration-300">
              <div className="absolute -top-3 left-8 bg-yellow-500 text-gray-800 font-semibold px-4 py-1 rounded-full text-sm">
                Government Compliance
              </div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Government Registrations & Documents</h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  We maintain complete compliance with all government regulations and requirements:
                </p>
                <ul className="space-y-4">
                  {[
                    'Company Registration Certificate',
                    'GST Registration',
                    'Labour Card',
                    'Contractor License',
                    'Safety Certifications',
                    'Quality Assurance Documents'
                  ].map((doc, index) => (
                    <li key={index} className="flex items-center text-gray-600 dark:text-gray-300 group">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300" />
                      <span className="group-hover:text-gray-800 dark:group-hover:text-white transition-colors duration-300">
                        {doc}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-yellow-500 rounded-bl-lg" />
            </div>
          </div>

          {/* Locations and Commitment */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Our Presence */}
            <div className="relative bg-white dark:bg-gray-800 shadow-md rounded-xl p-8 border-2 border-dashed border-gray-200 dark:border-gray-600 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Our Presence</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">We proudly served clients across multiple locations:</p>
              <ul className="space-y-4">
                {['Bangalore', 'Vijayawada', 'Pune'].map((city, index) => (
                  <li key={index} className="flex items-center text-lg text-gray-600 dark:text-gray-300 group">
                    <span className="w-3 h-3 bg-yellow-500 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300" />
                    <span className="group-hover:text-gray-800 dark:group-hover:text-white transition-colors duration-300">{city}</span>
                  </li>
                ))}
              </ul>
              <div className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-yellow-500 rounded-bl-lg" />
            </div>

            {/* Our Commitment */}
            <div className="relative bg-white dark:bg-gray-800 shadow-md rounded-xl p-8 border-2 border-dashed border-gray-200 dark:border-gray-600 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Our Commitment</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                At Suraj Enterprises, we are dedicated to excellence in every aspect of our work. Our commitment to quality, timely delivery, and customer satisfaction drives us to exceed expectations, whether we're providing skilled manpower or executing complete projects.
              </p>
              <div className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-yellow-500 rounded-bl-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
