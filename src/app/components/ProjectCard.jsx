import React, { useState, useEffect } from "react";
// Replace the Heroicons import with an alternative approach
// Instead of:
// import { CodeBracketIcon, EyeIcon, XMarkIcon } from "@heroicons/react/24/outline";

// Define simple icon components directly
const CodeBracketIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
    />
  </svg>
);

const EyeIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

const XMarkIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  const [isImageExpanded, setIsImageExpanded] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalAnimation, setModalAnimation] = useState(false);

  // Handle modal visibility and animations
  useEffect(() => {
    if (isImageExpanded) {
      // First show the modal with initial state
      setShowModal(true);
      // Then trigger the animation after a small delay
      setTimeout(() => setModalAnimation(true), 10);
    } else {
      // First remove the animation
      setModalAnimation(false);
      // Then remove the modal after animation completes
      setTimeout(() => setShowModal(false), 300);
    }
  }, [isImageExpanded]);

  // Function to handle opening modal with animation
  const handleOpenModal = () => {
    setIsImageExpanded(true);
  };

  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          <Link
            href={gitUrl || "/"}
            target="_blank"
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white"></CodeBracketIcon>
          </Link>
          <button
            onClick={handleOpenModal}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white"></EyeIcon>
          </button>
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
        <h5 className="txt-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>

      {/* Image Expansion Modal */}
      {showModal && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-all duration-300 ${
            modalAnimation ? "bg-opacity-75" : "bg-opacity-0"
          }`}
          onClick={() => setIsImageExpanded(false)}
        >
          <div
            className={`relative max-w-4xl max-h-[90vh] overflow-hidden rounded-lg transition-all duration-300 ${
              modalAnimation ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          >
            <button
              className="absolute top-4 right-4 bg-white rounded-full p-1 hover:bg-gray-200 transition duration-300"
              onClick={(e) => {
                e.stopPropagation();
                setIsImageExpanded(false);
              }}
            >
              <XMarkIcon className="h-6 w-6 text-black" />
            </button>
            <img
              src={imgUrl}
              alt={title}
              className="max-h-[85vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <div
              className={`absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4 transition-all duration-300 ${
                modalAnimation ? "translate-y-0" : "translate-y-full"
              }`}
            >
              <h3 className="font-bold text-xl">{title}</h3>
              <p className="text-sm text-gray-300">{description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
