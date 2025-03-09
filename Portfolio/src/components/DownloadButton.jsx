import React from "react";


const DownloadButton = () => {
    return (
      <button
        onClick={() => {
          window.location.href = "/CV.pdf";
        }}
        className="p-3 bg-gradient-to-r to-emerald-600 from-sky-400  text-white rounded-lg hover:bg-blue-700 "
      >
        Download My CV Here!
      </button>
    );
  };
  
  export default DownloadButton;