import { Container, Section } from "@/components/ui/container";
import { features } from "@/data/features";

export const FeaturesSection = () => {
  return (
    <Section variant="muted" >
      <Container size="xl" padding="lg">
        <div className="space-y-14">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Why Choose Suraj Enterprises
            </h2>
            <p className="mx-auto max-w-2xl text-base md:text-lg text-muted-foreground">
              With years of industry experience, we deliver construction
              excellence backed by reliability, precision, and skilled manpower.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.number}
                className="group flex flex-col rounded-xl border bg-card/60 backdrop-blur-sm p-6 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1"
              >
                {/* Number Badge */}
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-semibold">
                  {feature.number}
                </div>

                {/* Content */}
                <h3 className="text-lg md:text-xl font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};
