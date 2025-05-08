"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
  hover: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, tabKey, children }) => {
  const [isHovered, setIsHovered] = useState(false);
  const buttonClasses = active ? "text-white" : "text-[#ADB7BE]";

  return (
    <button
      onClick={() => selectTab(tabKey)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : isHovered ? "hover" : "default"}
        variants={variants}
        className={`h-1 mt-0.5 mr-3 ${
          active ? "bg-primary-500" : "bg-amber-500"
        }`}
        transition={{ duration: 0.2 }}
        initial={false}
      ></motion.div>
    </button>
  );
};

export default TabButton;
