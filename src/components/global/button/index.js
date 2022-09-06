import React from "react";

export const ButtonPrimary = (props) => {
  const { children, ...etc } = props;
  return <button className="btn-primary btn" type="button"{ ...etc}>{children}</button>;
};


export const ButtonSecondary = (props) => {
  const { children, ...etc } = props;
  return <button className="btn-secondary btn" type="button"{ ...etc}>{children}</button>;
};
