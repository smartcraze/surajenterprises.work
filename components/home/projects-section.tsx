import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { projects } from "@/data/projects";

export const ProjectsSection = () => {
  return (
    <section id="projects">
      <Container size="xl" padding="lg">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Our Projects</h2>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
              Explore some of our successful construction projects delivered across the globe.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div key={index} className="group overflow-hidden rounded-lg border shadow-sm hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    width={600} 
                    height={338}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-3 text-xl font-medium">{project.title}</h3>
                  <p className="mb-4 text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-4 text-sm">
                    <div>
                      <span className="font-medium">Location:</span> {project.location}
                    </div>
                    <div>
                      <span className="font-medium">Duration:</span> {project.duration}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};