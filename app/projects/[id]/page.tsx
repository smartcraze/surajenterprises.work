import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container, Section } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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
  };
  challenge?: string;
  solution?: string;
  results?: string;
  services?: string[];
  images?: string[];
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
    },
    challenge: "The project required construction of multiple high-rise residential towers in a densely populated urban area with strict regulatory requirements and a challenging timeline.",
    solution: "We deployed a specialized team of engineers and construction experts who utilized innovative building techniques and prefabricated components to accelerate construction while ensuring compliance with all local regulations and quality standards.",
    results: "The project was completed 2 months ahead of schedule with zero safety incidents. The complex has become one of the most sought-after residential addresses in the area, with 90% occupancy achieved within 3 months of completion.",
    services: ["Construction Management", "Skilled Manpower Supply", "Quality Assurance", "Regulatory Compliance"],
    images: ["/projects/img1.jpg", "/projects/img4.jpg", "/projects/img6.jpg"]
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
    featured: true,
    challenge: "The client requested a LEED Gold-certified building with minimal environmental impact during construction, all within a constrained urban site with limited access.",
    solution: "We implemented a comprehensive green construction plan, utilizing locally-sourced materials, recycling construction waste, and employing energy-efficient construction methods.",
    results: "Successfully achieved LEED Gold certification with a 40% reduction in energy consumption compared to conventional office buildings. The project won the 'Sustainable Construction Project of the Year' award.",
    services: ["Green Building Construction", "Project Management", "Sustainable Design Implementation", "Construction Labor Management"],
    images: ["/projects/img2.jpg", "/projects/img5.jpg", "/projects/img3.jpg"]
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
    },
    challenge: "The manufacturing facility needed to accommodate heavy machinery with specific foundation requirements, complex electrical systems, and specialized ventilation, all while maintaining strict construction timelines to align with the client's production schedule.",
    solution: "We assembled a specialized team with industrial construction expertise and worked closely with the client's engineering team to ensure all technical specifications were met. We implemented 24/7 construction shifts during critical phases to meet deadlines.",
    results: "The facility was delivered on schedule and has been operating at 100% capacity since completion, with a 25% increase in production efficiency compared to the client's previous facility.",
    services: ["Industrial Construction", "Heavy Foundation Work", "Specialized Technical Installations", "Equipment Housing Design"],
    images: ["/projects/img3.jpg", "/projects/img1.jpg", "/projects/img5.jpg"]
  },
  {
    id: 4,
    title: "Healthcare Center",
    description: "A state-of-the-art healthcare facility built with specialized infrastructure for medical equipment and patient care.",
    image: "/projects/img4.jpg",
    category: "Healthcare",
    location: "Bangkok, Thailand",
    duration: "14 months",
    area: "18,000 sqm",
    challenge: "The healthcare center required specialized construction techniques for medical gas systems, radiation protection, and sterile environments, all while accommodating future technological upgrades.",
    solution: "We partnered with healthcare construction specialists and implemented modular construction methods that would allow for future modifications without compromising the integrity of critical areas.",
    results: "The facility passed all medical certification requirements on the first inspection and has been recognized as a regional center of excellence for its design and functionality.",
    services: ["Healthcare Facility Construction", "Specialized Medical Infrastructure", "Clean Room Implementation", "Medical Gas System Installation"],
    images: ["/projects/img4.jpg", "/projects/img2.jpg", "/projects/img6.jpg"]
  },
  {
    id: 5,
    title: "Education Campus",
    description: "A modern educational campus featuring classrooms, laboratories, libraries, and recreational facilities designed for optimal learning environments.",
    image: "/projects/img5.jpg",
    category: "Education",
    location: "Delhi, India",
    duration: "20 months",
    area: "32,000 sqm",
    challenge: "The project involved constructing multiple buildings with different functions while maintaining architectural coherence and optimizing spaces for different educational activities.",
    solution: "We employed a master planning approach that divided the project into phases while ensuring each building met its specific educational requirements while contributing to the overall campus design.",
    results: "The completed campus has won multiple architectural awards and has become a benchmark for educational facility design in the region.",
    services: ["Educational Facility Construction", "Multi-building Project Management", "Specialized Learning Environment Design", "Recreational Facility Construction"],
    images: ["/projects/img5.jpg", "/projects/img3.jpg", "/projects/img1.jpg"]
  },
  {
    id: 6,
    title: "Mixed-Use Development",
    description: "A multi-purpose development combining retail, office, and residential spaces in a sustainable urban design.",
    image: "/projects/img6.jpg",
    category: "Mixed-Use",
    location: "Kuala Lumpur, Malaysia",
    duration: "30 months",
    area: "50,000 sqm",
    challenge: "The development required integrating different functional spaces with varying technical requirements while creating a cohesive user experience and meeting the needs of diverse stakeholders.",
    solution: "We implemented a phased construction approach with specialized teams for each functional area, coordinated through an integrated project management system to ensure all components worked together harmoniously.",
    results: "The development achieved 85% occupancy within 6 months of completion and has become a landmark in the city, generating 20% higher than projected revenue in its first year of operation.",
    services: ["Mixed-Use Development", "Complex Project Integration", "Multi-purpose Space Construction", "Urban Development Planning"],
    images: ["/projects/img6.jpg", "/projects/img4.jpg", "/projects/img2.jpg"]
  }
];

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }));
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const project = projects.find(
    (project) => project.id === parseInt(params.id)
  );

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found.",
    };
  }

  return {
    title: `${project.title} | Suraj Enterprises Projects`,
    description: project.description,
  };
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find(
    (project) => project.id === parseInt(params.id)
  );

  if (!project) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] lg:h-[70vh] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <Container size="xl" padding="lg">
            <div className="text-white pb-8">
              <Badge className="mb-4">{project.category}</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 max-w-4xl">
                {project.title}
              </h1>
              <div className="flex flex-wrap gap-6 lg:gap-12 text-white/90">
                <div>
                  <p className="text-sm font-medium text-white/70 mb-1">Location</p>
                  <p className="font-medium text-lg">{project.location}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-white/70 mb-1">Duration</p>
                  <p className="font-medium text-lg">{project.duration}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-white/70 mb-1">Area</p>
                  <p className="font-medium text-lg">{project.area}</p>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>

      {/* Project Overview */}
      <Container size="xl" padding="lg">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
              <p className="text-xl leading-relaxed text-muted-foreground mb-8">{project.description}</p>

              {project.challenge && (
                <>
                  <h3 className="text-2xl font-semibold mb-4">The Challenge</h3>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-8">{project.challenge}</p>
                </>
              )}

              {project.solution && (
                <>
                  <h3 className="text-2xl font-semibold mb-4">Our Solution</h3>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-8">{project.solution}</p>
                </>
              )}

              {project.results && (
                <>
                  <h3 className="text-2xl font-semibold mb-4">The Results</h3>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-8">{project.results}</p>
                </>
              )}
            </div>

            {project.testimonial && (
              <div className="rounded-lg border bg-card p-8 shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="rounded-full bg-primary/10 p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="size-6 text-primary"
                    >
                      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold">Client Testimonial</h3>
                </div>
                <blockquote className="text-muted-foreground italic text-xl leading-relaxed mb-6">
                  "{project.testimonial.quote}"
                </blockquote>
                <footer className="font-medium text-lg">
                  — {project.testimonial.author}
                  <br />
                  <span className="text-muted-foreground text-base not-italic">{project.testimonial.position}</span>
                </footer>
              </div>
            )}
          </div>

          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-lg border bg-card p-8 shadow-sm">
              <h3 className="text-2xl font-semibold mb-6">Services Provided</h3>
              {project.services && (
                <ul className="space-y-4 mb-8">
                  {project.services.map((service, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="size-5 text-primary shrink-0 mt-1"
                      >
                        <polyline points="9 11 12 14 22 4" />
                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                      </svg>
                      <span className="text-lg">{service}</span>
                    </li>
                  ))}
                </ul>
              )}
              <div className="space-y-4">
                <Button asChild className="w-full" size="lg">
                  <Link href="/contact">Request Similar Project</Link>
                </Button>
                <Button asChild variant="outline" className="w-full" size="lg">
                  <Link href="/services">Explore Our Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Project Gallery */}
      {project.images && project.images.length > 0 && (
        <Section variant="muted">
          <Container size="xl" padding="lg">
            <h2 className="text-3xl font-bold mb-12">Project Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {project.images.map((image, index) => (
                <div key={index} className="aspect-video rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={image}
                    alt={`${project.title} - Image ${index + 1}`}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* More Projects */}
      <Container size="xl" padding="lg">
        <h2 className="text-3xl font-bold mb-12">More Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects
            .filter((p) => p.id !== project.id)
            .slice(0, 3)
            .map((relatedProject) => (
              <Link
                key={relatedProject.id}
                href={`/projects/${relatedProject.id}`}
                className="group"
              >
                <div className="rounded-lg border overflow-hidden h-full flex flex-col shadow-sm hover:shadow-lg transition-shadow">
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={relatedProject.image}
                      alt={relatedProject.title}
                      width={600}
                      height={338}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge>{relatedProject.category}</Badge>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-medium mb-3 group-hover:text-primary transition-colors">
                      {relatedProject.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed flex-1">
                      {relatedProject.description.substring(0, 120)}...
                    </p>
                    <div className="flex justify-between items-center mt-6 pt-4 border-t">
                      <span className="text-sm text-muted-foreground">{relatedProject.location}</span>
                      <span className="text-sm font-medium text-primary group-hover:underline">
                        View Project →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/projects">View All Projects</Link>
          </Button>
        </div>
      </Container>

      {/* CTA Section */}
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