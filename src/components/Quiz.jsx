import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import quizData from "./Data.json";

const Quiz = ({ quizState, setQuizState }) => {
  const { activeQuestion, answers, time } = quizState;
  const [data, setData] = useState(quizData?.data[activeQuestion]);
  const [error, setError] = useState("");
  const [selected, setSelected] = useState("");
  const [timer, setTimer] = useState(time);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    if (timer > 0) {
      const countdown = setTimeout(() => setTimer(timer - 1), 1000);
      return () => clearTimeout(countdown);
    } else {
      // Handle timeout
    }
  }, [timer]);

 const radiosWrapper = useRef();

  useEffect(() => {
    setData(quizData?.data[activeQuestion]);
    if (answers[activeQuestion] !== undefined) {
      setSelected(answers[activeQuestion].a);
    }
  }, [activeQuestion, answers]);

  const changeHandler = (e) => {
    setSelected(e.target.value);
    if (error) setError("");
  };

  const handlePrev = () => {
    setError("");
    setQuizState((prev) => ({ ...prev, activeQuestion: activeQuestion - 1 }));
  };

  const handleNext = () => {
    if (!selected) return setError("Please select one option!");
    const updatedAnswers = [...answers];
    updatedAnswers[activeQuestion] = { q: data.question, a: selected };
    setQuizState((prev) => ({
      ...prev,
      activeQuestion: activeQuestion + 1,
      answers: updatedAnswers,
    }));
    setSelected("");
  };

  const handleSubmit = () => {
    if (!selected) return setError("Please select one option!");
    setQuizState((prev) => ({
      ...prev,
      answers: [
        ...answers,
        (answers[activeQuestion] = { q: data.question, a: selected }),
      ],
      time: time - timer,
    }));
     navigate("/result"); // Navigate to the result page
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="relative w-full sm:w-4/5 mx-auto text-white p-4 sm:p-6 md:p-8">
        <section className="flex justify-between mb-4">
          <h3 className="text-lg md:text-xl lg:text-2xl">
            Question {activeQuestion + 1}/{quizData?.data.length}
          </h3>
          <h5 className="text-lg md:text-xl lg:text-2xl">{timer}</h5>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 cursor-pointer">
          <div className="text-lg md:text-xl lg:text-2xl overflow-y-auto max-h-60">
            <p>{data?.question}</p>
            {error && <div className="text-red-500 mt-2">{error}</div>}
          </div>
          <div
            className="flex flex-col items-center text-center justify-start overflow-y-auto max-h-60"
            ref={radiosWrapper}
          >
            {data?.choices.map((choice, i) => (
              <label
                className={`${
                  choice === selected
                    ? "bg-purple-800 text-white font-bold"
                    : "bg-gray-800 text-black font-bold"
                } w-full md:w-4/5 text-lg rounded-lg py-2 border-4 border-blue-800 cursor-pointer mb-2`}
                key={i}
              >
                <input
                  type="radio"
                  name="answer"
                  value={choice}
                  onChange={changeHandler}
                  checked={choice === selected}
                  className="hidden"
                />
                {choice}
              </label>
            ))}
          </div>
        </section>
        <br />
        <br />
        <section className="absolute bottom-0 w-[90%] flex justify-between items-center p-4">
          {activeQuestion > 0 && (
            <button
              className="bg-purple-800 py-2 px-4 rounded-lg font-light tracking-wide cursor-pointer text-white"
              onClick={handlePrev}
            >
              Prev
            </button>
          )}
          {activeQuestion + 1 >= quizData?.data.length ? (
            <button
              className="bg-purple-800 py-2 px-4 rounded-lg font-light tracking-wide cursor-pointer text-white"
              onClick={handleSubmit}
            >
              Submit
            </button>
          ) : (
            <button
              className="bg-purple-800 py-2 px-4 rounded-lg font-light tracking-wide cursor-pointer text-white"
              onClick={handleNext}
            >
              Next
            </button>
          )}
        </section>
      </div>
    </div>
  );
};

export default Quiz;
