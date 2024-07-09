import React from "react";
import "../styles/Loader.css";

const Loader = () => {
  return (
    <>
      <div className="">
        <div className="loader">
          <div className="intern"></div>
          <div className="external-shadow">
            <div className="central"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loader;
