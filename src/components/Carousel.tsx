"use client";

import { Project } from "@/modules/project";
import { motion } from "framer-motion";
import Card from "./Card";

interface CarouselProps {
  projects: Project[];
}
const Carousel = ({ projects }: CarouselProps) => {
  const { perspective, rotateX, zOffset } = {
    perspective: 10000,
    rotateX: -4,
    zOffset: 550,
  };

  return (
    <div className="w-full h-full text-center overflow-hidden relative appearTop">
      <motion.ul
        className="absolute w-96 h-56 top-[15%] left-1/2 -translate-x-1/2 transform-3d z-[2]"
        initial={{
          transform: `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(0deg)`,
        }}
        whileInView={{
          transform: `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(360deg)`,
        }}
        transition={{
          duration: 30,
          repeatType: "loop",
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {projects.map((project, index) => (
          <motion.li
            key={index}
            className="absolute inset-0 backdrop-blur-xl w-full h-full border rounded-3xl shadow-md shadow-primary-700/50 hover:shadow-primary-400/50"
            initial={{
              transform: `rotateY(${
                index * (360 / projects.length)
              }deg) translateZ(${zOffset}px) scale(1)`,
              borderColor: "var(--primary-600)",
            }}
            whileHover={{
              transform: `rotateY(${
                index * (360 / projects.length)
              }deg) translateZ(${zOffset}px) scale(1.05)`,
              borderColor: "var(--primary-300)",
            }}
          >
            <Card project={project} />
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default Carousel;
