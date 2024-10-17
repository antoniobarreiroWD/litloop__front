import React from "react";

const Input = ({ placeholder, onChange, darkMode, ...props }) => {
  return (
    <input
      onChange={onChange}
      className={`w-full px-4 py-3 text-lg font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 ${
        darkMode
          ? "bg-gray-800 text-white placeholder-gray-400 focus:ring-indigo-500"
          : "bg-gray-100 text-gray-800 placeholder-gray-500 focus:ring-blue-500"
      }`}
      placeholder={placeholder}
      {...props}
    />
  );
};

export default Input;
