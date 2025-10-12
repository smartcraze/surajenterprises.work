export interface ServiceType {
  icon: string;
  title: string;
  description: string;
}

export const services: ServiceType[] = [
  {
    icon: "building",
    title: "Construction Services",
    description: "Full-service construction contracting for commercial, residential, and industrial projects."
  },
  {
    icon: "users",
    title: "Skilled Manpower",
    description: "Providing experienced labor teams for construction sites worldwide, including skilled and unskilled workers."
  },
  {
    icon: "shield-check",
    title: "Project Management",
    description: "End-to-end project management and supervision to ensure timely completion and quality control."
  }
];