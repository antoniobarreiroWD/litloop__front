import React from "react";
import CustomLink from "../CustomLink/CustomLink";

const NavigationLink = ({ children, ...props }) => {
  return (
    <CustomLink {...props}>
      <span className="2xl:text-3xl">
        {children}
      </span>
    </CustomLink>
  );
};

export default NavigationLink;
