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
        className={`min-h-screen flex flex-col transition-colors duration-700 font-sans ${
          darkMode ? "bg-third" : "bg-background"
        }`}
      >
        <Navbar />
        <main className="flex-grow">
         
        <section className="max-w-screen-2xl mx-auto p-10 m-20">
  <Outlet />
</section>

        </main>
        <Footer />
      </div>
    </AuthProvider>
  );
};

export default Layout;
