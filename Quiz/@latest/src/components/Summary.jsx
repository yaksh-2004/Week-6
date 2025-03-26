import React from "react";

const Summary = ({ score, total, restart }) => {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold">Your Score: {score} / {total}</h2>
      <button
        className="mt-4 px-4 py-2 bg-pink-500 text-white rounded"
        onClick={restart}
      >
        Play Again
      </button>
    </div>
  );
};

export default Summary;