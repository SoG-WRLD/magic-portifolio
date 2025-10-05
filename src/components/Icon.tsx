import { iconLibrary } from "@/assets/icons";
import React from "react";

interface IconProps {
  name: string;
  className?: string;
}
const Icon = ({ name, className }: IconProps) => {
  if (iconLibrary[name] === undefined) return <div>{name}</div>;
  return React.createElement(iconLibrary[name], {
    className,
    suppressHydrationWarning: true,
  });
};

export default Icon;
