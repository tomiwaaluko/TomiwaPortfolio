"use client";
import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, tabKey, children }) => {
  const buttonClasses = active ? "text-white" : "text-[#ADB7BE]";

  return (
    <button onClick={() => selectTab(tabKey)}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className={`h-1 mt-0.5 mr-3 bg-amber-500`}
        transition={{ duration: 0.2 }}
        initial={false}
      ></motion.div>
    </button>
  );
};

export default TabButton;
