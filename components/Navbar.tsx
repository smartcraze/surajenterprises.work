import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // optional: lucide icons

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="font-bold text-xl text-blue-600">Suraj.dev</span>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="text-gray-700 hover:text-blue-600">Home</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600">About</a>
            <a href="#projects" className="text-gray-700 hover:text-blue-600">Projects</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 bg-white shadow-md">
          <a href="#home" className="block py-2 text-gray-700 hover:text-blue-600">Home</a>
          <a href="#about" className="block py-2 text-gray-700 hover:text-blue-600">About</a>
          <a href="#projects" className="block py-2 text-gray-700 hover:text-blue-600">Projects</a>
          <a href="#contact" className="block py-2 text-gray-700 hover:text-blue-600">Contact</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
