import { buttonStyle, ButtonType } from "@/assets/assets";
import { iconLibrary, IconName } from "@/assets/icons";
import clsx from "clsx";
import React from "react";
import Icon from "./Icon";

interface ButtonProps {
  label?: string;
  icon?: IconName;
  type: ButtonType;
  className?: string;
  style?: React.CSSProperties;
  props?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}
const Button = ({
  label,
  icon,
  type,
  style,
  className,
  props,
}: ButtonProps) => {
  const buttonStyles = buttonStyle[type];
  return (
    <button
      className={clsx([
        buttonStyles,
        className,
        "transitions duration-300! border rounded-3xl py-px sm:text-lg h-fit w-fit flex gap-1.5 items-center text-base text-nowrap cursor-pointer hover:scale-105 capitalize backdrop-blur-sm",
        "shadow-sm shadow-black/50",
      ])}
      style={style}
      {...props}
    >
      {label && <span>{label}</span>}
      {icon && <Icon name={icon} />}
    </button>
  );
};

export default Button;
