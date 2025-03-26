import React from "react";

const ProgressBar = ({ progress }) => {
  return (
    <div className="w-full bg-gray-200 rounded mt-4">
      <div className="bg-pink-500 text-xs leading-none py-1 text-center text-white rounded" style={{ width: `${progress}%` }}>
        {Math.round(progress)}%
      </div>
    </div>
  );
};

export default ProgressBar;