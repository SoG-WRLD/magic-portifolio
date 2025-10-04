"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Card from "./Card";
import { useGlobalContext } from "@/utils/ProjectsContext";
import { Project } from "@/modules/project";
const get3dValues = () => {
    if (typeof window === "undefined") {
      return { perspective: 10000, rotateX: -4, zOffset: 550 };
    }
    const width = window.innerWidth;
    if (width < 640) {
      // Mobile
      return { perspective: 4000, rotateX: -3, zOffset: 220 };
    } else if (width < 1024) {
      // Tablet
      return { perspective: 7000, rotateX: -4, zOffset: 450 };
    } else {
      // Desktop
      return { perspective: 10000, rotateX: -4, zOffset: 550 };
    }
  };
const Carousel = () => {
  const projects:Project[] = useGlobalContext();
  const [threeD, setThreeD] = useState(get3dValues());

  // Responsive values for perspective, rotateX, and zOffset
  useEffect(() => {
    const handleResize = () => setThreeD(get3dValues());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { perspective, rotateX, zOffset } = threeD;
    if (!projects) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="animate-pulse w-56 h-44 sm:w-96 sm:h-56 bg-primary-900/30 rounded-3xl flex items-center justify-center">
          <span className="text-primary-400 text-lg">Loading projects...</span>
        </div>
      </div>
    );
  }
  return (
    <div className="w-full h-full text-center overflow-hidden relative appearTop">
      <motion.ul
        className="absolute w-56 h-44 sm:w-96 sm:h-56 top-[15%] left-1/2 -translate-x-1/2 transform-3d z-[2]"
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
              transform: `rotateY(${index * (360 / projects.length)}deg) translateZ(${zOffset}px) scale(1)`,
              borderColor: "var(--primary-600)",
            }}
            whileHover={{
              transform: `rotateY(${index * (360 / projects.length)}deg) translateZ(${zOffset}px) scale(1.05)`,
              borderColor: "var(--primary-300)",
            }}
          >
            <Card project={project} />
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
export default Carousel;
