import { Award, Clock, Shield, TrendingUp, Users, Wrench } from "lucide-react";

export function WhyChooseUs() {
  const reasons = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Proven Excellence",
      description: "Trusted by India's top construction companies including Brigade, Shapoorji Pallonji, and Purva",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-950/30",
      borderColor: "border-blue-200 dark:border-blue-800",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "500+ Skilled Workforce",
      description: "Expert team of masons, steel fixers, concrete specialists, and equipment operators",
      color: "from-amber-500 to-amber-600",
      bgColor: "bg-amber-50 dark:bg-amber-950/30",
      borderColor: "border-amber-200 dark:border-amber-800",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "100% Compliance",
      description: "Licensed, safety certified, and fully compliant with labor laws and quality standards",
      color: "from-emerald-500 to-emerald-600",
      bgColor: "bg-emerald-50 dark:bg-emerald-950/30",
      borderColor: "border-emerald-200 dark:border-emerald-800",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "On-Time Delivery",
      description: "Meeting project deadlines without compromising on quality or safety standards",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-950/30",
      borderColor: "border-purple-200 dark:border-purple-800",
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Complete Solutions",
      description: "End-to-end services from shuttering and bar bending to concrete work and finishing",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50 dark:bg-orange-950/30",
      borderColor: "border-orange-200 dark:border-orange-800",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Quality Assured",
      description: "Every project meets the highest standards with rigorous quality control measures",
      color: "from-cyan-500 to-cyan-600",
      bgColor: "bg-cyan-50 dark:bg-cyan-950/30",
      borderColor: "border-cyan-200 dark:border-cyan-800",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-neutral-50 dark:bg-neutral-950">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Why Choose{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Suraj Enterprises</span>
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
            Your trusted partner for construction excellence with proven track record and unwavering commitment to quality
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`group relative p-6 ${reason.bgColor} rounded-xl border-2 ${reason.borderColor} shadow-[0_3px_10px_rgb(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.15)] hover:scale-[1.02] transition-all duration-300 animate-fade-in-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 bg-gradient-to-br ${reason.color} rounded-xl flex items-center justify-center mb-4 text-white shadow-lg group-hover:scale-110 transition-transform`}
              >
                {reason.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">
                {reason.title}
              </h3>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                {reason.description}
              </p>

              {/* Decorative Element */}
              <div
                className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${reason.color} opacity-5 rounded-bl-full`}
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg shadow-lg">
            <span className="text-lg font-semibold">
              Ready to build something great together?
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
