import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/modules/project";
import React from "react";

const ProjectsPage = () => {
  return (
    <main className="sm:mt-28">
      <h1 className="title sm:pl-5 pl-3">
        Visit some of <b>my work</b>
      </h1>
      <ul className="flex flex-col gap-10 my-10">
        {projects.map((project, index) => (
          <ProjectCard project={project} key={index} index={index} />
        ))}
      </ul>
    </main>
  );
};

export default ProjectsPage;
