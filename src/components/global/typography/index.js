import React from "react";

export const Text = (props) => {
  const { children, type, ...etc } = props;

  return type === "h1" ? (
    <h1 { ...etc} >{children}</h1>
  ) : type === "h2" ? (
    <h2 { ...etc} >{children}</h2>
  ) : type === "h3" ? (
    <h3 { ...etc} >{children}</h3>
  ) : type === "h4" ? (
    <h4 { ...etc} >{children}</h4>
  ) : type === "h5" ? (
    <h5 { ...etc} >{children}</h5>
  ) : (
    <h6 { ...etc} >{children}</h6>
  );
};
