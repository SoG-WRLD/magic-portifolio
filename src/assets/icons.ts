import { IconType } from "react-icons";

import {
  HiArrowLeft,
  HiArrowRight,
  HiArrowTopRightOnSquare,
  HiArrowUpLeft,
  HiArrowUpRight,
  HiCalendarDays,
  HiOutlineEye,
  HiOutlineEyeSlash,
  HiOutlineGlobeAsiaAustralia,
  HiOutlineLink,
} from "react-icons/hi2";

import {
  PiBookBookmarkDuotone,
  PiBracketsCurlyDuotone,
  PiClipboardDuotone,
  PiFolderOpenDuotone,
  PiGridFourDuotone,
  PiHouseDuotone,
  PiImageDuotone,
  PiPhoneCallDuotone,
  PiReadCvLogoDuotone,
  PiRocketLaunchDuotone,
  PiUserDuotone,
} from "react-icons/pi";

import { BiLink } from "react-icons/bi";
import {
  FaDiscord,
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaThreads,
  FaWhatsapp,
  FaX,
} from "react-icons/fa6";
import { LuArrowDownToLine } from "react-icons/lu";
import { MdOutlineViewInAr } from "react-icons/md";

export const iconLibrary: Record<string, IconType> = {
  // Navigation icons
  phoneCall: PiPhoneCallDuotone,
  home: PiHouseDuotone,
  folderOpen: PiFolderOpenDuotone,
  document: PiReadCvLogoDuotone,
  person: PiUserDuotone,
  brackets: PiBracketsCurlyDuotone,

  // Socials icons
  instagram: FaInstagram,
  github: FaGithub,
  linkedin: FaLinkedin,
  x: FaX,
  threads: FaThreads,
  email: FaEnvelope,
  whatsapp: FaWhatsapp,
  phone: FaPhone,

  rocket: PiRocketLaunchDuotone,
  gallery: PiImageDuotone,
  clipboard: PiClipboardDuotone,
  link: BiLink,
  view: MdOutlineViewInAr,
  arrowUpRight: HiArrowUpRight,
  arrowRight: HiArrowRight,
  arrowUpLeft: HiArrowUpLeft,
  arrowLeft: HiArrowLeft,
  globe: HiOutlineGlobeAsiaAustralia,
  grid: PiGridFourDuotone,
  book: PiBookBookmarkDuotone,
  openLink: HiOutlineLink,
  calendar: HiCalendarDays,
  discord: FaDiscord,
  eye: HiOutlineEye,
  eyeOff: HiOutlineEyeSlash,
  arrowUpRightFromSquare: HiArrowTopRightOnSquare,
  arrowDown: LuArrowDownToLine,
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;
