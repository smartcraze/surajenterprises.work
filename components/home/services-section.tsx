import { Icon } from "@/components/ui/icon";
import { Container } from "@/components/ui/container";
import { services } from "@/data/services";

export const ServicesSection = () => {
  return (
    <section
      id="services"
      className=" bg-gradient-to-b from-background to-muted/30"
    >
      <Container size="xl" padding="lg">
        <div className="space-y-12">
          {/* Section Heading */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Our Services
            </h2>
            <p className="mx-auto max-w-2xl text-base md:text-lg text-muted-foreground">
              We provide comprehensive contracting and construction services,
              combining skilled manpower with modern tools for projects of every
              scale.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="group flex flex-col rounded-xl border bg-card/50 backdrop-blur-sm p-6 transition-all hover:shadow-xl hover:-translate-y-1 hover:border-primary"
              >
                <div className="mb-4 flex items-center justify-center rounded-full bg-primary/10 p-3 w-14 h-14 mx-auto sm:mx-0 sm:justify-start">
                  <Icon name={service.icon} className="text-primary size-6" />
                </div>
                <div className="flex flex-col text-center sm:text-left">
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
