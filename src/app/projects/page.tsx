"use client"
import ProjectCard from "@/components/ProjectCard";
import { Project } from "@/modules/project";
import { useGlobalContext } from "@/utils/ProjectsContext";

const ProjectsPage = () => {
  const projects: Project[] = useGlobalContext();
  return (
    <main className="sm:mt-28">
      <h1 className="title sm:pl-5 pl-3">
        Visit some of <b>my work</b>
      </h1>
      <ul className="flex flex-col gap-10 lg:gap-24 my-10">
        {projects.map((project, index) => (
          <ProjectCard project={project} key={index} index={index} />
        ))}
      </ul>
    </main>
  );
};
export default ProjectsPage;