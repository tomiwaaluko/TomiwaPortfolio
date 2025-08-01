"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "DigiConvo",
    description:
      "Built an AI-powered conversation practice platform using Next.js, TypeScript, and Google Gemini AI to help users develop emotional intelligence through realistic dialogue scenarios with real-time emotion analysis and voice integration.",
    image: "/images/projects/digiconvo.PNG",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/tomiwaaluko/digiconvo",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "New ePortfolio Website",
    description:
      "Built a modern, responsive portfolio website using Next.js, React, and Tailwind CSS featuring interactive sections, smooth animations with Framer Motion, contact functionality with Resend API, and dynamic project showcases. Includes tabbed navigation for skills/education, email integration, and optimized performance with server-side rendering.",
    image: "/images/projects/ePortfolio.PNG",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/tomiwaaluko/TomiwaPortfolio",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Fisch Macro",
    description:
      "A software for automatic clicking within ROBLOX's Fisch game. Made with Python.",
    image: "/images/projects/fisch.PNG",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/tomiwaaluko/Fisch-Macro",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Xi Iota Chapter Website",
    description:
      "Developed the official website for the Xi Iota Chapter of Alpha Phi Alpha Fraternity, Inc. at UCF using React, TypeScript, and Tailwind CSS. Features chapter history, leadership profiles, Miss Black & Gold pageant information, and community service initiatives with modern animations and responsive design.",
    image: "/images/projects/xiiota.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/tomiwaaluko/xi-iota-beacon-site",
    previewUrl: "https://xi-iota-beacon-site.vercel.app/",
  },
  {
    id: 5,
    title: "Basic ePortfolio Website",
    description: "An ePortfolio website built with HTML and CSS.",
    image: "/images/projects/htmlportfolio.PNG",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/tomiwaaluko/tomiwaaluko.github.io",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Coming Soon",
    description: "",
    image: "/images/projects/comingsoon.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectSection;

/*
        <button className="rounded-full border-2 border-amber-500 px-6 py-3 text-xl cursor-pointer">
          All
        </button>
        <button className="rounded-full border-2 border-slate-600 hover:border-white px-6 py-3 text-xl cursor-pointer">
          Web
        </button>
*/
