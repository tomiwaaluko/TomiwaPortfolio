"use client";
import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList = [
  {
    metric: "Credit hours",
    value: "100",
    postfix: "+",
  },
  {
    prefix: "~",
    metric: "Projects",
    value: "100",
  },
  {
    metric: "Awards",
    value: "7",
  },
  {
    metric: "Year",
    value: "3",
  },
];

const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => (
          <div
            key={`achievement_${index}`} // Ensure a unique key for each item
            className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
          >
            <h2 className="text-white text-4xl font-bold flex flex-row">
              {achievement.prefix}
              <AnimatedNumbers
                key={`animated_number_${achievement.metric}`} // Unique key for AnimatedNumbers
                includeComma
                animateToNumber={parseInt(achievement.value, 10)}
                locale="en-US"
                className="text-white text-4xl font-bold"
                configs={(_, i) => ({
                  mass: 1,
                  friction: 100,
                  tensions: 140 * (i + 1),
                })}
              />
              {achievement.postfix}
            </h2>
            <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;
