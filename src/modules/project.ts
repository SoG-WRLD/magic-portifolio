import { StaticImageData } from "next/image";
import { filterProjects, readProject } from "@/utils/projectManager";

type Project = {
  id: string;
  name: string;
  icon: string;
  images: string[];
  description: string;
  link?: string;
  githubRepo?: string;
  status: "uploaded" | "not uploaded";
  languages: { name: string; logoPath: string }[];
};

const pre_projects: (Project | null)[] = [
  readProject("page_generator"),
  readProject("dummy_project"),
];
const projects = filterProjects(pre_projects);

export type { Project };
export { projects };
