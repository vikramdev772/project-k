import React, { useRef, useEffect, useState } from "react";
import Cards from "./Cards";
import Navbar from "./Navbar";
import algebra from "../images/algebra.png";
import geometry from "../images/pythagoras.png";
import functions from "../images/book.png";
import test from "../images/score.png";
import { Link, useNavigate } from "react-router-dom";
import clickSound from "../audio/mixkit-game-quick-warning-notification-268.wav";
import Loading from "./Loading";

const Course = () => {
  const audioRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
    }
  }, []);

  const handleClick = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch((error) => {
        console.error("Error playing sound:", error);
      });
    }
  };

  const handleTestClick = (event) => {
    event.preventDefault();
    setIsLoading(true);
    handleClick();

    setTimeout(() => {
      setIsLoading(false);
      navigate('/start');
    }, 2000);
  };

  return (
    <>
      <Navbar />
      <div
        className="bg-cover bg-center min-h-screen flex flex-col items-center justify-center pt-16 md:pt-24"
        style={{
          backgroundColor: "black",
        }}
      >
        <h1 className="text-3xl text-blue-400 font-bold mt-8 md:mt-16">
          Courses
        </h1>

        <div className="flex flex-col md:flex-row gap-8 md:gap-20 mt-8 md:mt-12">
          <div onClick={handleClick}>
            <Cards name="Level 1" img={algebra} />
          </div>
          <div onClick={handleClick}>
            <Cards name="Level 2" img={geometry} />
          </div>
          <div onClick={handleClick}>
            <Cards name="Level 3" img={functions} />
          </div>
          <div onClick={handleTestClick}>
            <Cards name="Test" img={test} />
          </div>
        </div>
      </div>
      {isLoading && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-75 z-50">
          <Loading />
        </div>
      )}
      <audio ref={audioRef} src={clickSound} />
    </>
  );
};

export default Course;
