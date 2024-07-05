import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import pi from "../images/pi.png";
import maths from "../images/maths.png";
import logarithm from "../images/logarithm.png";
import ven from "../images/venn-diagram.png";
import formula from "../images/formula.png";

const LandingPage = () => {
  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    setBackgroundImage(pi);
  }, []);

  return (
    <>
      <Navbar />
      <div
        className="bg-cover bg-center min-h-screen flex justify-center items-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundColor: "black",
          // backgroundColor: "#71affaed",
          backgroundSize: "380px", 
          backgroundRepeat: "no-repeat", 
        }}
      >
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
          >
            Get started &gt;
          </Link>
        </div>
        <div className="hidden md:block">
          <img
            src={maths}
            alt="Maths"
            className="absolute top-0 left-0 w-[250px] m-24"
          />
          <img
            src={logarithm}
            alt="Logarithm"
            className="absolute bottom-0 left-[200px] w-[300px] m-28"
          />
          <img
            src={ven}
            alt="Venn Diagram"
            className="absolute top-0 right-[200px] w-[250px] m-24"
          />
          <img
            src={formula}
            alt="Formula"
            className="absolute bottom-[90px] right-[150px] w-[250px] m-24"
          />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
