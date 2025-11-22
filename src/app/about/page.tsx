"use client";
import { person } from "@/assets/content";
import clsx from "clsx";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";
import React, { useRef, useState } from "react";

const AboutPage = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: sectionRef });
  // Initialize scroll to '0%' so server and client markup match
  const [scroll, setScroll] = useState("0%");
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScroll(`${Math.round(latest * 100)}%`);
  });

  return (
    <main className="flex flex-col md:grid md:grid-cols-[26%_60%_14%] p-2 sm:pt-28 gap-y-5 gap-x-1">
      <section className="col-span-1">
        <div className="flex flex-col p-1.5 gap-5">
          <div
            className={clsx([
              "flex h-36 w-28 sm:w-56 sm:h-72 rounded-2xl border border-secondary-800 self-center relative",
              "before:h-32 sm:before:w-52 sm:before:h-64 before:w-24 before:content-[''] before:rounded-2xl before:absolute",
              "before:-z-10 before:backdrop-blur-lg before:-left-1/2 before:translate-x-1/3 before:top-1/2 before:-translate-y-1/2 before:border before:border-secondary-700",
              "after:h-32 sm:after:w-52 sm:after:h-64 after:w-24 after:content-[''] after:rounded-2xl after:absolute",
              " after:-z-10 after:-right-1/2 after:backdrop-blur-lg after:-translate-x-1/3 after:top-1/2 after:-translate-y-1/2 after:border after:border-secondary-600",
            ])}
          >
            <Image
              src={"/photos/self-2.jpeg"}
              alt="portrait of Gilson Vicente"
              width={500}
              height={500}
              style={{
                borderRadius: "inherit",
              }}
              className="object-cover"
            />
          </div>
          <ul className="pl-0.5 text-xs flex flex-col gap-1.5 md:text-base text-secondary list-disc list-inside sm:self-center sm:items-center">
            <li className="keyValueLI">
              Name:
              <b className="liValue">{person.name}</b>
            </li>
            <li className="keyValueLI">
              Date of Birth:
              <b className="liValue">{person.birthDate}</b>
            </li>
            {Object.entries(person.info).map(([key, value], index) => (
              <li key={index} className="keyValueLI">
                {key}:<b className="liValue">{value}</b>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        ref={sectionRef}
        className="col-span-1 overflow-x-scroll overflow-y-hidden md:overflow-y-scroll md:overflow-x-hidden md:h-[75dvh] flex md:flex-col gap-10 text-center md:pt-16 pb-16 md:pb-32 px-2"
      >
        <h1 className=" flex flex-col text-xl font-semibold text-primary self-center mb-20">
          <b className="text-6xl font-bold ">Gilson Vicente:</b> Shaping
          Tomorrow&apos;s Technology with Scalable, Elegant Software Solutions
        </h1>
        <div className="w-dvw shrink-0 md:w-2/3 flex flex-col gap-5 self-start">
          <h2 className={"subtitle appearTop md:appearLeft"}>My Story & Journey</h2>
          <p className="paragraph appearTop md:appearLeft">
            My passion for technology began in my final year of high school,
            where I was introduced to the fundamentals of programming through
            Pascal in my TIC&apos;s class.
          </p>
          <p className="paragraph appearTop md:appearLeft">
            This initial exposure sparked a curiosity that quickly grew into a
            deep fascination. During the transitional period between high school
            and college, I immersed myself in Python, captivated by its
            versatility and the endless possibilities it offered for creative
            problem-solving.
          </p>
          <p className="paragraph appearTop md:appearLeft">
            Programming soon became more than just a skill—it became my way of
            thinking. I thrive on the challenge of breaking down complex
            problems and crafting clear, efficient solutions through code. This
            mindset has become the cornerstone of my approach to software
            development.
          </p>
        </div>
        <div className="w-dvw shrink-0 md:w-1/2 flex flex-col gap-5 self-end">
          <h2 className={"subtitle appearBottom md:appearRight"}>My Expertise</h2>
          <p className="paragraph appearBottom md:appearRight">
            Over the years, I have gained practical experience across the full
            spectrum of software development, including frontend, backend, and
            mobile platforms.
          </p>
          <p className="paragraph appearBottom md:appearRight">
            While I value the unique challenges each area presents, I am
            especially passionate about frontend and mobile development. I excel
            at transforming intricate concepts into intuitive, visually
            compelling user interfaces that elevate the overall user experience.
          </p>
          <p className="paragraph appearBottom md:appearRight">
            My work is driven by a commitment to both functionality and
            aesthetics, ensuring that every solution I create is not only robust
            and reliable but also engaging and user-friendly. I am always eager
            to explore new technologies and methodologies, continuously refining
            my craft to stay at the forefront of the industry.
          </p>
        </div>
        <div className="w-dvw shrink-0 md:w-3/4 flex flex-col gap-5 self-center">
          <h2 className={"subtitle appearBottom"}>What I&apos;m Looking For</h2>
          <p className="paragraph appearBottom">
            As a dedicated college student, I am actively seeking remote
            freelance opportunities that offer flexibility and the chance to
            collaborate with talented professionals from around the world.
          </p>
          <p className="paragraph appearBottom">
            I am open to a wide variety of projects, from mdall-scale
            applications to ambitious, large-scale systems. My ideal role would
            allow me to contribute meaningfully to a dynamic team, tackle
            challenging problems, and further develop my skills in a real-world
            setting.
          </p>
          <p className="paragraph appearBottom">
            I am particularly excited by the prospect of working on impactful
            projects that push the boundaries of what technology can achieve.
          </p>
        </div>
        <div className="w-dvw shrink-0 md:w-1/2 flex flex-col gap-5 self-end">
          <h2 className={"subtitle appearBottom md:appearRight"}>Education & Background</h2>
          <ul className="list-disc list-inside  flex flex-col  gap-3">
            <li className="flex flex-col appearBottom md:appearRight">
              <b>2011-2017: </b>1st-7th grade at Colegio Nyamunda
            </li>
            <li className="flex flex-col appearBottom md:appearRight">
              <b>2018-2022: </b> 8th-12th grade at Colegio Kitabu
            </li>
            <li className="flex flex-col appearBottom md:appearRight">
              <b>Currently: </b> 3rd year Engineering and Computer Science
              student at ISUTC.
            </li>
          </ul>
        </div>
      </section>

      <section className="hidden col-span-1 md:flex flex-col p-2 gap-5">
        <h2 className="text-lg text-center">
          Find out a little more about me:
        </h2>
        <motion.div
          className="self-center font-bold text-primary-100 w-16 h-16 bg-primary-900 flex rounded-full circle relative transitions items-center justify-center"
          style={
            {
              "--fill": scroll,
            } as React.CSSProperties
          }
        >
          {scroll}
        </motion.div>
      </section>
    </main>
  );
};

export default AboutPage;
