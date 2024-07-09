import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Auth/Login";
import Register from "./Auth/Register";
import Landingpage from "./screens/Landingpage";
import Course from "./screens/Course";
import Start from "./components/Start";
import Quiz from "./components/Quiz";
import Result from "./components/Result";

const App = () => {
  const [quizState, setQuizState] = useState({
    activeQuestion: 0,
    answers: [],
    time: 60,
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/course" element={<Course />} />
        <Route path="/start" element={<Start setQuizState={setQuizState} />} />
        <Route
          path="/quiz"
          element={<Quiz quizState={quizState} setQuizState={setQuizState} />}
        />
        <Route path="/result" element={<Result quizState={quizState} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
