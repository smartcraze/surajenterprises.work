import { Container } from "@/components/ui/container";
import { ServicesContent } from "@/components/services/services-content";

export const metadata = {
  title: "Our Services | Suraj Enterprises",
  description: "Explore our comprehensive construction and manpower services for global construction projects. From skilled labor to project management, we do it all.",
};

export default function ServicesPage() {
  return (
    <Container size="xl" padding="lg">
      <ServicesContent />
    </Container>
  );
}