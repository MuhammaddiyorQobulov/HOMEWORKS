import React, { Component, Fragment } from "react";
import Button from "./components/button";

const Buttons = ({ separator, buttons = [] }) => {
  return (
    <div style={{ display: "flex",flexDirection:"column" }}>
      {buttons.map(({ title, ...props }, idx) => (
        <Fragment key={idx}>
          <Button {...props}>{title}</Button>
          {buttons.length - 1 !== idx && separator}
        </Fragment>
      ))}
    </div>
  );
};

export default Buttons;
