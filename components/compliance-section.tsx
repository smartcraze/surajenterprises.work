import React from "react";
import { Users, Wrench, Zap, Hammer, HardHat, Settings, CheckCircle2, FileCheck } from "lucide-react";

export function ComplianceSection() {
  const workforce = [
    { icon: <HardHat className="w-5 h-5" />, name: "Foremen" },
    { icon: <Wrench className="w-5 h-5" />, name: "Fitters" },
    { icon: <Users className="w-5 h-5" />, name: "Helpers" },
    { icon: <Hammer className="w-5 h-5" />, name: "Bar Benders" },
    { icon: <Zap className="w-5 h-5" />, name: "Welders" },
    { icon: <Settings className="w-5 h-5" />, name: "Electricians" },
    { icon: <Wrench className="w-5 h-5" />, name: "Carpenters" },
    { icon: <Settings className="w-5 h-5" />, name: "Machine Workers" },
  ];

  const compliance = [
    "Company Registration Certificate",
    "GST Registration",
    "Labour Card",
    "Contractor License",
    "Safety Certifications",
    "Quality Assurance Documents",
  ];

  return (
    <div className="relative w-full px-4 py-16 bg-neutral-50 dark:bg-neutral-950">
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

      <div className="relative z-10 w-full max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Our{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-amber-600 to-blue-600 bg-clip-text text-transparent">
                Workforce & Compliance
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
                  className="squiggle-path"
                />
              </svg>
            </span>
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            Professional team with complete government compliance and certifications
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      
          <div className="bg-white border-2 border-amber-600 rounded-2xl p-8 shadow-[0_3px_10px_rgb(0,0,0,0.1)] hover:shadow-[0_8px_20px_rgb(0,0,0,0.15)] transition-all animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-amber-500 rounded-full mb-6">
              <span className="text-sm font-bold text-white">Skilled Workforce</span>
            </div>

            {/* Title */}
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Our Skilled Workforce
            </h2>

            {/* Description */}
            <p className="text-neutral-600 mb-8 leading-relaxed">
              We maintain a diverse team of highly skilled professionals:
            </p>

            {/* Workforce Grid */}
            <div className="grid grid-cols-2 gap-4">
              {workforce.map((worker, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-neutral-700 font-medium"
                >
                  <div className="w-10 h-10 bg-amber-500/10 rounded-full flex items-center justify-center text-amber-600">
                    {worker.icon}
                  </div>
                  <span className="text-sm">{worker.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Government Compliance Card */}
          <div className="bg-white border-2 border-blue-600 rounded-2xl p-8 shadow-[0_3px_10px_rgb(0,0,0,0.1)] hover:shadow-[0_8px_20px_rgb(0,0,0,0.15)] transition-all animate-fade-in-up animation-delay-100">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-blue-500 rounded-full mb-6">
              <span className="text-sm font-bold text-white">Government Compliance</span>
            </div>

            {/* Title */}
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Government Registrations & Documents
            </h2>

            {/* Description */}
            <p className="text-neutral-600 mb-8 leading-relaxed">
              We maintain complete compliance with all government regulations and requirements:
            </p>

            {/* Compliance List */}
            <div className="space-y-4">
              {compliance.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 text-neutral-700"
                >
                  <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-medium leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            {/* Verification Badge */}
            <div className="mt-8 flex items-center gap-2 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <FileCheck className="w-5 h-5 text-blue-600" />
              <span className="text-sm text-blue-900 font-semibold">
                All documents verified and up-to-date
              </span>
            </div>
          </div>
        </div>

        {/* Safety Compliance Section */}
        <div className="mt-16">
          {/* Safety Priority Banner */}
          <div className="relative overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 rounded-3xl p-12 shadow-[0_8px_30px_rgb(0,0,0,0.3)] border-2 border-neutral-700 animate-fade-in-up animation-delay-200">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-600/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-600/5 rounded-full translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10 text-center">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-20 h-20 bg-amber-600 rounded-full mb-6 shadow-lg">
                <HardHat className="w-10 h-10 text-white" />
              </div>

              {/* Main Quote */}
              <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
                Safety is Our First Priority
              </h3>
              
              <p className="text-xl md:text-2xl text-neutral-300 font-medium mb-8 max-w-3xl mx-auto">
                "Building Excellence, One Safe Step at a Time"
              </p>

              {/* Safety Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="bg-neutral-800/50 backdrop-blur-sm rounded-xl p-6 border border-neutral-700">
                  <div className="text-4xl font-bold text-amber-600 mb-2">100%</div>
                  <div className="text-neutral-300 font-semibold">Safety Compliance</div>
                </div>
                <div className="bg-neutral-800/50 backdrop-blur-sm rounded-xl p-6 border border-neutral-700">
                  <div className="text-4xl font-bold text-amber-600 mb-2">Zero</div>
                  <div className="text-neutral-300 font-semibold">Tolerance Policy</div>
                </div>
                <div className="bg-neutral-800/50 backdrop-blur-sm rounded-xl p-6 border border-neutral-700">
                  <div className="text-4xl font-bold text-amber-600 mb-2">24/7</div>
                  <div className="text-neutral-300 font-semibold">Safety Monitoring</div>
                </div>
              </div>
            </div>
          </div>

          {/* Safety Rules Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {/* Safety Rules Card */}
            <div className="bg-white dark:bg-neutral-900 border-2 border-neutral-800 rounded-2xl p-8 shadow-[0_3px_10px_rgb(0,0,0,0.1)] hover:shadow-[0_8px_20px_rgb(0,0,0,0.15)] transition-all animate-fade-in-up animation-delay-300">
              <div className="inline-flex items-center px-4 py-2 bg-neutral-800 rounded-full mb-6">
                <span className="text-sm font-bold text-white">Safety Rules</span>
              </div>

              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
                We Follow Strict Safety Protocols
              </h3>

              <div className="space-y-4">
                {[
                  "Mandatory PPE (Personal Protective Equipment) for all workers",
                  "Regular safety training and awareness programs",
                  "Daily site safety inspections and audits",
                  "Emergency response procedures and first aid facilities",
                  "Proper scaffolding and fall protection systems",
                  "Equipment safety checks and maintenance",
                ].map((rule, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-neutral-800 dark:bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-neutral-700 dark:text-neutral-300 font-medium text-sm leading-relaxed">
                      {rule}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Safety Quotes Card */}
            <div className="bg-white dark:bg-neutral-900 border-2 border-neutral-800 rounded-2xl p-8 shadow-[0_3px_10px_rgb(0,0,0,0.1)] hover:shadow-[0_8px_20px_rgb(0,0,0,0.15)] transition-all animate-fade-in-up animation-delay-400">
              <div className="inline-flex items-center px-4 py-2 bg-amber-600 rounded-full mb-6">
                <span className="text-sm font-bold text-white">Our Commitment</span>
              </div>

              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-8">
                Safety Philosophy
              </h3>

              <div className="space-y-6">
                <div className="bg-neutral-50 dark:bg-neutral-800 rounded-xl p-6 shadow-sm border border-neutral-200 dark:border-neutral-700">
                  <div className="text-6xl text-neutral-400 dark:text-neutral-600 font-serif mb-2">"</div>
                  <p className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 italic mb-2">
                    Safety doesn't happen by accident
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    Every project begins with comprehensive safety planning
                  </p>
                </div>

                <div className="bg-neutral-50 dark:bg-neutral-800 rounded-xl p-6 shadow-sm border border-neutral-200 dark:border-neutral-700">
                  <div className="text-6xl text-neutral-400 dark:text-neutral-600 font-serif mb-2">"</div>
                  <p className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 italic mb-2">
                    No job is so important that we cannot take time to do it safely
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    Quality and safety go hand in hand
                  </p>
                </div>

                <div className="bg-neutral-900 dark:bg-neutral-800 rounded-xl p-6 shadow-lg border-2 border-amber-600">
                  <p className="text-xl font-bold text-white text-center">
                    Your Safety = Our Success
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
