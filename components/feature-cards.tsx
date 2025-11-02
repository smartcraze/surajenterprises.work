import { BadgeCheck, Clock, ShieldCheck } from "lucide-react";

export function FeatureCards() {
  const features = [
    {
      icon: (
        <BadgeCheck className="w-6 h-6 text-amber-600 dark:text-amber-400" />
      ),
      bgColor: "bg-amber-500/10",
      title: "Professional Engineers",
      description: "Certified design engineers with proven expertise",
    },
    {
      icon: (
        <Clock className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
      ),
      bgColor: "bg-emerald-500/10",
      title: "On-Time Delivery",
      description: "Meeting deadlines without compromising quality",
    },
    {
      icon: (
        <ShieldCheck className="w-6 h-6 text-slate-600 dark:text-slate-300" />
      ),
      bgColor: "bg-slate-500/10",
      title: "Quality Assured",
      description: "Every project meets the highest standards",
    },
  ];

  return (
    <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
      {features.map((feature, i) => (
        <div
          key={i}
          className="flex flex-col items-center p-6 bg-neutral-50 dark:bg-neutral-900/40 rounded-xl border border-neutral-200 dark:border-neutral-700 shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:scale-[1.03] transition-transform"
        >
          <div
            className={`w-12 h-12 ${feature.bgColor} rounded-full flex items-center justify-center mb-4`}
          >
            {feature.icon}
          </div>

          <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">
            {feature.title}
          </h3>

          <p className="text-sm text-neutral-600 dark:text-neutral-400 text-center">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  );
}
