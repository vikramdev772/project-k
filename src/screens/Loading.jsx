import React from "react";
import "../styles/Loading.css";
const Loading = () => {
  return (
    <>
      <ul>
        <li>
          <div className="loading">
            <div className="child" />
          </div>
        </li>
        <li>
          <div className="text" />
        </li>
      </ul>
    </>
  );
};

export default Loading;
