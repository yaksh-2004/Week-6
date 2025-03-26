import React, { useState, useEffect } from "react";
import ProgressBar from "./ProgressBar";
import Summary from "./Summary";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showScore, setShowScore] = useState(false);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setQuestions(data));
  }, []);

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
    if (answer === questions[currentIndex].correct) {
      setScore(score + 1);
    }
    setTimeout(() => {
      if (currentIndex + 1 < questions.length) {
        setCurrentIndex(currentIndex + 1);
        setSelectedAnswer(null);
      } else {
        setShowScore(true);
      }
    }, 1000);
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowScore(false);
  };

  if (questions.length === 0) return <div className="text-center font-bold text-4xl text-red-600"> Loading Questions...</div>;

  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-lg w-96 mx-auto mt-32">
      {showScore ? (
        <Summary score={score} total={questions.length} restart={handleRestart} />
      ) : (
        <div>
          <h2 className="text-xl font-bold">{questions[currentIndex].question}</h2>
          <div className="mt-4">
            {questions[currentIndex].options.map((option, index) => (
              <button
                key={index}
                className={`w-full p-2 mt-2 rounded border ${
                  selectedAnswer === option
                    ? option === questions[currentIndex].correct
                      ? "bg-green-300"
                      : "bg-red-300"
                    : "bg-gray-200"
                }`}
                onClick={() => handleAnswerClick(option)}
                disabled={selectedAnswer !== null}
              >
                {option}
              </button>
            ))}
          </div>
          <ProgressBar progress={((currentIndex + 1) / questions.length) * 100} />
        </div>
      )}
    </div>
  );
};

export default Quiz;