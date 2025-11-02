import React from "react";
import { Mail, Phone, MapPin, Construction, HardHat, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="relative flex flex-1 w-full flex-col items-center justify-center overflow-hidden bg-white px-4 py-12">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(90deg, #000 0px, #000 1px, transparent 1px, transparent 50px),
                           repeating-linear-gradient(0deg, #000 0px, #000 1px, transparent 1px, transparent 50px)`,
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="flex justify-center items-center gap-4 mb-6">
            <Construction className="w-12 h-12 text-amber-600" />
            <HardHat className="w-10 h-10 text-neutral-700" />
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-4">
            Get In Touch
          </h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Ready to start your construction project? Contact{" "}
            <span className="underline-squiggle text-amber-700 font-semibold">
              Suraj Enterprises
            </span>{" "}
            today for a free consultation.
          </p>
        </div>

        {/* Contact Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto animate-fade-in-up animation-delay-100">
          {/* Email Card */}
          <div className="bg-neutral-50 border-2 border-neutral-200 rounded-xl p-6 hover:scale-[1.02] transition-transform shadow-[0_3px_10px_rgb(0,0,0,0.1)]">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center">
                <Mail className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 mb-2 text-lg">
                  Email Address
                </h3>
                <p className="text-neutral-600 mb-3 text-sm">
                  Send us your project details
                </p>
                <a
                  href="mailto:work.surajenterprises@gmail.com"
                  className="text-blue-600 hover:text-blue-700 font-medium hover:underline break-all text-sm"
                >
                  work.surajenterprises@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Phone Card */}
          <div className="bg-neutral-50 border-2 border-neutral-200 rounded-xl p-6 hover:scale-[1.02] transition-transform shadow-[0_3px_10px_rgb(0,0,0,0.1)]">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center">
                <Phone className="w-8 h-8 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 mb-2 text-lg">
                  Phone Number
                </h3>
                <p className="text-neutral-600 mb-3 text-sm">
                  Call us for immediate assistance
                </p>
                <a
                  href="tel:+917488659074"
                  className="text-green-600 hover:text-green-700 font-medium text-xl hover:underline"
                >
                  +91 7488659074
                </a>
              </div>
            </div>
          </div>

          {/* Location Card */}
          <div className="bg-neutral-50 border-2 border-neutral-200 rounded-xl p-6 hover:scale-[1.02] transition-transform shadow-[0_3px_10px_rgb(0,0,0,0.1)]">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 bg-amber-500/10 rounded-full flex items-center justify-center">
                <MapPin className="w-8 h-8 text-amber-600" />
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 mb-2 text-lg">
                  Location
                </h3>
                <p className="text-neutral-600 mb-3 text-sm">
                  Serving projects across the region
                </p>
                <p className="text-neutral-800 font-medium text-lg">
                  Bangalore, India
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Business Hours Section */}
        <div className="mt-12 bg-neutral-50 border-2 border-neutral-200 rounded-xl p-6 text-center animate-fade-in-up animation-delay-300">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 bg-slate-500/10 rounded-full flex items-center justify-center">
              <Clock className="w-6 h-6 text-slate-600" />
            </div>
          </div>
          <h3 className="font-semibold text-neutral-900 mb-2 text-lg">
            Business Hours
          </h3>
          <p className="text-neutral-600">
            Monday - Saturday: 9:00 AM - 6:00 PM
          </p>
          <p className="text-neutral-600">Sunday: Closed</p>
        </div>
      </div>
    </div>
  );
}