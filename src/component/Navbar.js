import React from "react";

const Navbar = () => {
  return (
    <nav className="p-5 bg-white shadow-lg fixed w-full top-0 z-10">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-xl font-bold text-blue-600">Ramu Master</h1>
        <div>
          <a href="#about" className="mx-4 text-gray-700 hover:text-blue-500">About</a>
          <a href="#teachings" className="mx-4 text-gray-700 hover:text-blue-500">Teachings</a>
          <a href="#connect" className="mx-4 text-gray-700 hover:text-blue-500">Connect</a>
    
        </div>
      </div>
    </nav>
  );
};

export default Navbar;