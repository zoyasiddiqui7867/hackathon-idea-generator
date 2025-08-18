
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar({ onPageChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { name: "Home", page: "home" },
    { name: "Generate Idea", page: "generator" },
    { name: "Saved Ideas", page: "saved" },
    { name: "Explore Ideas", page: "explore" },
  ];

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
        <button className="text-2xl font-bold hover:text-purple-400" onClick={() => onPageChange("home")}>
          ThinkBot
        </button>
        <div className="hidden md:flex space-x-6 items-center ">
          {navItems.map((item) => (
            <button key={item.page} onClick={() => onPageChange(item.page)} className="hover:text-purple-400">
              {item.name}
            </button>
          ))}
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden px-4 py-4 space-y-2 bg-gray-800">
          {navItems.map((item) => (
            <button
              key={item.page}
              onClick={() => {
                onPageChange(item.page);
                setIsOpen(false);
              }}
              className="block w-full text-left hover:text-purple-300">
              {item.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;

