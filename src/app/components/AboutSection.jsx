"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="space-y-4">
        <div className="bg-gray-900 p-3 rounded-lg hover:shadow-md hover:shadow-amber-500/30 transition-all">
          <p className="font-bold text-amber-400 mb-2 border-b border-amber-700 pb-1 text-lg">
            Languages
          </p>
          <ul className="grid grid-cols-2 gap-x-2 gap-y-1 text-base">
            <li className="flex items-center">
              <span className="text-amber-400 mr-2">⟫</span>Java
            </li>
            <li className="flex items-center">
              <span className="text-amber-400 mr-2">⟫</span>HTML
            </li>
            <li className="flex items-center">
              <span className="text-amber-400 mr-2">⟫</span>Python
            </li>
            <li className="flex items-center">
              <span className="text-amber-400 mr-2">⟫</span>CSS
            </li>
            <li className="flex items-center">
              <span className="text-amber-400 mr-2">⟫</span>C/C++
            </li>
            <li className="flex items-center">
              <span className="text-amber-400 mr-2">⟫</span>JavaScript
            </li>
          </ul>
        </div>

        <div className="bg-gray-900 p-3 rounded-lg hover:shadow-md hover:shadow-amber-500/30 transition-all">
          <p className="font-bold text-amber-400 mb-2 border-b border-amber-700 pb-1 text-lg">
            Frameworks & Libraries
          </p>
          <ul className="grid grid-cols-2 gap-x-2 gap-y-1 text-base">
            <li className="flex items-center">
              <span className="text-yellow-400 mr-2">⟫</span>React.JS
            </li>
            <li className="flex items-center">
              <span className="text-yellow-400 mr-2">⟫</span>Next.JS
            </li>
            <li className="flex items-center">
              <span className="text-yellow-400 mr-2">⟫</span>Tkinter
            </li>
          </ul>
        </div>

        <div className="bg-gray-900 p-3 rounded-lg hover:shadow-md hover:shadow-amber-500/30 transition-all">
          <p className="font-bold text-amber-400 mb-2 border-b border-amber-700 pb-1 text-lg">
            Developer Tools
          </p>
          <ul className="grid grid-cols-2 gap-x-2 gap-y-1 text-base">
            <li className="flex items-center">
              <span className="text-amber-400 mr-2">⟫</span>GitHub
            </li>
            <li className="flex items-center">
              <span className="text-amber-400 mr-2">⟫</span>Pynput
            </li>
            <li className="flex items-center">
              <span className="text-amber-400 mr-2">⟫</span>Keyboard
            </li>
            <li className="flex items-center">
              <span className="text-amber-400 mr-2">⟫</span>Threading
            </li>
            <li className="flex items-center">
              <span className="text-amber-400 mr-2">⟫</span>SolidWorks
            </li>
            <li className="flex items-center">
              <span className="text-amber-400 mr-2">⟫</span>Microsoft 365
            </li>
            <li className="flex items-center">
              <span className="text-amber-400 mr-2">⟫</span>Adobe CC
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div className="bg-gray-900 p-4 rounded-lg hover:shadow-md hover:shadow-amber-500/30 transition-all">
        <h3 className="text-yellow-500 font-bold text-xl mb-2">
          Academic Journey
        </h3>
        <ul className="space-y-2 text-base">
          <li className="flex items-start">
            <span className="text-amber-400 mr-2"> </span>
            <div>
              <strong className="text-yellow-300">Major: </strong>
              <span className="text-white">Computer Engineering</span>
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-amber-400 mr-2"> </span>
            <div>
              <strong className="text-yellow-300">Minor: </strong>
              <span className="text-white">Technology Entrepreneurship</span>
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-amber-400 mr-2"> </span>
            <div>
              <strong className="text-yellow-300">School: </strong>
              <span className="text-white">University of Central Florida</span>
            </div>
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <div className="bg-gray-900 p-4 rounded-lg hover:shadow-md hover:shadow-amber-500/30 transition-all">
        <h3 className="text-amber-400 font-bold text-xl mb-2">
          Certifications
        </h3>
        <p className="italic text-gray-400 text-base">
          Coming soon! Currently focusing on building practical experience.
        </p>
      </div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/desktop.png"
          width={750}
          height={750}
          alt="Desktop"
          className="mx-auto"
        />
        <div className="text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a dedicated Computer Engineering student at the University of
            Central Florida with expertise in Java, C programming, HTML, CSS,
            and JavaScript, complemented by experience with frameworks like
            ReactJS. I have a strong background in developing scalable
            applications, such as automating tuition calculations using advanced
            data structures, and crafting user-friendly interfaces to enhance
            administrative efficiency. My skills extend to SolidWorks for
            design, computer hardware building, and optimizing workflows with
            tools like Microsoft Excel and JavaScript automation scripts.
            Passionate about problem-solving, I actively apply my technical
            abilities to build innovative solutions and teach others through
            workshops and mentoring.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
              tabKey="skills"
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
              tabKey="education"
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
              tabKey="certifications"
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

// Old code:
/*
"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Java</li>
        <li>C Programming</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>ReactJS</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Computer Engineering</li>
        <li>University of Central Florida</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>None currently</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="text-white">
      <div className="md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/desktop.png"
          width={500}
          height={500}
          alt="Desktop"
        />
        <div className="mt-4 md:mt:-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a dedicated Computer Engineering student at the University of
            Central Florida with expertise in Java, C programming, HTML, CSS,
            and JavaScript, complemented by experience with frameworks like
            ReactJS. I have a strong background in developing scalable
            applications, such as automating tuition calculations using advanced
            data structures, and crafting user-friendly interfaces to enhance
            administrative efficiency. My skills extend to SolidWorks for
            design, computer hardware building, and optimizing workflows with
            tools like Microsoft Excel and JavaScript automation scripts.
            Passionate about problem-solving, I actively apply my technical
            abilities to build innovative solutions and teach others through
            workshops and mentoring.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

*/
