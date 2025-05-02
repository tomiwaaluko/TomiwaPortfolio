import React, { useState, useEffect } from "react";
import {
  CodeBracketIcon,
  EyeIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
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
