"use client";

import { Project } from "@/modules/project";
import Image from "next/image";
import { useEffect, useState } from "react";

interface CardProps {
  project: Project;
}
const Card = ({ project }: CardProps) => {
  const [currIndex, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % project.images.length);
    }, 3_000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div style={{ borderRadius: "inherit" }} className="h-full w-full flex">
      <Image
        src={project.images[currIndex]}
        alt={`${project.name}-image${currIndex}`}
        width={500}
        height={500}
        className="object-cover w-full h-full absolute inset-0 shrink-0 text-xs z-0 blur-[2px]"
      />
      <Image
        src={project.images[currIndex]}
        alt={`${project.name}-image${currIndex}`}
        width={500}
        height={500}
        className="object-contain w-full h-full inset-0 shrink-0 text-xs z-0"
        style={{
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
        }}
      />
      <div className="absolute inset-2.5 py-0.5 rounded-3xl group text-primary-300 bg-black/30 border backdrop-blur-lg px-3 w-fit h-fit flex items-center gap-2 capitalize">
        {project.name}
        <div
          className={`${
            project.status === "uploaded"
              ? "bg-green-500 border-green-600 group-hover:bg-green-400 group-hover:shadow-green-400"
              : "bg-red-500 border-red-600 group-hover:bg-red-400 group-hover:shadow-red-400"
          } rounded-full w-2 h-2 border transitions shadow-sm shadow-transparent`}
        />
      </div>
    </div>
  );
};

export default Card;
