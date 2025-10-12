import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export function ServiceHeader() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Our Services</h1>
      <p className="text-xl text-muted-foreground">
        Comprehensive construction contracting services with global expertise and a skilled workforce.
      </p>
    </div>
  );
}