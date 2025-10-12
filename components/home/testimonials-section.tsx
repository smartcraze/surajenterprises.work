import { Icon } from "@/components/ui/icon";
import { Container, Section } from "@/components/ui/container";
import { testimonials } from "@/data/testimonials";

export const TestimonialsSection = () => {
  return (
    <Section variant="muted">
      <Container size="xl" padding="lg">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Client Testimonials</h2>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
              What our clients say about working with Suraj Enterprises.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <blockquote key={index} className="rounded-lg border bg-background p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Icon name="quote" className="size-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                  </div>
                </div>
                <div className="mt-4 border-t pt-4">
                  <p className="text-muted-foreground leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                </div>
              </blockquote>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};