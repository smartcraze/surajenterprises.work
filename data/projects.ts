export interface ProjectType {
  image: string;
  title: string;
  description: string;
  location: string;
  duration: string;
}

export const projects: ProjectType[] = [
  {
    image: "/projects/img1.jpg",
    title: "Luxury Residential Complex",
    description: "A premium residential complex with 200+ units featuring modern amenities and sustainable design.",
    location: "Dubai, UAE",
    duration: "24 months"
  },
  {
    image: "/projects/img2.jpg",
    title: "Corporate Headquarters",
    description: "A modern office complex built with sustainable materials and energy-efficient design.",
    location: "Mumbai, India",
    duration: "18 months"
  },
  {
    image: "/projects/img3.jpg",
    title: "Industrial Facility",
    description: "A large-scale industrial manufacturing facility built to international standards.",
    location: "Singapore",
    duration: "12 months"
  }
];