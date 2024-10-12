import React from "react";
import useThemeStore from "../useThemeStore";

const Footer = () => {
  const { darkMode } = useThemeStore();

  return (
    <footer
      className="bg-[#040714] bg-opacity-90 backdrop-blur-md w-full z-50 transition-all duration-900 ease-in-out p-4 text-center "
    >
      <div className="container mx-auto">
        <p>© 2024 LitLoop. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
