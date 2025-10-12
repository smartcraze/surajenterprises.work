import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export const HeroSection = () => {
  return (
    <section className="relative flex items-center justify-center min-h-[90vh] overflow-hidden bg-gradient-to-b from-background via-muted/40 to-background">
      {/* Content */}
      <Container size="xl" padding="lg" className="relative z-10 flex flex-col items-center text-center space-y-8">
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-6xl lg:text-7xl">
          Building the Future with{" "}
          <span className="text-primary">Precision & Passion</span>
        </h1>

        <p className="max-w-3xl text-lg md:text-xl text-muted-foreground leading-relaxed">
          Suraj Enterprises delivers world-class construction and contracting
          services — combining skilled manpower, modern technology, and
          reliability for projects of every scale.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Button asChild size="lg" className="text-lg px-8 py-6">
            <Link href="#contact">Get a Quote</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="text-lg px-8 py-6"
          >
            <Link href="/services">Explore Services</Link>
          </Button>
        </div>
      </Container>

      {/* Background accents */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_rgba(255,200,150,0.15),_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,_rgba(150,200,255,0.15),_transparent_60%)]" />
      </div>

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent z-0" />
    </section>
  );
};
