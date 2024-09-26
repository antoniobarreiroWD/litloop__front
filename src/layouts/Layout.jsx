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
        className={`min-h-screen flex flex-col ${
          darkMode ? "bg-third" : "bg-background"
        }`}
      >
        <Navbar />
        <main className="flex-grow">
         
          <section className="p-4 sm:p-6 lg:p-8 max-w-screen-2xl mx-auto">
            <Outlet />
          </section>
        </main>
        <Footer />
      </div>
    </AuthProvider>
  );
};

export default Layout;
