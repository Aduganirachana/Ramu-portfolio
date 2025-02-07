import React, { useState } from "react";
import "../App.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="p-5 bg-white shadow-lg fixed w-full top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand Name */}
        <h1 className="text-xl font-bold text-blue-600">Ramu Master</h1>

        {/* Hamburger Menu (visible on small screens) */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden block focus:outline-none text-gray-700"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        {/* Navigation Links */}
        <div className={`md:flex ${isOpen ? 'block' : 'hidden'} md:block space-y-2 md:space-y-0`}>
          <a href="#about" className="block md:inline-block mx-4 text-gray-700 hover:text-blue-500">About</a>
          <a href="#teachings" className="block md:inline-block mx-4 text-gray-700 hover:text-blue-500">Teachings</a>
          <a href="#connect" className="block md:inline-block mx-4 text-gray-700 hover:text-blue-500">Connect</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
