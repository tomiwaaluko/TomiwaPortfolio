"use client";
import React, { useState, useEffect } from "react";

// Custom implementation to replace the missing react-animated-numbers package
const AnimatedCounter = ({ value, className }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const animationDuration = 2000; // 2 seconds
    const frameDuration = 1000 / 60; // 60fps
    const totalFrames = Math.round(animationDuration / frameDuration);
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const currentCount = Math.round(value * Math.min(progress, 1));

      setCount(currentCount);

      if (frame === totalFrames) {
        clearInterval(counter);
      }
    }, frameDuration);

    return () => clearInterval(counter);
  }, [value]);

  return <span className={className}>{count}</span>;
};

const achievementsList = [
  {
    metric: "Credit hours",
    value: "100",
    postfix: "+",
  },
  {
    prefix: "~",
    metric: "Projects",
    value: "3",
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
            key={`achievement_${index}`}
            className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
          >
            <h2 className="text-white text-4xl font-bold flex flex-row">
              {achievement.prefix}
              <AnimatedCounter
                value={parseInt(achievement.value, 10)}
                className="text-white text-4xl font-bold"
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
