import { skillSet } from "@/assets/content";
import Image from "next/image";
import React from "react";

interface RatingProps {
  count: number; // The total number of circles
  filledCount: number; // The number of circles to have a background (n)
}

const Rating = ({ count, filledCount }: RatingProps) => {
  const rating = Array.from({ length: count }, (_, index) => {
    // Check if the current circle's index is less than 'filledCount'
    const isFilled = index < filledCount;
    const circleClassName = `w-4 h-2 border border-surface-200 rounded-md ${
      isFilled ? "bg-surface-200" : ""
    }`;

    return <div key={index} className={circleClassName} />;
  });

  return <div className="flex gap-0.5 sm:gap-1.5 items-center">{rating}</div>;
};

const SkillsPage = () => {
  return (
    <main className="sm:pt-28 p-2">
      <ul className="flex flex-col gap-3 sm:gap-10">
        {skillSet.map((skillGroup, index) => (
          <li key={index} className="flex flex-col gap-1.5">
            <h1 className="title">{skillGroup.name}</h1>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-1.5 sm:gap-5">
              {skillGroup.skills.map((skill, innerIndex) => (
                <li
                  key={innerIndex}
                  className="flex gap-1 sm:gap-2 items-center backdrop-blur-lg bg-surface-900/20 rounded-3xl shadow-sm shadow-black/50"
                >
                  <Image
                    src={skill.logoPath}
                    alt={skill.title}
                    width={512}
                    height={512}
                    className="w-16 sm:w-20 h-16 sm:h-20 p-2 sm:p-3 object-contain"
                    style={{
                      borderRadius: 0,
                    }}
                  />
                  <div className="flex flex-col items-start justify-evenly h-full">
                    <h2 className="text-base sm:text-xl text-nowrap overflow-ellipsis font-medium text-primary-200 text-center leading-5">
                      {skill.title}
                    </h2>
                    <Rating count={5} filledCount={skill.proficiency} />
                  </div>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default SkillsPage;
