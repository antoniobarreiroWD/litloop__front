import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FaSun, FaMoon, FaBars, FaUser, FaTimes } from 'react-icons/fa';
import useThemeStore from '../useThemeStore';
import logo from '../../assets/logo.webp';
import AuthLink from '../AuthLink/AuthLink';
import NavigationLink from '../NavigationLink/NavigationLink';
import { AuthContext } from '../../contexts/AuthContext';

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useThemeStore();
  const { user, logout } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); 
  const location = useLocation();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true); 
      } else {
        setIsScrolled(false); 
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const NAVIGATION_LINK = [
    { link: '/', text: 'Inicio' },
    { link: '/search', text: 'Búsqueda' }, 
  ];

  if (user) {
    NAVIGATION_LINK.splice(1, 0, { link: '/Books', text: 'Mis Libros' });
  }

  return (
    <nav className={`fixed w-full z-50 p-4 transition-all duration-900 ease-in-out ${
      darkMode ? 'bg-darkPrimary text-white' : 'bg-primary text-black'
    } bg-opacity-90 backdrop-blur-md`}>
      <div className="container mx-auto flex justify-between items-center max-w-screen-2xl">
        <div className="flex flex-1 justify-start">
          <NavigationLink to="/">
            <img
              src={logo}
              alt="LitLoop Logo"
              className={`transition-transform h-16 duration-300 hover:scale-105 rounded-full fixed -mt-8 ${
                isScrolled ? '2xl:h-16' : '2xl:h-48'  
              } w-auto`}
            />
          </NavigationLink>
        </div>

        <div className="hidden md:flex flex-1 justify-center items-center space-x-10">
          {NAVIGATION_LINK.map(({ link, text }) => {
            const isActiveLink = location.pathname === link;
            return (
              <NavigationLink
                to={link}
                key={text}
                className={`tracking-wide ${
                  isActiveLink ? 'font-semibold border-b-2' : 'font-light'
                } hover:opacity-75 transition-colors duration-300`}
              >
                {text}
              </NavigationLink>
            );
          })}
        </div>

        <div className="hidden md:flex flex-1 justify-end items-center space-x-6">
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-full transition-colors duration-300 ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-300'}`}
          >
            {darkMode ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
          </button>

          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <AuthLink to="/profile">
                  <FaUser className="w-5 h-5 hover:opacity-75 transition-opacity duration-300" />
                </AuthLink>
                <AuthLink onClick={logout} className="hover:opacity-75 transition-opacity duration-300">
                  Logout
                </AuthLink>
              </>
            ) : (
              <>
                <AuthLink to="/login" className="hover:opacity-75 transition-opacity duration-300">
                  Login
                </AuthLink>
                <AuthLink to="/signup" className="hover:opacity-75 transition-opacity duration-300">
                  Signup
                </AuthLink>
              </>
            )}
          </div>
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`focus:outline-none p-2 transition-colors duration-300 ${
              darkMode ? 'text-white' : 'text-black'
            }`}
          >
            {isMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
  <div className="md:hidden p-4 flex flex-col items-center justify-center space-y-4">
    {NAVIGATION_LINK.map(({ link, text }) => {
      const isActiveLink = location.pathname === link;
      return (
        <NavigationLink
          to={link}
          key={text}
          className={`block w-full text-center ${
            isActiveLink ? 'font-semibold' : 'font-light'
          } hover:opacity-75 transition-colors duration-300`}
          onClick={() => setIsMenuOpen(false)}
        >
          {text}
        </NavigationLink>
      );
    })}

    <div className="flex items-center justify-center space-x-4">
      {user ? (
        <>
          <AuthLink to="/profile" onClick={() => setIsMenuOpen(false)}>
            Profile
          </AuthLink>
          <AuthLink onClick={logout} className="hover:opacity-75 transition-colors duration-300">
            Logout
          </AuthLink>
        </>
      ) : (
        <>
          <AuthLink to="/login" className="hover:opacity-75 transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>
            Login
          </AuthLink>
          <AuthLink to="/signup" className="hover:opacity-75 transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>
            Signup
          </AuthLink>
        </>
      )}
    </div>

    <div className="mt-4 flex items-center justify-center">
      <button
        onClick={toggleDarkMode}
        className="p-2 rounded-full hover:bg-gray-700 transition-colors duration-300"
      >
        {darkMode ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
      </button>
    </div>
  </div>
)}

    </nav>
  );
};

export default Navbar;
