import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";
import AuthLink from "../AuthLink/AuthLink";
import NavigationLink from "../NavigationLink/NavigationLink";
import { AuthContext } from "../../contexts/AuthContext";
import { FaSun, FaMoon, FaBars, FaUser } from "react-icons/fa";
import useThemeStore from "../useThemeStore";
import logo from "../../assets/logo.webp";

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useThemeStore();
  const { user, logout } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const NAVIGATION_LINK = [
    { link: "/", text: "Home" },
    { link: "/Books", text: "Mis Libros" },
  ];

  const location = useLocation();

  return (
    <nav
    className={` ${
      darkMode
        ? "bg-gradient-to-r from-[#101231] via-secondary to-[#101231] bg-right"
        : "bg-gradient-to-r from-background via-primary to-background bg-left"
    } relative transition-all duration-700 ease-in-out m-2`}
  >
    <div className="absolute left-4 top-1 sm:left-2 sm:top-1 2xl:left-4 2xl:top-2 z-50">
      <CustomLink to="/">
        <img
          src={logo}
          alt="LitLoop Logo"
          className="h-24 w-24 sm:h-28 sm:w-28 lg:h-32 lg:w-32 2xl:h-auto 2xl:w-1/3 rounded-full"
        />
      </CustomLink>
    </div>
  
    <div className="container mx-auto flex justify-between items-center p-4 2xl:mb-40 relative max-w-full">
      <div className="md:hidden flex items-center space-x-4 ml-auto z-50 mt-2 relative">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-2xl focus:outline-none"
        >
          <FaBars />
        </button>
  
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full flex items-center text-black bg-white hover:bg-gray-300 transition-colors duration-700 "
        >
          {darkMode ? <FaSun className="w-6 h-6" /> : <FaMoon className="w-6 h-6" />}
        </button>
      </div>
  
      <div className="hidden md:flex items-center space-x-28 justify-center w-full absolute p-2 transform left-1/2 -translate-x-1/2 2xl:top-16 z-50 ">
        {NAVIGATION_LINK.map(({ link, text }) => {
          const isActiveLink = location.pathname === link;
          return (
            <NavigationLink
              to={link}
              key={text}
              className={`${
                isActiveLink ? "bg-[#1f3c88] font-bold" : "bg-[#112d55] font-normal"
              } rounded-lg p-2 text-white bg-[#112d55] hover:bg-[#1f3c88] transition-colors duration-700`}
            >
              {text}
            </NavigationLink>
          );
        })}
      </div>
  
      <div className="hidden md:flex items-center space-x-4 z-50 ml-auto 2xl:absolute 2xl:top-16 2xl:right-4 m-2">
        <div className={`flex gap-2 ${darkMode ? "text-white" : "text-gray-900"}`}>
          {user ? (
            <>
              <AuthLink to="/profile">
                <FaUser className="w-6 h-6" />
              </AuthLink>
              <AuthLink onClick={logout}>Logout</AuthLink>
            </>
          ) : (
            <>
              <AuthLink to="/login">Login</AuthLink>
              <AuthLink to="/signup">Signup</AuthLink>
            </>
          )}
        </div>
  
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full flex items-center text-white bg-[#112d55] hover:bg-[#1f3c88] transition-colors duration-700 "
        >
          {darkMode ? <FaSun className="w-7 h-7" /> : <FaMoon className="w-7 h-7" />}
        </button>
      </div>
  
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center mt-4 space-y-2 z-40">
          {NAVIGATION_LINK.map(({ link, text }) => {
            const isActiveLink = location.pathname === link;
            return (
              <NavigationLink
                to={link}
                key={text}
                className={`${
                  isActiveLink ? "underline font-bold" : "font-normal"
                } ${darkMode ? "text-white" : "text-gray-900"} hover:underline transition-colors duration-700`}
              >
                {text}
              </NavigationLink>
            );
          })}
  
          <div
            className={`flex flex-col items-center gap-2 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            {user ? (
              <>
                <AuthLink to="/profile">
                  <FaUser className="w-4 h-4 bg-[#112d55]" />
                </AuthLink>
                <AuthLink onClick={logout}>Logout</AuthLink>
              </>
            ) : (
              <>
                <AuthLink to="/login">Login</AuthLink>
                <AuthLink to="/signup">Signup</AuthLink>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  </nav>
  
  );
};

export default Navbar;
