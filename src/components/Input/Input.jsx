import React from "react";

const Input = ({ placeholder, onChange, ...props }) => {
  return (
    <input
      onChange={onChange}
      className="h-16 font-bold text-2xl rounded-xl bg-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
      placeholder={placeholder}
      {...props}
    />
  );
};

export default Input;
