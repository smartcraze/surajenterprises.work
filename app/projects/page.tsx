import Image from "next/image";
import Link from "next/link";
import { Container, Section } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export const metadata = {
  title: "Our Portfolio | Suraj Enterprises",
  description: "Explore our showcase of successful construction projects across the globe. See how Suraj Enterprises delivers excellence in construction contracting.",
};

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  location: string;
  duration: string;
  area: string;
  featured?: boolean;
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  }
}

const projects: Project[] = [
  {
    id: 1,
    title: "Luxury Residential Complex",
    description: "A premium residential complex with 200+ units featuring modern amenities, sustainable design, and state-of-the-art construction techniques.",
    image: "/projects/img1.jpg",
    category: "Residential",
    location: "Dubai, UAE",
    duration: "24 months",
    area: "45,000 sqm",
    featured: true,
    testimonial: {
      quote: "Suraj Enterprises delivered beyond our expectations, completing the project ahead of schedule while maintaining exceptional quality standards.",
      author: "Ahmed Al-Farsi",
      position: "Director, Gulf Construction Ltd"
    }
  },
  {
    id: 2,
    title: "Corporate Headquarters",
    description: "A modern office complex built with sustainable materials and energy-efficient design, featuring open workspaces and collaborative environments.",
    image: "/projects/img2.jpg",
    category: "Commercial",
    location: "Mumbai, India",
    duration: "18 months",
    area: "22,000 sqm",
    featured: true
  },
  {
    id: 3,
    title: "Industrial Manufacturing Facility",
    description: "A large-scale industrial facility built to international standards with advanced safety features and efficient workflow design.",
    image: "/projects/img3.jpg",
    category: "Industrial",
    location: "Singapore",
    duration: "12 months",
    area: "35,000 sqm",
    featured: true,
    testimonial: {
      quote: "The team at Suraj Enterprises understood our unique requirements and delivered a facility that has significantly improved our operational efficiency.",
      author: "Sarah Johnson",
      position: "Operations Director, XYZ Manufacturing"
    }
  },
  {
    id: 4,
    title: "Healthcare Center",
    description: "A state-of-the-art healthcare facility built with specialized infrastructure for medical equipment and patient care.",
    image: "/projects/img4.jpg",
    category: "Healthcare",
    location: "Bangkok, Thailand",
    duration: "14 months",
    area: "18,000 sqm"
  },
  {
    id: 5,
    title: "Education Campus",
    description: "A modern educational campus featuring classrooms, laboratories, libraries, and recreational facilities designed for optimal learning environments.",
    image: "/projects/img5.jpg",
    category: "Education",
    location: "Delhi, India",
    duration: "20 months",
    area: "32,000 sqm"
  },
  {
    id: 6,
    title: "Mixed-Use Development",
    description: "A multi-purpose development combining retail, office, and residential spaces in a sustainable urban design.",
    image: "/projects/img6.jpg",
    category: "Mixed-Use",
    location: "Kuala Lumpur, Malaysia",
    duration: "30 months",
    area: "50,000 sqm"
  }
];

export default function ProjectsPage() {
  const featuredProjects = projects.filter(project => project.featured);
  const allProjects = projects;

  return (
    <>
      {/* Hero Section */}
      <Section variant="accent">
        <Container size="xl" padding="xl">
          <div className="text-center space-y-6">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Our Showcase Projects
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Explore our portfolio of exceptional construction projects delivered with precision, expertise, and uncompromising quality.
            </p>
          </div>
        </Container>
      </Section>

      {/* Featured Projects */}
      <Container size="xl" padding="lg">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Our most prestigious and challenging projects that showcase the full range of our capabilities.
            </p>
          </div>

          <div className="space-y-16">
            {featuredProjects.map((project) => (
              <div key={project.id} className="group relative overflow-hidden rounded-2xl border shadow-lg">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative overflow-hidden h-full min-h-[300px] lg:min-h-[500px]">
                    <Image 
                      src={project.image} 
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:bg-gradient-to-r" />
                    <div className="absolute bottom-6 left-6 lg:hidden">
                      <Badge className="mb-3">{project.category}</Badge>
                      <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                    </div>
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col">
                    <div className="space-y-6">
                      <Badge className="w-fit">{project.category}</Badge>
                      <h3 className="text-3xl font-bold hidden lg:block">{project.title}</h3>
                      <p className="text-muted-foreground text-lg leading-relaxed">{project.description}</p>
                      
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <p className="text-sm text-muted-foreground font-medium">Location</p>
                          <p className="font-semibold">{project.location}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground font-medium">Duration</p>
                          <p className="font-semibold">{project.duration}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground font-medium">Area</p>
                          <p className="font-semibold">{project.area}</p>
                        </div>
                      </div>

                      {project.testimonial && (
                        <blockquote className="border-l-4 border-primary pl-6 italic text-muted-foreground">
                          <p className="text-lg">"{project.testimonial.quote}"</p>
                          <footer className="mt-3 font-medium text-foreground not-italic">
                            — {project.testimonial.author}
                            <br />
                            <span className="text-muted-foreground text-sm">{project.testimonial.position}</span>
                          </footer>
                        </blockquote>
                      )}
                    </div>
                    
                    <div className="mt-auto pt-6">
                      <Button asChild size="lg" className="w-full lg:w-auto">
                        <Link href="/contact">Request Similar Project</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* All Projects */}
      <Section variant="muted">
        <Container size="xl" padding="lg">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">More Projects</h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                Explore our complete portfolio of successful projects across various sectors and regions.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {allProjects.map((project) => (
                <Card key={project.id} className="group overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative">
                    <AspectRatio ratio={16 / 9}>
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </AspectRatio>
                    <div className="absolute top-4 right-4">
                      <Badge>{project.category}</Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      {project.location}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{project.description.substring(0, 120)}...</p>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center">
                    <div className="text-sm text-muted-foreground">
                      {project.duration} | {project.area}
                    </div>
                    <Button asChild variant="outline" size="sm">
                      <Link href={`/projects/${project.id}`}>View Details</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>


      <Section variant="accent">
        <Container size="xl" padding="xl">
          <div className="text-center space-y-8">
            <h2 className="text-3xl font-bold tracking-tight">Ready to Build Something Amazing?</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Partner with Suraj Enterprises for your next construction project and experience the difference that expertise, quality, and dedication can make.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8 py-6">
                <Link href="/contact">Get a Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}