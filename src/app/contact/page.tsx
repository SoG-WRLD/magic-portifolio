import { ButtonType } from "@/assets/assets";
import { contacts } from "@/assets/content";
import { iconLibrary } from "@/assets/icons";
import Button from "@/components/Button";
import clsx from "clsx";
import React from "react";

const ContactPage = () => {
  const contactMethods = contacts;
  return (
    <main className="sm:mt-28">
      <ul className="flex flex-col gap-5 p-3">
        {contactMethods.map((contact, index) => (
          <li
            key={index}
            className={clsx([
              "grid rounded-3xl grid-rows-3 text-nowrap gap-1 p-2 sm:p-4 px-5 shadow-md shadow-shadow/50 justify-between group overflow-hidden",
              "backdrop-blur-xl bg-gradient-to-tr from-primary-800/50 from-50% to-surface-900/50 border border-primary-800",
              "transitions hover:border-primary-600 hover:scale-[1.01]",
            ])}
          >
            <div className="flex justify-between col-start-1">
              <h2 className="text-xl sm:text-2xl font-semibold text-primary-300">
                {contact.name}:
              </h2>
            </div>
            <p className="pl-2 text-base sm:text-xl col-start-1">
              {contact.content}
            </p>
            <div className="flex gap-2 items-center col-start-1">
              <a href={contact.href}>
                <Button icon="link" label="Check" type={ButtonType.primary} />
              </a>
              <Button
                type={ButtonType.secondary}
                label="Copy"
                icon="clipboard"
              />
            </div>
            <div className="transitions w-fit h-full flex items-center col-start-2 row-span-full opacity-30 translate-x-1/2 group-hover:opacity-100 group-hover:translate-0">
              {React.createElement(iconLibrary[contact.icon], {
                className: "text-8xl sm:text-9xl",
              })}
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default ContactPage;
