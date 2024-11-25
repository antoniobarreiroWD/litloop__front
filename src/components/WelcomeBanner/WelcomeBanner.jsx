import React, { useEffect } from "react";
import { motion } from "framer-motion";

const WelcomeBanner = ({ onHide, isVisible }) => {
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50 && isVisible) {
        onHide(); 
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [onHide, isVisible]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: -50 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0.8,
        y: isVisible ? 0 : -100,
      }}
      exit={{ opacity: 0, scale: 0.8, y: -100 }}
      transition={{
        duration: 0.8,
        ease: [0.4, 0.0, 0.2, 1], 
      }}
      className="fixed inset-0 flex justify-center items-center z-50"
    >
      <div className="w-[80%] h-[55%] flex flex-col justify-center items-center bg-gradient-to-b from-primary to-secondary shadow-lg rounded-lg">
        <div className="text-center px-4">
          <h1 className="text-3xl sm:text-5xl font-bold text-white drop-shadow-lg">
            ¡Bienvenido a LitLoop!
          </h1>
          <p className="text-md sm:text-xl mt-4 text-white">
            Descubre los libros más populares
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default WelcomeBanner;
