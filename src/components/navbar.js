import React from 'react';
import './index.css';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-white text-lg font-bold">My Website</div>
          <div className="text-gray-300">
            <a href="#home" className="px-4">Home</a>
            <a href="#about" className="px-4">About</a>
            <a href="#contact" className="px-4">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
