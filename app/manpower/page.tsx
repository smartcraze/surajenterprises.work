import Image from "next/image";
import Link from "next/link";
import { Container, Section } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ManpowerGallery } from "@/components/manpower-gallery";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Our Manpower | Suraj Enterprises",
  description: "Explore our skilled workforce for construction projects. Suraj Enterprises provides experienced and reliable manpower for all your construction needs.",
};

const skills = [
  {
    title: "Masons & Bricklayers",
    description: "Expert masons skilled in precision bricklaying, concrete work, and decorative masonry for all types of construction projects.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6 text-primary">
        <path d="M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35a2 2 0 0 1 .56-1.35l8-8a2 2 0 0 1 2.88 0l8 8a2 2 0 0 1 .56 1.35Z" />
        <path d="m2 10 10-8 10 8" />
      </svg>
    ),
  },
  {
    title: "Carpenters",
    description: "Skilled carpenters for framing, formwork, finishing, and custom woodworking across residential and commercial projects.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6 text-primary">
        <path d="M3 21h18" />
        <path d="m9 8 2 2" />
        <path d="m9 12 2 2" />
        <path d="m9 16 2 2" />
        <path d="M4 8h3" />
        <path d="M4 12h3" />
        <path d="M4 16h3" />
        <path d="m13 8-2 2" />
        <path d="m13 12-2 2" />
        <path d="m13 16-2 2" />
        <path d="M17 8h3" />
        <path d="M17 12h3" />
        <path d="M17 16h3" />
      </svg>
    ),
  },
  {
    title: "Electricians",
    description: "Certified electricians experienced in wiring, installations, and electrical systems for various construction environments.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6 text-primary">
        <path d="m18 16-6-6" />
        <path d="m8 22 4-11 11-4" />
        <path d="M3 3h2v4H3z" />
        <path d="M7 3h2v8H7z" />
        <path d="M11 3h2v4h-2z" />
        <path d="m15 3 2 8" />
      </svg>
    ),
  },
  {
    title: "Plumbers",
    description: "Expert plumbers for installation and maintenance of water supply systems, drainage, and sanitary fixtures.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6 text-primary">
        <path d="m3 10 2.5-2.5" />
        <path d="m10 3 2.5 2.5" />
        <path d="m21 10-2.5-2.5" />
        <path d="m14 3-2.5 2.5" />
        <path d="M7.5 7.5C8.33 8.33 9.67 10 9.67 10s-1.67 1.67-2.5 2.5c-.83-.83-2.17-2.5-2.17-2.5s1.34-1.67 2.5-2.5z" />
        <path d="M16.5 7.5c.83.83 2.17 2.5 2.17 2.5s-1.67 1.67-2.5 2.5c-.83-.83-2.17-2.5-2.17-2.5s1.34-1.67 2.5-2.5z" />
        <path d="M16.5 16.5c-.83-.83-2.17-2.5-2.17-2.5s1.67-1.67 2.5-2.5c.83.83 2.17 2.5 2.17 2.5s-1.34 1.67-2.5 2.5z" />
        <path d="M7.5 16.5c-.83-.83-2.17-2.5-2.17-2.5s1.67-1.67 2.5-2.5c.83.83 2.17 2.5 2.17 2.5s-1.34 1.67-2.5 2.5z" />
        <path d="m4.67 15 .5.5" />
        <path d="m10 20.5 2.5-2.5" />
        <path d="m19.33 15-.5.5" />
        <path d="m14 20.5-2.5-2.5" />
      </svg>
    ),
  },
  {
    title: "Welders",
    description: "Certified welders skilled in various welding techniques for structural steel work and metal fabrication.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6 text-primary">
        <path d="m19 6-3-3" />
        <path d="m9 6 3-3" />
        <path d="M12 12a5 5 0 0 0-5 5" />
        <path d="M17 17a5 5 0 0 0-5-5" />
        <path d="M19 14a4.86 4.86 0 0 0-3-1" />
        <path d="M8 17a7 7 0 0 1 7-7" />
        <path d="m9 20 3 3" />
        <path d="m15 20-3 3" />
        <path d="M6 10a4.86 4.86 0 0 0-3 1" />
      </svg>
    ),
  },
  {
    title: "Heavy Equipment Operators",
    description: "Skilled operators for excavators, bulldozers, cranes, and other heavy machinery essential for construction sites.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6 text-primary">
        <rect width="10" height="18" x="2" y="3" rx="1" />
        <path d="M12 12h3" />
        <path d="M18 5v.5" />
        <path d="M18 10v.5" />
        <path d="M18 15v.5" />
        <path d="M20 5v.5" />
        <path d="M20 10v.5" />
        <path d="M20 15v.5" />
        <path d="M22 5v.5" />
        <path d="M22 10v.5" />
        <path d="M22 15v.5" />
      </svg>
    ),
  },
];

export default function ManpowerPage() {
  return (
    <>
      {/* Hero Section */}
      <Section variant="accent">
        <Container size="xl" padding="lg">
          <div className="text-center space-y-6">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Our Skilled Manpower
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Expert workforce ready to tackle construction projects of any size or complexity
            </p>
          </div>
        </Container>
      </Section>

      {/* Main Content */}
      <Container size="xl" padding="lg">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold">Dedicated Workforce</h2>
            <div className="space-y-4 text-lg leading-relaxed">
              <p className="text-muted-foreground">
                At Suraj Enterprises, our greatest strength is our workforce. We employ and deploy skilled construction workers from various disciplines, ensuring that your project is staffed with the right expertise at every stage.
              </p>
              <p className="text-muted-foreground">
                Our manpower services include providing skilled, semi-skilled, and unskilled labor for construction projects across the globe. We take pride in our rigorous selection process, comprehensive training programs, and strict adherence to safety protocols.
              </p>
            </div>
            <div className="space-y-3">
              {[
                "Certified and experienced professionals",
                "Rigorous safety training",
                "Global deployment capabilities",
                "Adaptable to various project requirements"
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5 text-primary shrink-0">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <AspectRatio ratio={4/3}>
              <Image 
                src="/man-power/mam-power (2).jpeg" 
                alt="Skilled construction workers" 
                fill 
                className="object-cover" 
              />
            </AspectRatio>
          </div>
        </div>
      </Container>

      {/* Specializations */}
      <Section variant="muted">
        <Container size="xl" padding="lg">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-semibold">Our Specializations</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our diverse team of skilled professionals covers all aspects of construction work
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="rounded-full bg-primary/10 p-3 w-fit mb-4">
                      {skill.icon}
                    </div>
                    <h3 className="text-xl font-medium mb-3">{skill.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{skill.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Gallery */}
      <Container size="xl" padding="lg">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-semibold">Our Team in Action</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See our skilled workforce executing projects with precision and dedication across various construction sites.
            </p>
          </div>
          <ManpowerGallery />
        </div>
      </Container>

      {/* CTA Section */}
      <Section variant="accent">
        <Container size="xl" padding="lg">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-semibold">Need Skilled Construction Workers?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Whether you need a small specialized team or a large workforce for your project, Suraj Enterprises can provide the right people with the right skills.
            </p>
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <Link href="/contact">Request a Quote</Link>
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}