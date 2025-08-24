
import React, { useState } from 'react';

function Navbar({ onPageChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { name: 'Home', page: 'home' },
    { name: 'Idea Generator' , page: 'generator' },
    { name: 'Explore Ideas', page: 'explore' },
    { name: 'About Us', page: 'about' },
  ];

  return (
    <nav className="bg-white text-gray-800 shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
        
        {/* Logo */}
        <div className="flex-shrink-0 text-2xl font-bold">
          ThinkBot
        </div>
        
        {/* Desktop Navigation Links */}
        <div className="hidden md:flex flex-grow justify-center space-x-6">
          {navItems.map((item) => (
            <button
              key={item.page}
              onClick={() => onPageChange(item.page)}
              className="hover:text-blue-600 transition-colors"
            >
              {item.name}
            </button>
          ))}
        </div>

        

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <span className="text-3xl">✖</span> // Close icon
            ) : (
              <span className="text-3xl">☰</span> // Hamburger icon
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col items-center space-y-4 py-4">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => {
                  onPageChange(item.page);
                  setIsOpen(false);
                }}
                className="hover:text-blue-600 transition-colors"
              >
                {item.name}
              </button>
            ))}

          
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

