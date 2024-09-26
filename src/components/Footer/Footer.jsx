import React from "react";
import useThemeStore from "../useThemeStore";

const Footer = () => {
  const { darkMode } = useThemeStore();

  return (
    <footer
      className={`p-4 sm:p-6 lg:p-8 text-black text-center ${
        darkMode
          ? "bg-gradient-to-r from-[#101231] via-secondary to-[#101231] text-white"
          : "bg-gradient-to-r from-background via-primary to-background"
      }`}
    >
      <div className="container mx-auto">
        <p>© 2024 LitLoop. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
