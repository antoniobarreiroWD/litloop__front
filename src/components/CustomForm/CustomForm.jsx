import React from "react";
import Input from "../Input/Input";
import SubmitButton from "../SubmitButton/SubmitButton";
import { capitalizeText } from "../../utils/index";
import useThemeStore from "../useThemeStore";

const CustomForm = ({
  title,
  subtitle,
  onChange,
  onSubmit,
  options,
  ...props
}) => {
  const { darkMode } = useThemeStore();

  return (
    <div
      className={`w-full max-w-[400px] flex flex-col ${props.className || ""}`}
    >
      <h1
        className={`text-center text-4xl font-bold ${
          darkMode ? "text-white" : "text-gray-900"
        }`}
      >
        {title}
      </h1>
      {subtitle && (
        <p
          className={`text-center text-2xl ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          {subtitle}
        </p>
      )}
      <form onSubmit={onSubmit} className="mt-8">
        <div className="flex flex-col gap-8">
          {options.map((option) => {
            return (
              <Input
                type={option === "password" ? "password" : "text"}
                name={option}
                onChange={onChange}
                key={option}
                placeholder={capitalizeText(option)}
              />
            );
          })}
        </div>
        <SubmitButton darkMode={darkMode} />
      </form>
    </div>
  );
};

export default CustomForm;
