"use client";
import { ButtonType } from "@/assets/assets";
import Button from "@/components/Button";
import Gallery from "@/components/Gallery";
import { Project } from "@/modules/project";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";


import { useParams } from "next/navigation";

interface ProjectPageProps {
  project: Project | null;
  id: string;
}

const ProjectPage = ({ project, id }: ProjectPageProps) => {
  if (!project) return <div className="text-3xl sm:text-4xl font-semibold font-mono">404 | project not found</div>;
  
  return (
    <main className="p-2 flex flex-col gap-5 sm:mt-24">
      <p className="absolute sm:inset-3 left-14 top-4 sm:left-auto text-start sm:text-end w-full text-xs sm:text-sm text-primary-300/50 sm:text-primary-300/80">
        [ project ID: {id} ]
      </p>
      <Gallery images={project.images} />
      <div className="flex flex-col">
        <h1 className="title">{project.name}</h1>
        <ul className="flex gap-2">
          {project.languages.map((lang, index) => (
            <li key={index} className="flex gap-1 sm:gap-2 items-center px-2">
              <div className="w-4 h-4 sm:w-6 sm:h-6 flex">
                <Image
                  src={lang.logoPath}
                  alt={lang.name}
                  width={100}
                  height={100}
                />
              </div>
              <h2 className="font-medium sm:text-xl">{lang.name}</h2>
              <div
                className={
                  index != project.languages.length - 1
                    ? "h-3/6 w-px bg-white self-center"
                    : "hidden"
                }
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-white w-2/3 sm:w-3/6 h-px ml-[2%]" />
      <p className="indent-2 sm:indent-4 text-justify sm:w-1/2 sm:pl-4">{project?.description}</p>
      <div className="flex gap-3 items-center">
        {project.githubRepo && (
          <Link href={project?.githubRepo}>
            <Button
              type={ButtonType.primary}
              label="Check on github"
              icon="github"
              className="py-1.5!"
            />
          </Link>
        )}
        {project.link && (
          <Link href={project?.link}>
            <Button
              type={ButtonType.secondary}
              label="visit page"
              icon="link"
              className="py-1!"
            />
          </Link>
        )}
      </div>
    </main>
  );
};

const DynamicProjectPage = () => {
  const { projectID: id } = useParams() as { projectID: string };
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async()=>{
      const res = await fetch("/api/readProject?folder_name=" + id);
      const data = await res.json();
      setProject(data);
      setLoading(false);
    }

    fetchData();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="text-xl text-primary-400 animate-pulse">Loading project...</span>
      </div>
    );
  }
  return <ProjectPage project={project} id={id} />;
};

export default DynamicProjectPage;
