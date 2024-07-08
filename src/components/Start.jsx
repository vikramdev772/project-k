import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Start = ({ setQuizState }) => {
  const [minute, setMinute] = useState(1);
  const [second, setSecond] = useState(0);
  const [time, setTime] = useState(60);
  const navigate = useNavigate();

  const handleQuizStart = () => {
    setQuizState((prevState) => ({ ...prevState, time }));
    navigate('/quiz');
  };

  // Ensure minute and second values are within valid range
  useEffect(() => {
    if (minute < 0) setMinute(0);
    if (minute > 59) setMinute(59);
    if (second < 0) setSecond(0);
    if (second > 59) setSecond(59);
  }, [minute, second]);

  // Calculate total time in seconds based on minute and second inputs
  useEffect(() => {
    setTime(minute * 60 + second);
  }, [minute, second]);

  return (
    <div className="flex h-screen items-center justify-center text-center text-white bg-black">
      <div>
        <h1 className="text-4xl font-bold mb-4">Start the Quiz</h1>
        <p className="text-lg mb-2">Good luck!</p>
        <p className="text-lg mb-4">Time: {time} sec</p>
        <div className="flex justify-center mb-4 gap-4">
          <label className="mr-2 flex justify-center items-center gap-4">
            <input
              type="number"
              className="w-16 p-2 rounded-md text-black text-center"
              value={minute}
              onChange={(e) => setMinute(parseInt(e.target.value))}
              min="0"
              max="59"
            />
            min
          </label>
          <label className="flex justify-center items-center gap-4">
            <input
              type="number"
              className="w-16 p-2 rounded-md text-black text-center"
              value={second}
              onChange={(e) => setSecond(parseInt(e.target.value))}
              min="0"
              max="59"
            />
            sec
          </label>
        </div>
        <button
          className="bg-purple-800 py-2 px-4 rounded-lg font-light tracking-wide cursor-pointer text-white"
          onClick={handleQuizStart}
        >
          START
        </button>
      </div>
    </div>
  );
};

export default Start;
