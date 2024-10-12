import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";
import useThemeStore from "../components/useThemeStore";

const Layout = () => {
  const { darkMode } = useThemeStore();

  return (
    <AuthProvider>
      <div
        className={`min-h-screen flex flex-col transition-colors duration-1000 font-sans ${
          darkMode ? "bg-third text-white" : "bg-background text-black"
        }`}
      >
        <Navbar darkMode={darkMode} />
        <main className="flex-grow">
          <section className="max-w-screen-2xl mx-auto p-7 mt-2 2xl:p-9 2xl:mt-4">
            <Outlet />
          </section>
        </main>
        <Footer darkMode={darkMode} />
      </div>
    </AuthProvider>
  );
};

export default Layout;
