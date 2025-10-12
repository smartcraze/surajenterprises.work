import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ManpowerGallery } from "@/components/manpower-gallery";

export function ManpowerService() {
  return (
    <div id="manpower" className="space-y-8">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="order-2 md:order-1 rounded-lg bg-muted overflow-hidden">
          <AspectRatio ratio={4/3}>
            <Image 
              src="/man-power/mam-power (1).jpeg" 
              alt="Skilled construction worker" 
              fill 
              className="object-cover" 
            />
          </AspectRatio>
        </div>
        <div className="order-1 md:order-2 space-y-4">
          <div className="rounded-full bg-primary/10 p-3 w-fit">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6 text-primary">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold">Skilled Manpower</h2>
          <p>
            Our core strength lies in providing skilled and reliable manpower for construction sites across the globe. We have a large pool of experienced workers ready to deploy to any location.
          </p>
          <ManpowerFeatures />
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-xl font-medium">Our Skilled Team</h3>
        <p className="text-muted-foreground mb-6">
          Meet some of our experienced workforce ready to tackle projects of any size or complexity. Our team members bring years of expertise from various construction disciplines.
        </p>
        <ManpowerGallery />
      </div>
    </div>
  );
}

function ManpowerFeatures() {
  const features = [
    "Skilled laborers (masons, carpenters, etc.)",
    "Semi-skilled workers",
    "Unskilled labor for general tasks",
    "Technical specialists",
    "Supervisors and foremen"
  ];

  return (
    <ul className="space-y-2 text-muted-foreground">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4 text-primary">
            <polyline points="9 11 12 14 22 4" />
            <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
          </svg>
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  );
}