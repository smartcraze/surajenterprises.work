
interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string[];
  category: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Vaswani Star Light",
    description: " Vaswani Star Light is a residential project located in Bangalore, India. It offers luxurious apartments with modern amenities and beautiful views.",
    imageUrl: ["/projects/img1.jpg", "/projects/img2.jpg", "/projects/img3.jpg"],
    category: "Category A",
  },
  {
    id: 2,
    title: "Brigade Eternia ",
    description: "Brigade Eternia  from brigade group a residential project located in Bangalore, India. It offers luxurious apartments with modern amenities and beautiful views.",
    imageUrl: ["/projects/img4.jpg", "/projects/img5.jpg", "/projects/img6.jpg"],
    category: "Category B",
  },
];

export default projects;

export function getAllProjects() {
  return projects;
}

interface CompletedProject {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const completedProjects: CompletedProject[] = [
  {
    id: 1,
    title: "Umia",
    description: "Umia is a completed project located in Bangalore,Hebal India. It offers luxurious apartments with modern amenities and beautiful views.",
    imageUrl: "/hero.webp",
  },
];

export function getCompletedProjects() {
  return completedProjects;
}