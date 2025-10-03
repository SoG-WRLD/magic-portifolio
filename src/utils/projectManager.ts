import { Project } from "@/modules/project";
import fs from "fs";
import path from "path";

export const readProject = (folder_name: string): Project | null => {
  let project: Project;
  const filePath = path.join(`public/projects/${folder_name}/project.json`);

  if (fs.existsSync(filePath)) {
    const fileContent = fs.readFileSync(filePath, "utf8");
    project = JSON.parse(fileContent);
    project.images = getImages(folder_name);
    return project;
  } else {
    return null;
  }
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

export const getImages = (__dirname: string): string[] => {
  const folderPath = path.join(`public/projects/${__dirname}/images`);
  const regex = /\.(png|jpg|jpeg|svg)$/i;
  if (!fs.existsSync(folderPath)) {
    return [];
  }
  let folder = fs.readdirSync(folderPath);
  folder = folder.filter((el) => regex.test(el));
  const images = folder.map((file) => `/projects/${__dirname}/images/${file}`);
  return images;
};
