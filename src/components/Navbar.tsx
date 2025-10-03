import { navigation } from "@/assets/content";
import { prefixStyle } from "@/utils/prefixer";
import clsx from "clsx";
import React from "react";
import NavItem from "./NavItem";
import { IconBase } from "react-icons";
import { iconLibrary } from "@/assets/icons";
import Link from "next/link";

const Navbar = () => {
  const navItems = navigation || [];
  return (
    <nav className="w-full ">
      <ul
        className={clsx([
          "hidden sm:flex w-fit h-12 md:h-14 backdrop-blur-xl border border-primary-600 bg-surface-900/20 px-5 gap-1",
          "absolute top-6 left-1/2 -translate-x-1/2 z-10 rounded-3xl md:rounded-4xl shadow-xs shadow-primary-500/50",
        ])}
      >
        {navItems.map((navItem, index) => (
          <Link key={index} href={navItem.path}>
            <li
              className={
                "transitions cursor-pointer flex group items-center text-primary-300 hover:text-primary-200 gap-0.5 drop-shadow-sm hover:drop-shadow-primary-500"
              }
            >
              {index != 0 && (
                <div className="transitions h-2 w-px bg-primary-500 group-hover:h-6 group-hover:bg-primary-300 group-hover:shadow-sm shadow-primary-400" />
              )}
              <div className="h-10 w-10 md:w-12 md:h-12 md:p-1 p-0.5 shrink-0 text-center flex items-center">
                {React.createElement(iconLibrary[navItem.icon], {
                  size: 32,
                  className: "mx-auto",
                })}
              </div>
              <p
                className={clsx([
                  "text-nowrap overflow-hidden w-0 group-hover:w-24 transitions font-semibold text-lg text-center",
                ])}
              >
                {navItem.title}
              </p>
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
