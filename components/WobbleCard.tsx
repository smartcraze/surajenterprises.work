"use client"
import { WobbleCard } from "@/components/ui/wobble-card"
import { Building2, Users, Award, MapPin, Phone, Mail } from "lucide-react"

export default function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-orange-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <div className="flex items-center gap-2 mb-4">
            <Building2 className="w-8 h-8 text-white" />
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Suraj Enterprises
            </h2>
          </div>
          <p className="mt-4 text-left text-base/6 text-neutral-200">
            Premier construction company in Bangalore with over 20 years of experience. We deliver quality construction
            projects with our skilled workforce.
          </p>
          <div className="flex items-center gap-2 mt-4">
            <MapPin className="w-4 h-4 text-orange-300" />
            <span className="text-orange-300 text-sm">Bangalore, Karnataka</span>
          </div>
        </div>
        <div className="absolute -right-4 lg:-right-[40%] -bottom-10">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <Building2 className="w-16 h-16 text-white mb-4" />
            <div className="text-white text-sm">
              <div className="font-semibold">20+ Years</div>
              <div className="text-white/80">Experience</div>
            </div>
          </div>
        </div>
      </WobbleCard>

      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-blue-800">
        <div className="flex items-center gap-2 mb-4">
          <Users className="w-6 h-6 text-white" />
          <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Skilled Workforce
          </h2>
        </div>
        <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
          Our team of experienced contractors and skilled workers are ready for your next project. Quality workmanship
          guaranteed.
        </p>
        <div className="absolute bottom-4 right-4">
          <Award className="w-12 h-12 text-blue-300/50" />
        </div>
      </WobbleCard>

      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-green-800 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Ready to Start Your Construction Project? Hire Suraj Enterprises Today!
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
            From residential buildings to commercial complexes, we've successfully completed hundreds of projects across
            Bangalore. Our experienced team ensures timely delivery and superior quality construction.
          </p>
          <div className="flex flex-col gap-2 mt-6">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-green-300" />
              <span className="text-green-300 text-sm">Contact us for free consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-green-300" />
              <span className="text-green-300 text-sm">Get instant project quotes</span>
            </div>
          </div>
        </div>
        <div className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <Building2 className="w-8 h-8 text-white mx-auto mb-2" />
                <div className="text-white font-semibold">500+</div>
                <div className="text-white/80 text-xs">Projects</div>
              </div>
              <div>
                <Users className="w-8 h-8 text-white mx-auto mb-2" />
                <div className="text-white font-semibold">50+</div>
                <div className="text-white/80 text-xs">Workers</div>
              </div>
              <div>
                <Award className="w-8 h-8 text-white mx-auto mb-2" />
                <div className="text-white font-semibold">20+</div>
                <div className="text-white/80 text-xs">Years</div>
              </div>
              <div>
                <MapPin className="w-8 h-8 text-white mx-auto mb-2" />
                <div className="text-white font-semibold">100%</div>
                <div className="text-white/80 text-xs">Bangalore</div>
              </div>
            </div>
          </div>
        </div>
      </WobbleCard>
    </div>
  )
}
