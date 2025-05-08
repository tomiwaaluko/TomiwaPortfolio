"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import { Bars3Icon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import { smoothScrollTo } from "./SmoothScroll";

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
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      // Set visible based on scroll direction
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const handleNavLinkClick = (e, path) => {
    e.preventDefault();
    if (path.startsWith("#")) {
      smoothScrollTo(path);
      // Close mobile menu if it's open
      if (navbarOpen) setNavbarOpen(false);
    }
  };

  const closeMenu = () => {
    setNavbarOpen(false);
  };

  return (
    <nav
      className={`fixed w-full top-0 left-0 right-0 z-10 bg-black transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link href={"/"} className="text-2xl text-white font-semibold ml-12">
          Tomiwa&apos;s Portfolio
        </Link>
        <div className="mobile-menu block md:hidden">
          <button onClick={() => setNavbarOpen(true)} className="text-white">
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>
        <div className="hidden md:block mr-12">
          <ul className="flex items-center space-x-12">
            {navLinks.map((link, index) => (
              <li key={index} className="relative group">
                <a
                  href={link.path}
                  onClick={(e) => handleNavLinkClick(e, link.path)}
                  className="text-white font-medium text-lg px-3 py-2 relative z-10 group-hover:text-black cursor-pointer"
                >
                  {link.title}
                </a>
                <div className="absolute inset-0 bg-amber-500 rounded-md scale-0 group-hover:scale-125 transition-transform duration-200 origin-center -z-0"></div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen && (
        <div className="fixed top-0 right-0 p-4 z-50">
          <MenuOverlay
            links={navLinks}
            handleLinkClick={handleNavLinkClick}
            closeMenu={closeMenu}
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
