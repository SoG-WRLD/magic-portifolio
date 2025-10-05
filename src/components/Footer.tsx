import { socials } from "@/assets/content";
import { iconLibrary } from "@/assets/icons";
import Image from "next/image";
import React from "react";
import Icon from "./Icon";

const Footer = () => {
  return (
    <footer className="relative px-2 sm:pl-14 py-2 gap-0.5 flex flex-col border-t-4 border-double border-primary-700 backdrop-blur-xl bg-gradient-to-tr from-surface-950/50 to-primary-900/50">
      <div className="flex gap-2 items-center justify-between w-full">
        <span className="flex items-center gap-0.5">
          <Image
            src={"/sogdev-g-logoWhite.svg"}
            alt="SoG.dev logo-short"
            className="w-8 h-8 sm:w-10 sm:h-10"
            width={500}
            height={500}
          />
          <h3 className="font-semibold sm:font-bold text-lg pt-0.5 sm:text-2xl">
            SoG.dev
          </h3>
        </span>
        <ul className="flex gap-2 items-center">
          {socials.map((link, index) => (
            <li
              key={index}
              className="transitions hover:scale-110 hover:opacity-65"
            >
              <a href={link.href}>{link.icon && <Icon name={link.icon} />}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full flex gap-1 sm:gap-3 justify-center">
        <span className="h-full w-[1px] bg-on-surface" />
        <div className="py-2 flex flex-col items-center h-full justify-center">
          {/* <Image
            src={SoGLogo}
            alt="SoG.dev logo"
            className="h-12 w-24 sm:h-14 sm:w-32 object-cover"
          /> */}
          <h2 className="text-center font-semibold">
            SoG.dev: the way to the future
          </h2>
        </div>
      </div>
      <p className="text-center text-xs sm:text-sm w-full">
        &copy;2025 SoG.dev by Gilson Vicente. All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
