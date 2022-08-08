import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import Buttons from "./buttons";
import "./base.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Buttons
    separator={
      <div
        style={{ margin: "25px 0", height: 1, background: "gray", width: 120 }}
      />
    }
    buttons={[
      { title: "Red", color: "red", borderRadius: true, pointer: true },
      { title: "Blue", color: "blue", borderRadius: false, pointer: false },
      { title: "Black", color: "black", borderRadius: true, pointer: true },
      { title: "Green", color: "green", borderRadius: false, pointer: true },
      { title: "Gray", color: "gray", borderRadius: true, pointer: false },
      { title: "Yellow", color: "yellow", borderRadius: false, pointer: true },
      { title: "Pink", color: "pink", borderRadius: true, pointer: false },
    ]}
  />
);
