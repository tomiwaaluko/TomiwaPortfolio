"use client";

export const smoothScrollTo = (elementId) => {
  const id = elementId.startsWith("#") ? elementId.substring(1) : elementId;

  const element = document.getElementById(id);

  if (element) {
    const navbar = document.querySelector("nav");
    const navbarHeight = navbar ? navbar.offsetHeight : 0;

    const elementPosition =
      element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - navbarHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};
