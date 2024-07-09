import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import clickSound from "../audio/mixkit-sci-fi-interface-robot-click-901.wav";

const Navbar = () => {
  const audioRef = useRef(null);
  const navigate = useNavigate();

  const handleClick = (event, path) => {
    event.preventDefault();
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
    setTimeout(() => {
      navigate(path);
    }, 2000);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full px-8 py-5 text-lg font-semibold bg-white bg-opacity-10 flex justify-between items-center backdrop-filter backdrop-blur-lg border-b-2 border-opacity-10 border-white">
        <Link to="/" className="text-white text-2xl font-bold" onClick={(event) => handleClick(event, '/')}>MathProTech</Link>
        <nav className="flex">
          <Link to="/login" className="text-white ml-7 transition duration-300 hover:text-blue-400 font-bold" onClick={(event) => handleClick(event, '/login')}>Login</Link>
          <Link to="/signup" className="text-white ml-7 transition duration-300 hover:text-blue-400 font-bold" onClick={(event) => handleClick(event, '/signup')}>SignUp</Link>
        </nav>
      </header>
      <audio ref={audioRef} src={clickSound} />
      <style jsx>{`
        header::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
          transition: 0.5s;
        }
        header:hover::before {
          left: 100%;
        }
      `}</style>
    </>
  );
}

export default Navbar;
