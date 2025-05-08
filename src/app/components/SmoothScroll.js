"use client";

export const smoothScrollTo = (elementId) => {
  // Remove the # from the elementId if present
  const id = elementId.startsWith("#") ? elementId.substring(1) : elementId;

  // Find the element
  const element = document.getElementById(id);

  if (element) {
    // Get any navbar height to offset the scrolling
    const navbar = document.querySelector("nav");
    const navbarHeight = navbar ? navbar.offsetHeight : 0;

    // Calculate the position to scroll to (element position - navbar height)
    const elementPosition =
      element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - navbarHeight;

    // Perform the smooth scroll
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};
