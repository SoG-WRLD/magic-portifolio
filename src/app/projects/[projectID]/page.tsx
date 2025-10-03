import { ButtonType } from "@/assets/assets";
import Button from "@/components/Button";
import Gallery from "@/components/Gallery";
import { projects } from "@/modules/project";
import Image from "next/image";
import Link from "next/link";

const ProjectPage = async ({
  params,
}: {
  params: Promise<{ projectID: string }>;
}) => {
  const { projectID: id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) return <div>404 | project not found</div>;
  return (
    <main className="p-2 flex flex-col gap-10 mt-24">
      <p className="absolute inset-3 left-auto text-primary-300/80">
        [ project ID: {id} ]
      </p>
      <Gallery images={project.images} len={project.images.length} />
      <div className="flex flex-col">
        <h1 className="title">{project?.name}</h1>
        <ul className="flex gap-2">
          {project?.languages.map((lang, index) => (
            <li key={index} className="flex gap-2 items-start px-2">
              <div className="w-6 h-6 flex">
                <Image
                  src={lang.logoPath}
                  alt={lang.name}
                  width={100}
                  height={100}
                />
              </div>
              <h2 className="font-semibold text-xl">{lang.name}</h2>
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
      <div className="bg-white w-3/6 h-px ml-[2%]" />
      <p className="indent-4 sm:w-1/2 sm:pl-4">{project?.description}</p>
      <div className="flex gap-3 items-center">
        {project?.githubRepo && (
          <Link href={project?.githubRepo}>
            <Button
              type={ButtonType.primary}
              label="Check on github"
              icon="github"
              className="py-1.5!"
            />
          </Link>
        )}
        {project?.link && (
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

export default ProjectPage;
