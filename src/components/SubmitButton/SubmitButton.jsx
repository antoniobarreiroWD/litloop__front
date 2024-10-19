import React from "react";

const SubmitButton = ({ darkMode }) => {
  return (
    <button
      className={`w-full py-3 text-xl font-semibold rounded-xl transition-all duration-300 transform focus:outline-none ${
        darkMode
          ? "bg-[#1f3c88] hover:bg-[#112d55] text-white active:scale-95"
          : "bg-[#112d55] hover:bg-[#1f3c88] text-white active:scale-95"
      }`}
      type="submit"
    >
      Enviar
    </button>
  );
};

export default SubmitButton;
