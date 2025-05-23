"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  const handleHireMeClick = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const handleDownload = () => {
    // Create a link to the resume file
    const link = document.createElement("a");
    link.href = "/assets/Olatomiwa_Aluko_Resume.pdf";
    link.download = "Olatomiwa_Aluko_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-7 place-self-center text-center sm:text-left"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-800">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Tomiwa",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "CpE Student",
                1000,
                "Web Developer",
                1000,
                "Aspiring Software Engineer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            I&apos;m a tech enthusiast and aspiring to become a software
            engineer. I love to build things and solve problems. I&apos;m
            passionate about web development, cloud computing, and machine
            learning. I&apos;m always eager to learn new technologies and
            improve my skills. I&apos;m currently looking for opportunities to
            work on exciting projects and collaborate with amazing people.
          </p>
          <div>
            <Link
              href="/#contact"
              onClick={handleHireMeClick}
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-amber-700 via-orange-400 to-orange-300 hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
            <button
              onClick={handleDownload}
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-amber-700 via-orange-400 to-orange-300 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download Resume
              </span>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-5 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
