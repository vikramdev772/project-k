import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import pi from "../images/pi.png";
import maths from "../images/maths.png";
import logarithm from "../images/logarithm.png";
import ven from "../images/venn-diagram.png";
import formula from "../images/formula.png";
import clickSound from "../audio/mixkit-technology-notification-3123.wav";
import Loader from "./Loader";
import Navbar from "./Navbar";
import "../styles/Landingpage.css";

const LandingPage = () => {
  const [backgroundImage, setBackgroundImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const audioRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    setBackgroundImage(pi);
  }, []);

  const handleClick = (event) => {
    event.preventDefault();
    setIsLoading(true);

    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch((error) => {
        console.error("Error playing sound:", error);
      });
    }

    setTimeout(() => {
      setIsLoading(false);
      navigate(event.target.getAttribute("href"));
    }, 2050); 
  };

  return (
    <>
      <div
        className="bg-cover bg-center min-h-screen flex justify-center items-center relative"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundColor: "black",
          backgroundSize: "380px",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Navbar/>
        <div className="text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Achieve excellence in academics and real-world applications.
          </h1>
          <h2 className="text-lg md:text-xl mb-4">
            Enhance critical thinking and problem-solving skills with our
            integrated maths and programming curriculum.
          </h2>
          <Link
            className="inline-block outline-none cursor-pointer transition-transform transition-shadow bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white font-bold py-3 px-5 rounded-full shadow-md text-md"
            to="/course"
            onClick={handleClick}
          >
            Get started &gt;
          </Link>
          {isLoading && (
            <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-75 z-50">
              <Loader /> 
            </div>
          )}
        </div>
        <div className="hidden md:block">
          <img
            src={maths}
            alt="Maths"
            className="maths absolute top-0 left-0 w-[200px] m-24"
          />
          <img
            src={logarithm}
            alt="Logarithm"
            className="Logarithm absolute bottom-0 left-[200px] w-[200px] m-28"
          />
          <img
            src={ven}
            alt="Venn Diagram"
            className="venn absolute top-0 right-[200px] w-[200px] m-24"
          />
          <img
            src={formula}
            alt="Formula"
            className="sqroot absolute bottom-[90px] right-[150px] w-[200px] m-24"
          />
        </div>
      </div>
      <audio ref={audioRef} src={clickSound} />
    </>
  );
};

export default LandingPage;
