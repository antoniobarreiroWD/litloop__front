import React from 'react';
import useThemeStore from '../useThemeStore';

const Footer = () => {
  const { darkMode } = useThemeStore();

  return (
    <footer
      className={`w-full p-4 text-center transition-all duration-900 ease-in-out ${
        darkMode ? 'bg-darkPrimary text-white' : 'bg-primary text-black'
      } bg-opacity-90 backdrop-blur-md`}
    >
      <div className="container mx-auto">
        <p>© 2024 LitLoop. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
