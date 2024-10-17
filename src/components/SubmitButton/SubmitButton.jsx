import React from "react";

const SubmitButton = ({ darkMode }) => {
  return (
    <button
      className={`w-full py-3 text-xl font-semibold rounded-xl transition-all duration-300 transform focus:outline-none ${
        darkMode
          ? "bg-indigo-600 text-white hover:bg-indigo-500 active:scale-95"
          : "bg-blue-500 text-white hover:bg-blue-400 active:scale-95"
      }`}
      type="submit"
    >
      Enviar
    </button>
  );
};

export default SubmitButton;
