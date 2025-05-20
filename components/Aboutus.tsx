import { PT_Sans } from 'next/font/google';

const ptSans = PT_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export default function AboutUs() {
  return (
    <section className={`relative py-24 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 ${ptSans.className}`}>
      {/* Background Overlay for subtle texture */}
      <div className="absolute inset-0  opacity-5 pointer-events-none" />

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
          <div className="relative bg-gray-800 dark:bg-gray-900 text-white rounded-xl p-8 shadow-lg border-2 border-dashed border-gray-700 dark:border-gray-600">
            <div className="absolute -top-3 left-8 bg-yellow-500 text-gray-800 font-semibold px-4 py-1 rounded-full text-sm">
              Lead Contractor
            </div>
            <h2 className="text-3xl font-bold mb-4">Meet Our Lead Contractor</h2>
            <h3 className="text-2xl font-semibold mb-6 text-yellow-400">Surendra Vishwakarma</h3>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                With over <span className="font-semibold text-yellow-400">20 years of experience</span> in the construction field, Surendra Vishwakarma is the driving force behind Suraj Enterprises. His journey includes collaborations with industry leaders such as <span className="font-semibold text-yellow-400">Gina Engineering, Sapoorji Pallonji, and Shriram Company</span>, spanning across major cities including Bangalore, Vijayawada, and Pune.
              </p>
              <p className="text-lg leading-relaxed">
                His exceptional leadership and dedication have earned him recognition as the <span className="font-semibold text-yellow-400">Best Contractor</span> on multiple occasions. Throughout his career, he has successfully delivered numerous projects while providing tailored skilled manpower solutions that meet client specifications.
              </p>
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
