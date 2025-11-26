import React, { useState } from 'react';
import logo from '../assets/logo_sbs_sport.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <button onClick={() => scrollToSection('home')} className="flex items-center space-x-3 hover:opacity-80 transition">
              <img src={logo} alt="SBS Sport Academy Logo" className="h-12 w-12 object-contain" />
              <h1 className="text-xl md:text-2xl font-bold text-blue-900 hidden sm:block">SBS Sport Academy</h1>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-900 transition font-medium">Home</button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-900 transition font-medium">About</button>
            <button onClick={() => scrollToSection('sports')} className="text-gray-700 hover:text-blue-900 transition font-medium">Sports</button>
            <button onClick={() => scrollToSection('programs')} className="text-gray-700 hover:text-blue-900 transition font-medium">Programs</button>
            <button onClick={() => scrollToSection('pricing')} className="text-gray-700 hover:text-blue-900 transition font-medium">Pricing</button>
            <button onClick={() => scrollToSection('contact')} className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition font-semibold">Contact</button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md">Home</button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md">About</button>
            <button onClick={() => scrollToSection('sports')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md">Sports</button>
            <button onClick={() => scrollToSection('programs')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md">Programs</button>
            <button onClick={() => scrollToSection('pricing')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md">Pricing</button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 bg-blue-900 text-white hover:bg-blue-800 rounded-md">Contact</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

