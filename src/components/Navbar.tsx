"use client";
import { navigation } from "@/assets/content";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import clsx from "clsx";
import Link from "next/link";
import React from "react";
import Icon from "./Icon";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const navItems = navigation || [];
  const currPath = usePathname();
  return (
    <nav className="w-full ">
      {/* Large screen navbar */}
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
                <Icon name={navItem.icon} className="h-full w-full" />
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
      {/* Mobile navbar */}
      <Menu
        as="ul"
        className="sm:hidden h-10 w-10 m-1.5 rounded-xl bg-surface-800/50 flex justify-center items-center"
      >
        <MenuButton className={"h-10 w-10 p-1.5"}>
          <Icon name="menuBar" className="w-full h-full" />
        </MenuButton>
        <MenuItems
          as="ul"
          anchor="bottom"
          transition
          className={clsx([
            "rounded-2xl m-2 w-2/3 bg-surface-900/50 flex flex-col p-1.5 pt-5 gap-2 backdrop-blur-lg focus-within:outline-0",
            "data-closed:opacity-0 data-closed:scale-0 origin-top-left transitions",
          ])}
        >
          {navItems.map((nav, index) => (
            <MenuItem
              key={index}
              as="li"
              className={clsx([
                "w-full p-1 rounded-2xl bg-surface-800/30 hover:bg-surface-800/50",
                nav.path === currPath && "text-primary-300 bg-surface-800/70!",
              ])}
            >
              <Link
                href={nav.path}
                className="h-full px-1.5 py-0.5 flex items-center justify-between gap-2.5"
              >
                <p className="text-lg">{nav.title}</p>
                <Icon name={nav.icon} className="text-2xl shrink-0" />
              </Link>
            </MenuItem>
          ))}
        </MenuItems>
      </Menu>
    </nav>
  );
};

export default Navbar;
