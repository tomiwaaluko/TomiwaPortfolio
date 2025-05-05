"use client";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import React from "react";

export const AnimatedButton = ({ isMenuOpen, setIsMenuOpen, isScrolled }) => (
  <motion.button
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: isScrolled ? 1 : 0, scale: isScrolled ? 1 : 0.8 }}
    transition={{ duration: 0.3 }}
    className={`fixed top-4 right-6 z-50 text-white text-3xl md:hidden`}
    onClick={() => setIsMenuOpen(!isMenuOpen)}
  >
    {isMenuOpen ? <FiX /> : <FiMenu />}
  </motion.button>
);

export const AnimatedMenu = ({ isMenuOpen, tabs, handleScrollToSection }) => (
  <AnimatePresence>
    {isMenuOpen && (
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        className="fixed top-12 right-6 bg-black text-white flex flex-col items-center space-y-4 py-4 px-6 rounded-lg shadow-lg"
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleScrollToSection(tab.id)}
            className="text-white text-lg hover:text-orange-400 transition"
          >
            {tab.name}
          </button>
        ))}
      </motion.div>
    )}
  </AnimatePresence>
);

export const AnimatedNav = ({
  isScrolled,
  tabs,
  activeTab,
  handleScrollToSection,
}) => (
  <motion.nav
    initial={{ y: 0, opacity: 1 }}
    animate={{
      y: isScrolled ? -100 : 0,
      opacity: isScrolled ? 0 : 1,
      pointerEvents: isScrolled ? "none" : "auto",
    }}
    transition={{ type: "spring", stiffness: 300, damping: 30 }}
    className={`fixed top-0 left-0 w-full z-50 bg-black shadow-md transition-all duration-300 ${
      isScrolled ? "invisible" : "visible"
    }`}
  >
    {/* Content as in the original navbar */}
    <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
      <h1 className="text-white text-2xl font-bold">Tomiwa</h1>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="hidden md:flex space-x-6"
      >
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className="relative cursor-pointer px-4 py-2 text-lg font-medium"
            onClick={() => handleScrollToSection(tab.id)}
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-primary-500 rounded-lg"
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
              />
            )}
            <span className="relative z-10 text-white">{tab.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  </motion.nav>
);
