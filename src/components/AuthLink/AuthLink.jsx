import React from "react";
import CustomLink from "../CustomLink/CustomLink";
import useThemeStore from "../useThemeStore";


const AuthLink = ({ onClick, children, to }) => {
  const { darkMode } = useThemeStore();
  
  return (
    <CustomLink
      onClick={onClick}
      to={to}
      className={`rounded-md px-4 py-2 text-white ${
        darkMode
          ? "bg-[#1f3c88] hover:bg-[#112d55] text-white active:scale-95"
          : "bg-[#112d55] hover:bg-[#1f3c88] text-white active:scale-95"
      }`}
    >
      <div className="flex justify-center items-center">
        <span className="text-xs 2xl:text-xl">{children}</span>
      </div>
    </CustomLink>
  );
};

export default AuthLink;
