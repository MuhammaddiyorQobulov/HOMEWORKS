import React from "react";

const Menu = ({ menu, onSelect, media, idx, status }) => {
  return (
    <div
      className="menu"
      style={
        status
          ? {
              background: "dodgerblue",
              color: "white",
              path: {
                fill: "black",
              },
              path: {
                fill: "red",
              },
            }
          : {}
      }
      onClick={() => {
        onSelect(menu.title, idx);
      }}
    >
      <nav>{menu.icon}</nav>
      {media ? <span>{menu.title}</span> : ""}
    </div>
  );
};

export default Menu;
