import React, { useRef, inputRef } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Info() {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/quiz");
  };

  return (
    <>
      <div className="text-center">
        <h1 className="text-center text-pretty font-extrabold text-4xl text-fuchsia-700 my-10">
          Cricket Quiz
        </h1>
        <div className="info bg-gray-50 p-6 rounded-lg shadow-lg w-96 flex justify-center mx-auto">
          <ol>
            <li>You will be asked 4 questions one after another.</li>
            <li>1 point wiil be awarded for the correct answer.</li>
            <li>
              Each question has four options. You can choose only one options.
            </li>
            <li>The result will be declared at the end of the quiz.</li>
          </ol>
        </div>
        <button
          className="mt-4 px-4 py-2 bg-pink-500 text-white rounded flex justify-center mx-auto"
          onClick={handleRedirect}
        >
          Start Quiz
        </button>
      </div>
    </>
  );
}
