import React from "react";

const Title = ({ fontSize = "56px", children, ...props }) => {
  return (
    <h1
      className={`text-center font-bold ${props.className || ""}`}
      style={{ fontSize }}
      {...props}
    >
      {children}
    </h1>
  );
};

export default Title;
