"use client";
import { ButtonType } from "@/assets/assets";
import { Project } from "@/modules/project";
import { useIsMount } from "@/utils/hooks";
import clsx from "clsx";
import { motion, useAnimationControls, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import Icon from "./Icon";

interface ProjectCardProps {
  project: Project;
  index: number;
}
const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [currIndex, setCurrIndex] = useState(0);
  const liRefs = useRef<(HTMLLIElement | null)[]>([]);
  const imageCount = project.images.length;
  const divRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(divRef, { amount: "all", margin: "0px 200px" });
  const controls = useAnimationControls();
  const isMount = useIsMount();

  const scroll = (direction: string) => {
    if (!liRefs.current) {
      return;
    }
    setCurrIndex((i) => {
      let nextIndex: number;
      nextIndex =
        direction === "left" ? (i - 1) % imageCount : (i + 1) % imageCount;
      if (nextIndex < 0) {
        nextIndex = imageCount - 1;
      }
      return nextIndex;
    });
  };
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isInView) {
      interval = setInterval(
        () => setCurrIndex((i) => (i + 1) % imageCount),
        3_000
      );
    }
    return () => clearInterval(interval);
  }, [isInView, imageCount]);

  useEffect(() => {
    if (isMount) {
      return;
    }
    const currentItem = liRefs.current[currIndex];
    controls.start("click");
    if (currentItem) {
      currentItem.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  }, [currIndex, isMount, controls]);

  return (
    <div>
      <div
        ref={divRef}
        className={clsx([
          "h-80 w-full hidden lg:grid grid-rows-[25%_75%] even:grid-cols-[25%_25%_40%] odd:grid-cols-[40%_25%_25%] p-3 justify-between items-center",
          "even:[background:linear-gradient(115deg,transparent_60%,var(--primary-900)_85%,var(--primary-800)_100%)] even:",
          "odd:[background:linear-gradient(-115deg,transparent_60%,var(--primary-900)_85%,var(--primary-800)_100%)]",
          index % 2 === 0 ? "appearLeft" : "appearRight",
        ])}
      >
        <div className="lg:text-2xl font-semibold flex flex-col gap-1 w-fit px-3">
          <span className="flex items-end gap-1">
            <Icon name="gallery" className="text-4xl" />
            <h2 className="row-start-1">Gallery</h2>
          </span>
          <div className="self-center w-3/4 h-px bg-primary-500" />
        </div>
        <div
          className={clsx([
            "flex flex-col gap-3 py-2 px-2 relative",
            index % 2 === 0 ? "col-start-1" : "col-start-3",
          ])}
        >
          <div className="absolute top-1/2 -translate-y-1/2 inset-x-0 w-full flex justify-between z-50">
            <button onClick={() => scroll("left")}>
              <Icon
                name="arrowLeft"
                className="text-4xl rounded-3xl p-1 transitions border cursor-pointer border-transparent hover:border-primary-300/80 bg-primary-700/60 hover:bg-primary-700/90 text-primary-300"
              />
            </button>
            <button onClick={() => scroll("right")}>
              <Icon
                name="arrowRight"
                className="text-4xl rounded-3xl p-1 transitions border cursor-pointer border-transparent hover:border-primary-300/80 bg-primary-700/60 hover:bg-primary-700/90 text-primary-300"
              />
            </button>
          </div>
          <ul className="overflow-hidden flex flex-nowrap w-full gap-1 lg:justify-start">
            {project.images.map((image, index) => (
              <li
                ref={(el) => {
                  if (liRefs.current) {
                    liRefs.current[index] = el;
                  }
                }}
                key={index}
                className={clsx([
                  index != currIndex && "scale-90 blur-[2px]",
                  "w-32 h-44 rounded-2xl flex object-contain shrink-0 transitions",
                ])}
              >
                <Image
                  src={image}
                  alt={`${project.name}-image-${index + 1}`}
                  style={{ borderRadius: "inherit", objectFit: "cover" }}
                  width={500}
                  height={500}
                  onClick={() => setCurrIndex(index)}
                />
              </li>
            ))}
          </ul>
          <ul className="flex gap-1 self-center px-5">
            {project.images.map((_, index) => (
              <li
                key={index}
                className={clsx([
                  index === currIndex && "bg-primary-600 w-6",
                  "flex w-2 h-2 border border-primary-700 rounded-2xl transitions",
                ])}
              />
            ))}
          </ul>
        </div>
        <div className="col-start-2 flex row-start-1 row-span-full flex-col gap-3 text-center h-full z-10">
          <div className="flex flex-col text-center gap-1 lg:gap-2">
            <h2 className="subtitle capitalize">{project.name}</h2>
            <div className="w-3/4 h-px bg-primary-500 self-center" />
            <p className="line-clamp-5 text-sm lg:text-base">
              {project.description}
            </p>
          </div>
          <div className="flex gap-3 justify-center">
            {project.link && project.status === "uploaded" && (
              <Link href={project.link}>
                <Button
                  type={ButtonType.secondary}
                  label="visit page"
                  icon="link"
                />
              </Link>
            )}
            <Link href={`projects/${project.id}`}>
              <Button
                type={ButtonType.primary}
                label="view project"
                icon="view"
              />
            </Link>
          </div>
        </div>

        <motion.div
          animate={controls}
          className={clsx([
            "h-full row-span-full self-end relative border border-primary-800",
            index % 2 === 0 ? "col-start-3" : "col-start-1",
          ])}
          initial={{
            x: 0,
            scale: 1,
            opacity: 1,
          }}
          variants={{
            click: {
              x: ["0%", index % 2 === 0 ? "100%" : "-100%", "0%"],
              // scale: [1, 0, 1],
              opacity: [1, 0, 0, 1],
            },
          }}
          transition={{
            ease: "easeOut",
            duration: 1,
          }}
        >
          <div
            style={{ borderRadius: "inherit" }}
            className="h-full backdrop-blur-xs"
          >
            <Image
              src={project.images[currIndex]}
              alt={`${project.name}-image-${currIndex + 1}`}
              style={{ borderRadius: "inherit", objectFit: "contain" }}
              width={500}
              height={500}
              className="w-full h-full"
            />
          </div>
          <Image
            src={project.images[currIndex]}
            alt={`${project.name}-image-${currIndex + 1}`}
            style={{ borderRadius: "inherit", objectFit: "cover" }}
            width={500}
            height={500}
            className="w-full h-full absolute inset-0 z-[-1]"
          />
        </motion.div>
      </div>
      <div
        className={clsx([
          "lg:hidden w-full h-40 p-3 relative bg-primary-800 rounded-2xl text-center",
          index % 2 === 0
            ? "appearLeft [background:linear-gradient(115deg,transparent_60%,var(--primary-900)_85%,var(--primary-800)_100%)]"
            : "appearRight [background:linear-gradient(-115deg,transparent_60%,var(--primary-900)_85%,var(--primary-800)_100%)]",
        ])}
      >
        <h1 className="text-2xl">{project.name}</h1>
        <div className="flex">
          <div
            className={clsx([
              "h-36 w-36 absolute inset-y-1/2 -translate-y-1/2 opacity-50 blur-xs",
              index % 2 === 0 ? "left-2" : "right-2",
            ])}
          >
            <Image
              src={project.images[currIndex]}
              alt={`${project.name} icon`}
              className="w-full h-full object-cover"
              width={500}
              height={500}
            />
          </div>
          <span className="flex flex-col gap-1">
            <p className="text-sm indent-1 overflow-hidden text-wrap text-ellipsis line-clamp-3 z-10">
              {project.description}
            </p>
            <div className="flex gap-3 justify-center">
              {project.link && project.status === "uploaded" && (
                <Link href={project.link}>
                  <Button
                    type={ButtonType.secondary}
                    label="visit page"
                    icon="link"
                  />
                </Link>
              )}
              <Link href={`projects/${project.id}`}>
                <Button
                  type={ButtonType.primary}
                  label="view project"
                  icon="view"
                />
              </Link>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
