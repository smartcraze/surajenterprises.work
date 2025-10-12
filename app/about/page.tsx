import { Container } from "@/components/ui/container";

export const metadata = {
  title: "About Us | Suraj Enterprises",
  description: "Learn about Suraj Enterprises, our history, values, and commitment to quality construction contracting services worldwide.",
};

export default function AboutPage() {
  return (
    <Container size="xl" padding="lg">
      <div className="space-y-12">
        <div className="space-y-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            About Suraj Enterprises
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Established with a vision to provide quality construction services, Suraj Enterprises has grown to become a global leader in construction contracting and manpower services.
          </p>
        </div>

        <div className="grid gap-12 lg:gap-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold">Our Story</h2>
            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                Founded in 2005, Suraj Enterprises began as a small local contractor focusing on residential projects. With unwavering commitment to quality and client satisfaction, we quickly expanded our operations to commercial and industrial sectors.
              </p>
              <p>
                Over the years, we have successfully completed numerous projects across different countries, building a reputation for reliability, expertise, and professionalism. Today, we are proud to be a trusted partner for construction projects of all scales globally.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-semibold">Our Mission</h2>
            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                Our mission is to provide exceptional construction contracting services and skilled manpower solutions that exceed client expectations while maintaining the highest standards of quality, safety, and efficiency.
              </p>
              <p>
                We strive to build lasting relationships with our clients based on trust, transparency, and excellent service delivery, ensuring successful project completion every time.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-semibold">Our Values</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="mb-3 text-xl font-medium">Quality</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We maintain the highest standards in all aspects of our work, from construction techniques to material selection and project management.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="mb-3 text-xl font-medium">Integrity</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We conduct our business with honesty, transparency, and ethical practices, building trust with clients, partners, and employees.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="mb-3 text-xl font-medium">Safety</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We prioritize the safety of our workforce, clients, and the public in all our operations, adhering to strict safety protocols.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="mb-3 text-xl font-medium">Innovation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We continuously seek to improve our methods and embrace new technologies to deliver better results and value to our clients.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-semibold">Our Team</h2>
            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                At Suraj Enterprises, our greatest asset is our team of skilled professionals. We employ experienced engineers, project managers, skilled laborers, and administrative staff who work together to ensure project success.
              </p>
              <p>
                Our workforce includes specialists in various construction disciplines, from concrete and masonry experts to electrical and plumbing professionals. Each team member is carefully selected based on their expertise, experience, and commitment to excellence.
              </p>
              <p>
                We invest in regular training and development programs for our staff to keep them updated with the latest industry standards, safety protocols, and construction technologies.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-semibold">Global Presence</h2>
            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                Starting from our humble beginnings, we have expanded our operations to serve clients across multiple countries. Our global experience allows us to adapt to different construction environments, local regulations, and cultural nuances.
              </p>
              <p>
                We have successfully completed projects in India, UAE, Singapore, and several other countries in Asia and the Middle East. Our goal is to continue expanding our global footprint while maintaining our commitment to quality and customer satisfaction.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-semibold">Certifications and Compliance</h2>
            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                Suraj Enterprises adheres to international construction standards and holds certifications that validate our commitment to quality and safety. We ensure compliance with local building codes and regulations in all our project locations.
              </p>
              <p>
                Our operations are guided by standardized processes and quality management systems that help us deliver consistent results across all our projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}