import Link from "next/link";
import { smoothScrollTo } from "./SmoothScroll";

const NavLink = ({ href, title, compact }) => {
  const handleClick = (e) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      smoothScrollTo(href);
    }
  };

  return (
    <div className={`relative group w-full ${compact ? "py-1" : "py-2"}`}>
      <a
        href={href}
        onClick={handleClick}
        className={`block ${
          compact ? "py-2 px-4 text-base" : "py-3 px-6 text-xl"
        } text-white font-medium relative z-10 group-hover:text-black`}
      >
        {title}
      </a>
      <div className="absolute inset-0 bg-amber-500 rounded-md scale-0 group-hover:scale-110 transition-transform duration-200 origin-center -z-0"></div>
    </div>
  );
};

export default NavLink;
