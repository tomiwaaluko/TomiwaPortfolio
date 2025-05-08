import React from "react";
import NavLink from "./NavLink";
import { XMarkIcon } from "@heroicons/react/24/solid";

const MenuOverlay = ({ links, handleLinkClick, closeMenu }) => {
  return (
    <div className="bg-black px-6 py-4 rounded-lg w-64 relative">
      <button onClick={closeMenu} className="absolute top-3 right-3 text-white">
        <XMarkIcon className="h-5 w-5" />
      </button>
      <ul className="flex flex-col items-center gap-2 pt-2">
        {links.map((link, index) => (
          <li key={index} className="w-full text-center">
            <NavLink href={link.path} title={link.title} compact={true} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuOverlay;
