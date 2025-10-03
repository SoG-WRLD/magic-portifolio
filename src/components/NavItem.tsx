"use client";
import { Navigation } from "@/assets/content";
import { motion, MotionConfig } from "framer-motion";

interface NavItemProps {
  item: Navigation;
  index: number;
}
const NavItem = ({ item, index }: NavItemProps) => {
  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
    >
      <motion.li className={"flex group items-center"}>
        <div className="h-10 w-10 p-0.5 shrink-0 text-center">icon</div>
        <motion.p
          className="text-nowrap overflow-hidden border"
          initial={{
            width: 0,
            opacity: 0,
            borderColor: "transparent",
          }}
          variants={{
            hovered: {
              width: "fit-content",
              opacity: 1,
              borderColor: "#000925",
            },
          }}
        >
          {item.title}
        </motion.p>
      </motion.li>
    </MotionConfig>
  );
};

export default NavItem;
