"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi"; // Importing icons for the hamburger menu

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("about");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const tabs = [
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  // Detect scroll to toggle between full navbar and hamburger menu
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToSection = (id) => {
    setActiveTab(id);
    setIsMenuOpen(false);
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 50,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Full Navbar - Transitions out when scrolling down on large screens only */}
      <motion.nav
        initial={{ y: 0, opacity: 1 }}
        animate={{ y: isScrolled ? -100 : 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed top-0 left-0 w-full z-50 bg-black shadow-md transition-all duration-300"
      >
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          {/* Logo or Title */}
          <h1 className="text-white text-2xl font-bold">Tomiwa</h1>

          {/* Desktop navigation */}
          <div className="hidden md:flex space-x-6">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className="relative cursor-pointer px-4 py-2 text-lg font-medium group"
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
                <span className="relative z-10 text-white group-hover:text-black">
                  {tab.name}
                </span>
                <span className="absolute inset-0 rounded-lg bg-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
              </div>
            ))}
          </div>

          {/* Mobile hamburger button (always visible on small screens) */}
          <button
            className="md:hidden text-white text-3xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </motion.nav>

      {/* Fixed Hamburger Icon - Only appears when scrolled on large screens */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: isScrolled ? 1 : 0, scale: isScrolled ? 1 : 0.8 }}
        transition={{ duration: 0.3 }}
        className={`fixed top-4 right-6 z-50 text-white text-3xl hidden md:block`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <FiX /> : <FiMenu />}
      </motion.button>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="fixed top-16 right-4 bg-black text-white flex flex-col items-center space-y-4 py-4 px-6 rounded-lg shadow-lg z-50"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleScrollToSection(tab.id)}
                className="text-white text-lg hover:text-black hover:bg-amber-500 transition-colors duration-300 px-4 py-2 rounded-lg w-full"
              >
                {tab.name}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

/* Old Style

"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl text-white font-semibold"
        >
          LOGO
        </Link>
        <div className="mobile-menu block md:hidden">
          {navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(false)} // Corrected logic
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(true)} // Corrected logic
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen && <MenuOverlay links={navLinks} />}
    </nav>
  );
};

export default Navbar;
*/
