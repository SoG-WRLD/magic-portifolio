import { Project } from "@/modules/project";
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const readProject = async (folder_name: string) => {
  const response = await fetch(
    `${baseUrl}/projects/${folder_name}/project.json`
  );
  const project: Project = await response.json();
  project.images = await getImages(folder_name);

  return project;
};

export const filterProjects = (projects: (Project | null)[]): Project[] => {
  const filteredList: Project[] = [];
  projects.map((proj) => {
    if (!proj) {
      return;
    }
    filteredList.push(proj);
  });

  return filteredList;
};

export const getImages = async (folder_name: string): Promise<string[]> => {
  const response = await fetch(
    `${baseUrl}/api/listImages?folder=${folder_name}`
  );
  if (!response.ok) return [];
  const files: string[] = await response.json();
  return files.map((file) => `/projects/${folder_name}/images/${file}`);
};
