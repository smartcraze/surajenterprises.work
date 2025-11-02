import React from "react";
import { Building2, Award, Users, TrendingUp, Target, Heart } from "lucide-react";

export default function AboutUsPage() {
  const milestones = [
    { year: "2005", title: "Company Founded", description: "Started our journey in construction industry" },
    { year: "2010", title: "100+ Projects", description: "Completed our 100th successful project" },
    { year: "2015", title: "Industry Recognition", description: "Awarded for excellence in construction" },
    { year: "2020", title: "500+ Workforce", description: "Expanded our team of skilled professionals" },
    { year: "2025", title: "2 Decades of Excellence", description: "Celebrating 20 years of trusted service" },
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Commitment to Quality",
      description: "Every project meets the highest standards of excellence and precision",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Skilled Workforce",
      description: "500+ trained professionals dedicated to delivering exceptional results",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Client Satisfaction",
      description: "Building lasting relationships through trust and reliability",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Industry Leadership",
      description: "Partnering with India's leading construction companies",
    },
  ];

  return (
    <main className="relative min-h-screen bg-neutral-50 dark:bg-neutral-950">
      {/* Blueprint Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full mb-6 shadow-lg">
            <Building2 className="w-10 h-10 text-white" />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 dark:text-white mb-6">
            About{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-amber-600 to-amber-700 bg-clip-text text-transparent">
                Suraj Enterprises
              </span>
              <svg
                className="absolute -bottom-2 left-0 w-full h-3 text-amber-600 dark:text-amber-500"
                viewBox="0 0 200 12"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,6 Q50,0 100,6 T200,6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                />
              </svg>
            </span>
          </h1>

          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Building Excellence for Over Two Decades
          </p>
        </div>

        {/* Main Story Section */}
        <div className="mb-20">
          <div className="bg-white dark:bg-neutral-900 rounded-2xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border-2 border-amber-600 dark:border-amber-700 animate-fade-in-up animation-delay-100">
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6">
              20 Years of Industry Excellence
            </h2>
            <div className="space-y-4 text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
              <p>
                Since 2005,{" "}
                <strong className="text-amber-600">Suraj Enterprises</strong>{" "}
                has been a trusted name in the construction industry, delivering
                exceptional bar bending, shuttering, and concrete work services
                across India. With two decades of experience, we have
                successfully completed hundreds of projects, earning the trust
                of leading construction companies.
              </p>
              <p>
                Our journey began with a simple mission: to provide reliable,
                high-quality construction services that exceed expectations.
                Today, we stand proud as industry leaders, backed by a workforce
                of over 500 skilled professionals who share our commitment to
                excellence.
              </p>
              <p>
                Throughout our 20-year legacy, we have had the privilege of
                working with India's most prestigious construction firms,
                including{" "}
                <strong>
                  Brigade, Shapoorji Pallonji, Purva, Umiya, Vaswani
                </strong>
                , and many more. Each project has strengthened our reputation
                for delivering on time, maintaining the highest safety
                standards, and ensuring complete client satisfaction.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center bg-gradient-to-br from-blue-50 via-white to-amber-50 dark:from-neutral-900/40 dark:via-neutral-900/30 dark:to-neutral-900/40  rounded-2xl p-12 shadow-[0_8px_30px_rgb(0,0,0,0.2)] animate-fade-in-up animation-delay-1200 border-2 border-blue-200 dark:border-neutral-700">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-700 via-neutral-800 to-amber-700 bg-clip-text text-transparent dark:from-blue-400 dark:via-neutral-200 dark:to-amber-400 mb-4">
            Ready to Build with Us?
          </h2>
          <p className="text-xl text-neutral-700 dark:text-neutral-300 mb-8 max-w-2xl mx-auto">
            Join the hundreds of satisfied clients who trust Suraj Enterprises
            for their construction needs
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/meet"
              className="px-8 py-4 bg-white text-amber-600 font-bold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all"
            >
              Schedule a Consultation
            </a>
            <a
              href="/contact"
              className="px-8 py-4 bg-neutral-900 text-white font-bold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}