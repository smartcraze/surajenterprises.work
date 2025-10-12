import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export function ContractBiddingService() {
  return (
    <div id="contracts" className="grid gap-8 md:grid-cols-2">
      <div className="order-2 md:order-1 rounded-lg overflow-hidden">
        <AspectRatio ratio={4/3}>
          <Image 
            src="/projects/img5.jpg" 
            alt="Contract management by Suraj Enterprises" 
            fill 
            className="object-cover"
          />
        </AspectRatio>
      </div>
      <div className="order-1 md:order-2 space-y-4">
        <div className="rounded-full bg-primary/10 p-3 w-fit">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6 text-primary">
            <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h16a2 2 0 0 1 1.2.4" />
            <path d="M2 10h20" />
            <path d="M7 15h.01" />
            <path d="M11 15h2" />
            <path d="m16.5 13.5 1 1 1.5-1.5" />
          </svg>
        </div>
        <h2 className="text-2xl font-semibold">Contract Bidding & Management</h2>
        <p>
          Our team of experts can handle the entire contract process, from bidding to execution, ensuring you get the best value for your project.
        </p>
        <ContractFeatures />
      </div>
    </div>
  );
}

function ContractFeatures() {
  const features = [
    "Tender preparation and submission",
    "Cost estimation and budgeting",
    "Contract negotiation",
    "Documentation and compliance",
    "Contract administration"
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