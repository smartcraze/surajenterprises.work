import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export function ManpowerGallery() {
  // Array of images from the man-power folder
  const manpowerImages = Array.from({ length: 10 }, (_, i) => `/man-power/mam-power (${i + 1}).jpeg`);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {manpowerImages.map((image, index) => (
        <div key={index} className="overflow-hidden rounded-lg border bg-background">
          <AspectRatio ratio={4/3} className="bg-muted">
            <Image
              src={image}
              alt={`Skilled manpower team member ${index + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-all hover:scale-105"
            />
          </AspectRatio>
        </div>
      ))}
    </div>
  );
}