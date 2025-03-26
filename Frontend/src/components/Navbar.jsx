import React, { useState } from 'react';
import logo from '../assets/skill.png'
import ThemeToggle from '../Context/ThemeToggle';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-slate-200  dark:bg-gray-800  dark:text-white transition-colors duration-300 text-black p-4">
      <div className="flex justify-between text-center h-16 items-center">
        <div className="text-xl font-semibold leading-5 flex items-center">
          <img className='w-20 h-1/2' src={logo} alt="" />
          <h1>SkillUp <br /><span className='text-blue-500'>Now</span></h1>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <a href="/" className="hover:bg-gray-700 px-3 py-2 rounded">Home</a>
          <a href="/about" className="hover:bg-gray-700 px-3 py-2 rounded">About</a>
          <a href="/Courses" className="hover:bg-gray-700 px-3 py-2 rounded">Courses</a>
          <a href="/Login" className="hover:bg-gray-700 px-3 py-2 rounded">Contact</a>
          <ThemeToggle/>
          <Link to='/Login'><button
      className="w-full  sm:w-auto bg-blue-500 text-white font-semibold py-2 px-9 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 active:bg-blue-700 transition duration-200 ease-in-out"
    >
      Login
    </button></Link>
        </div>

        <div className="md:hidden items-center">
          <button onClick={toggleMenu} className="dark:text-white text-black flex justify-end focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center mt-4 space-y-4">
          <a href="/" className="dark:text-white text-gray-800  px-3 py-2 w-full text-center hover:bg-gray-700">Home</a>
          <a href="/about" className="dark:text-white text-gray-800 px-3 py-2 w-full text-center hover:bg-gray-700">About</a>
          <a href="/Courses" className="dark:text-white text-gray-800 px-3 py-2 w-full text-center hover:bg-gray-700">Courses</a>
          <a href="/Login" className="dark:text-white text-gray-800 px-3 py-2 w-full text-center hover:bg-gray-700">Contact</a>
          <ThemeToggle/>
          <Link to='/Login'><button
      className="w-full  sm:w-auto bg-blue-500 text-white font-semibold py-2 px-9 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 active:bg-blue-700 transition duration-200 ease-in-out"
    >
      Login
    </button></Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
