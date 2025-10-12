import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container, Section } from "@/components/ui/container";
import { manpowerImages } from "@/data/manpower";

export const ManpowerSection = () => {
  return (
    <section id="manpower">
      <Section variant="muted">
        <Container size="xl" padding="lg">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Our Skilled Manpower</h2>
              <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
                We provide skilled construction workers for projects across the globe. Our team members are experienced, certified, and ready to work.
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {manpowerImages.map((image, index) => (
                <div key={index} className="group overflow-hidden rounded-lg shadow-sm hover:shadow-lg transition-shadow">
                  <div className="aspect-[4/3] overflow-hidden rounded-lg">
                    <Image 
                      src={image.src} 
                      alt={image.alt} 
                      width={400} 
                      height={300}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>
              ))}
            </div>
          
            
            <div className="text-center">
              <Button asChild size="lg">
                <Link href="/manpower">Explore Our Manpower Services</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </section>
  );
};