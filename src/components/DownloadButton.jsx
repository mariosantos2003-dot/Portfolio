import React from "react";

const DownloadButton = ({ text = "Download CV" }) => {
  return (
    <a
      href="/CV.pdf"
      download
      className="inline-flex items-center px-5 py-3 mt-2 sm:mt-0 rounded-lg bg-accent-purple hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:scale-105"
    >
      <span className="text-white text-lg font-medium">{text}</span>
      <svg
        className="w-5 h-5 ml-2 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
        ></path>
      </svg>
    </a>
  );
};

export default DownloadButton;