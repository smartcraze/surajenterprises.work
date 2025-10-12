import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export function ConstructionService() {
  return (
    <div id="construction" className="grid gap-8 md:grid-cols-2">
      <div className="space-y-4">
        <div className="rounded-full bg-primary/10 p-3 w-fit">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6 text-primary">
            <rect width="18" height="10" x="3" y="11" rx="2" />
            <path d="M12 11V3H8"  />
            <path d="M12 3h4" />
            <path d="M4.5 17.5h15" />
          </svg>
        </div>
        <h2 className="text-2xl font-semibold">Construction Services</h2>
        <p>
          We offer end-to-end construction services for projects of all sizes, from residential buildings to large-scale commercial and industrial complexes.
        </p>
        <ServiceFeatures features={[
          "Residential construction",
          "Commercial building development",
          "Industrial facility construction",
          "Infrastructure projects",
          "Renovation and remodeling"
        ]} />
      </div>
      <div className="rounded-lg overflow-hidden">
        <AspectRatio ratio={4/3}>
          <Image 
            src="/projects/img1.jpg" 
            alt="Construction project by Suraj Enterprises" 
            fill 
            className="object-cover"
          />
        </AspectRatio>
      </div>
    </div>
  );
}

interface ServiceFeaturesProps {
  features: string[];
}

function ServiceFeatures({ features }: ServiceFeaturesProps) {
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