import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import useThemeStore from './useThemeStore'; 
const Navbar = () => {
  const { darkMode, toggleDarkMode } = useThemeStore();

  return (
    <nav className="p-4 bg-gradient-to-r from-primary-gradient to-secondary-gradient text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">LitLoop</h1>
        <button
          onClick={toggleDarkMode}
          className="p-2 text-black rounded flex items-center"
        >
          {darkMode ? (
            <FaSun className="w-6 h-6" />
          ) : (
            <FaMoon className="w-6 h-6" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
