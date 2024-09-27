import React from "react";

const Title = ({  children, ...props }) => {
  return (
    <h1
      className={`text-center font-bold  ${props.className || ""}`}
      style={{  }}
      {...props}
    >
      {children}
    </h1>
  );
};

export default Title;
