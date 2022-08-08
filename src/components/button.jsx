import React, { Component, createContext } from "react";
import classes from "./button.module.scss";
import cx from "classnames";

const Button = ({ children, color, borderRadius, pointer }) => {
  return (
    <button
      className={cx(
        classes.button,
        classes[`button--${color}`],
        borderRadius && classes.borderRadius,
        pointer && classes.pointer
      )}
    >
      {children}
    </button>
  );
};

export default Button;
