import React from "react";



const Cards = (props) => {
  return (
    <div className="relative w-48 h-64 overflow-hidden rounded-xl bg-[#3d3c3d] shadow-xl hover:shadow-2xl hover:shadow-blue-600">
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 opacity-90 rounded-xl bg-[#323132]">
        <h2 className="cursor-pointer hover:text-blue-500">{props.name}</h2>
        <img src={props.img} alt={props.name} className="w-50 h-auto " />
      </div>
      <div className="absolute w-56 h-48 bg-white blur-[50px] -left-1/2 -top-1/2" />
    </div>
  );
};

export default Cards;
