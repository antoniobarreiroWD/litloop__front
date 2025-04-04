import React from "react";
import Input from "../Input/Input";
import SubmitButton from "../SubmitButton/SubmitButton";
import { capitalizeText } from "../../utils/index";
import useThemeStore from "../useThemeStore";

const CustomForm = ({ title, subtitle, onChange, onSubmit, options, ...props }) => {
  const { darkMode } = useThemeStore();

  return (
    <div
      className={`w-full max-w-[400px] flex flex-col p-8 rounded-lg shadow-lg transition-colors duration-300 ${
        darkMode ? "bg-darkPrimary" : "bg-primary"
      } ${props.className || ""}`}
    >
      <h1
        className={`text-center text-3xl font-bold mb-4 ${
          darkMode ? "text-gray-100" : "text-gray-900"
        }`}
      >
        {title}
      </h1>
      {subtitle && (
        <p
          className={`text-center text-lg mb-6 ${
            darkMode ? "text-gray-100" : "text-gray-900"
          }`}
        >
          {subtitle}
        </p>
      )}
      <form onSubmit={onSubmit} className="space-y-6">
        {options.map((option) => (
          <Input
            type={option === "password" ? "password" : "text"}
            name={option}
            onChange={onChange}
            key={option}
            placeholder={capitalizeText(option)}
            darkMode={darkMode}
          />
        ))}
        <SubmitButton darkMode={darkMode} />
      </form>
    </div>
  );
};

export default CustomForm;
