import React from "react";

const Menu = ({ menu, onSelect, media, idx }) => {
  const { title, icon, status } = menu;
  return (
    <div
      className="menu"
      style={
        status
          ? {
              background: "dodgerblue",
              color: "white",
            }
          : {}
      }
      onClick={() => {
        onSelect(title, idx);
      }}
    >
      <nav>{icon}</nav>
      {media ? <span>{title}</span> : ""}
    </div>
  );
};

export default Menu;
