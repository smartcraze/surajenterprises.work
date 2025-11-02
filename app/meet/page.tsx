"use client";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { Phone, Mail } from "lucide-react";
import Link from "next/link";

export default function Meetingpage() {
  return (
    <main className="relative min-h-screen bg-neutral-50 dark:bg-neutral-950 py-12">
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Simple Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-3">
            Book Your Consultation
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400">
            Pick a time that works for you
          </p>
        </div>

        {/* Calendar Section - Simplified */}
        <div className="bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-lg overflow-hidden mb-8">
          <div className="p-4 min-h-[600px]">
            <Calldotmeet />
          </div>
        </div>

        {/* Simple Contact Info */}
        <div className="text-center">
          <p className="text-neutral-600 dark:text-neutral-400 mb-4">
            Or contact us directly
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href="tel:+917488659074" 
              className="inline-flex items-center gap-2 text-neutral-900 dark:text-white hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span className="font-semibold">+91 7488659074</span>
            </Link>
            <Link
              href="mailto:work.surajenterprises@gmail.com"
              className="inline-flex items-center gap-2 text-neutral-900 dark:text-white hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span className="font-semibold">work.surajenterprises@gmail.com</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

function Calldotmeet() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <Cal
      namespace="30min"
      calLink="surajv354/30min"
      style={{ width: "100%", height: "100%" }}
      config={{ layout: "month_view" }}
    />
  );
}
