import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export function ProjectManagementService() {
  return (
    <div id="project-management" className="grid gap-8 md:grid-cols-2">
      <div className="space-y-4">
        <div className="rounded-full bg-primary/10 p-3 w-fit">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6 text-primary">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
            <path d="m9 12 2 2 4-4" />
          </svg>
        </div>
        <h2 className="text-2xl font-semibold">Project Management</h2>
        <p>
          We offer comprehensive project management services to ensure your construction project runs smoothly from planning to completion.
        </p>
        <ProjectManagementFeatures />
      </div>
      <div className="rounded-lg overflow-hidden">
        <AspectRatio ratio={4/3}>
          <Image 
            src="/projects/img3.jpg" 
            alt="Project management by Suraj Enterprises" 
            fill 
            className="object-cover"
          />
        </AspectRatio>
      </div>
    </div>
  );
}

function ProjectManagementFeatures() {
  const features = [
    "Project planning and scheduling",
    "Resource allocation and management",
    "Quality control and assurance",
    "Risk management",
    "Progress monitoring and reporting"
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