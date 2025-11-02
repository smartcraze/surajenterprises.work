import { Building2 } from "lucide-react";

export function FeatureCards() {
  return (
    <div className="mt-12 max-w-5xl mx-auto">
      <div className="flex flex-col items-center p-8 bg-gradient-to-br from-blue-50 via-white to-amber-50 dark:from-neutral-900/40 dark:via-neutral-900/30 dark:to-neutral-900/40 rounded-xl border-2 border-blue-200/50 dark:border-neutral-700 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-amber-600 rounded-full flex items-center justify-center mb-6 shadow-lg">
          <Building2 className="w-8 h-8 text-white" />
        </div>

        <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-700 via-neutral-800 to-amber-700 bg-clip-text text-transparent dark:from-blue-400 dark:via-neutral-200 dark:to-amber-400 mb-6 text-center">
          We Have Worked With India&apos;s Leading Construction Companies
        </h3>

        <div className="flex flex-wrap items-center justify-center gap-4 text-lg font-semibold">
          <span className="px-5 py-2.5 bg-white dark:bg-neutral-800 text-blue-700 dark:text-blue-400 rounded-lg border-2 border-blue-200 dark:border-blue-700/50 shadow-sm hover:shadow-lg hover:scale-105 transition-all">
            Brigade
          </span>
          <span className="px-5 py-2.5 bg-white dark:bg-neutral-800 text-blue-700 dark:text-blue-400 rounded-lg border-2 border-blue-200 dark:border-blue-700/50 shadow-sm hover:shadow-lg hover:scale-105 transition-all">
            Shapoorji Pallonji
          </span>
          <span className="px-5 py-2.5 bg-white dark:bg-neutral-800 text-blue-700 dark:text-blue-400 rounded-lg border-2 border-blue-200 dark:border-blue-700/50 shadow-sm hover:shadow-lg hover:scale-105 transition-all">
            Purva
          </span>
          <span className="px-5 py-2.5 bg-white dark:bg-neutral-800 text-blue-700 dark:text-blue-400 rounded-lg border-2 border-blue-200 dark:border-blue-700/50 shadow-sm hover:shadow-lg hover:scale-105 transition-all">
            Umiya
          </span>
          <span className="px-5 py-2.5 bg-white dark:bg-neutral-800 text-blue-700 dark:text-blue-400 rounded-lg border-2 border-blue-200 dark:border-blue-700/50 shadow-sm hover:shadow-lg hover:scale-105 transition-all">
            Vaswani
          </span>
          <span className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-amber-600 text-white rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all border-2 border-blue-300">
            And Many More...
          </span>
        </div>
      </div>
    </div>
  );
}
