import React from "react";
import Cards from "./Cards";
import Navbar from "./Navbar";
import algebra from "../images/algebra.png";
import geometry from "../images/pythagoras.png";
import functions from "../images/book.png";
const Course = () => {
  return (
    <>
      <Navbar />
      <div
        className="bg-cover bg-center min-h-screen flex flex-col items-center justify-center"
        style={{
          backgroundColor: "black",
        }}
      >
        <h1 className="text-3xl text-blue-400 font-bold mt-8 md:mt-16">Courses</h1>
        
        <div className="flex flex-col md:flex-row gap-8 md:gap-20 mt-8 md:mt-12">
          <Cards name="Level 1" img={algebra} />
          <Cards name="Level 2" img={geometry} />
          <Cards name="Level 3" img={functions}/>
        </div>
        <br />
        <br />
      </div>
    </>
  );
};

export default Course;
