import React from "react";
import CustomLink from "../CustomLink/CustomLink";

const AuthLink = ({ onClick, children, to }) => {
  return (
    <CustomLink
      onClick={onClick}
      to={to}
      className="rounded-md px-4 py-2 bg-[#112d55] hover:bg-[#1f3c88] text-white"
    >
      <div className="flex justify-center items-center">
        <span className="text-xs 2xl:text-xl">{children}</span>
      </div>
    </CustomLink>
  );
};

export default AuthLink;
