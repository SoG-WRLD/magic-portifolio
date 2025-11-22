"use client";
import { ButtonType } from "@/assets/assets";
import { skillSet } from "@/assets/content";
import Button from "@/components/Button";
import Carousel from "@/components/Carousel";
import clsx from "clsx";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

const Home = () => {
  const stackAreaRef = useRef<HTMLUListElement>(null);
  const cardRefs = useRef<(HTMLLIElement | null)[]>([]);
  const someSkills = [
    skillSet[0].skills[2], // TypeScript
    skillSet[1].skills[1], // Next.js
    skillSet[1].skills[5], // TailwindCSS
  ];
 
  const cards = [
    {
      label: "Get to know me",
      content: (
        <p className="text-justify sm:text-lg">
          I&apos;m a passionate developer with focus in creating dynamic and
          responsive web applications. I love building user-friendly interfaces
          and efficient back-end systems.{" "}
          <Link
            href={"/about"}
            className="text-primary-300 underline visited:text-primary-500"
          >
            Learn more.
          </Link>
        </p>
      ),
    },
    {
      label: "Some of my skills",
      content: (
        <ul className="flex flex-col gap-2 sm:text-2xl">
          {someSkills.map((skill, index) => (
            <li key={index} className="flex gap-1.5 items-center">
              <Image
                src={skill.logoPath}
                alt={skill.title}
                width={120}
                height={120}
                className="h-6 w-8"
              />
              <p className="font-semibold">{skill.title}</p>
            </li>
          ))}
          <li>
            <Link
              href={"/skills"}
              className="text-primary-300 underline visited:text-primary-500"
            >
              view more
            </Link>
          </li>
        </ul>
      ),
    },
    {
      label: "Explore my projects",
      content: (
        <p className="text-justify sm:text-lg">
          I have worked on various projects ranging from web applications to
          mobile apps. Check out my{" "}
          <Link
            href={"/projects"}
            className="text-primary-300 underline visited:text-primary-500"
          >
            projects page
          </Link>{" "}
          to see some of my work.
        </p>
      ),
    },
    {
      label: "Let's connect!",
      content: (
        <p className="text-justify sm:text-lg">
          I&apos;m always open to new opportunities and collaborations. Feel
          free to reach out to me through my{" "}
          <Link
            href={"/contact"}
            className="text-primary-300 underline visited:text-primary-500"
          >
            contact page.
          </Link>
        </p>
      ),
    },
  ];
  const [topCard, setTopCard] = React.useState<number>(0);

  const handleDrag = (
    _: MouseEvent,
    info: { offset: { x: number; y: number } }
  ) => {
    const card = cardRefs.current[topCard];
    if (!card) return;

    try {
      const offsetX = info.offset.x; // Get the offset from Framer Motion
      // Screen edges
      const edges = {
        left: -100,
        right: 100,
      };

      // Check if card hitbox hits the screen edges
      if (offsetX <= edges.left || offsetX >= edges.right) {
        setTopCard((prevTopCard) => (prevTopCard + 1) % cards.length);
      }
    } catch (error) {
      console.error("Error found: ", error);
      return;
    }
  };

  return (
    <main className="relative flex flex-col">
      <section className="relative h-88 sm:h-[25rem] autoShow w-full flex flex-col">
        <Carousel />
        <Link href={"/projects"} className="flex w-full justify-center">
          <Button
            type={ButtonType.primary}
            label="Check projects"
            icon="view"
            className="self-center  sm:text-2xl! py-1! sm:py-2! place-self-center"
          />
        </Link>
      </section>
      <section className="relative my-5 sm:my-10">
        <h1
          className={clsx([
            "flex flex-col text-3xl sm:text-5xl font-bold text-center text-primary-200",
            "autoShow",
          ])}
        >
          <b
            className="text-5xl sm:text-8xl! font-black text-transparent font-ica drop-shadow-sm drop-shadow-transparent sm:drop-shadow-primary-400"
            style={{
              WebkitTextStroke: "2px var(--primary-400)",
            }}
          >
            Gilson Vicente,
          </b>
          Web developer
        </h1>
      </section>
      <section className="grid auto-cols-auto">
        <ul
          className="flex justify-center relative h-80 sm:h-96 w-full"
          ref={stackAreaRef}
        >
          {cards.map((card, index) => (
            <motion.li
              key={index}
              ref={(el) => {
                cardRefs.current[index] = el;
                }}
                className={clsx([
                `absolute inset-1/2 -translate-1/2 transitions`,
                "flex flex-col gap-2 px-3 py-4.5 border rounded-2xl w-64 h-60 sm:w-80 sm:h-72 backdrop-blur-2xl",
                ])}
                style={{
                rotate: ((index - topCard + cards.length) % cards.length) * 10,
                zIndex:
                  cards.length -
                  (index - topCard >= 0
                  ? index - topCard
                  : cards.length + (index - topCard)),
                }}
                drag={index === topCard ? "x" : undefined}
                onDragEnd={handleDrag}
                dragElastic={0.5}
                dragTransition={{
                  power:1,
                  min: 100
                }}
                dragSnapToOrigin
                whileDrag={{
                scale: 0.95,
                }}
              >
              <h2 className="text-2xl sm:text-3xl font-semibold">
                {card.label}
              </h2>
              <span className="my-auto">{card.content}</span>
            </motion.li>
          ))}
        </ul>
      </section>
      <section>{/* Some  stuff about me, photo */}</section>
    </main>
  );
};

export default Home;
