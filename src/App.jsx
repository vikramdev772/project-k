import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/Sidebar.css";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import Landingpage from "./screens/Landingpage";
import Course from "./screens/Course";



const App = () => {
  return (
    <>
   
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Landingpage/>}/>  
      <Route path="/signup" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/course" element={<Course/>}/>
      </Routes>
    </BrowserRouter>
    </>
    
  );
  
};

export default App;
