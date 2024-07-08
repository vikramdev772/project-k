import React from "react";
import { Link } from "react-router-dom";
import quizData from "./Data.json"; // Don't forget to import quizData

const Result = ({ quizState }) => {
  const { answers, time } = quizState;

  // Calculate the score based on the provided answers
  const calculateScore = () => {
    let score = 0;
    answers.forEach((answer) => {
      const questionData = quizData.data.find(q => q.question === answer.q);
      if (questionData && answer.a === questionData.answer) {
        score++;
      }
    });
    return score;
  };

  const score = calculateScore();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <div className="bg-[#252d4a] p-6 rounded-lg shadow-lg w-full max-w-2xl">
        <h1 className="text-2xl font-bold mb-4">Quiz Results</h1>
        <p className="text-lg">Your Score: {score} / {quizData.data.length}</p>
        <p className="text-lg mb-4">Time Taken: {time} seconds</p>
        <div className="space-y-4">
          {answers.map((answer, index) => (
            <div key={index} className="border border-gray-600 p-4 rounded-md">
              <p className="font-semibold">Question: {answer.q}</p>
              <p>Your Answer: {answer.a}</p>
              {/* Display correct answer */}
              <p>Correct Answer: {quizData.data.find(q => q.question === answer.q)?.answer}</p>
            </div>
          ))}
        </div>
        <Link to="/" className="mt-6">
          <button className="bg-purple-800 text-white py-2 px-4 rounded-md font-light tracking-wide mt-4">
            Go to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Result;
