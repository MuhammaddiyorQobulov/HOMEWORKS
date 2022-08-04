import React from "react";
import Menu from "./menu";

const Menus = ({ menus, onSelect, media }) => {
  return (
    <div className="menus">
      {menus.map((menu, idx) => (
        <Menu
          idx={idx}
          key={idx}
          menu={menu}
          media={media}
          onSelect={onSelect}
          status={menu.status}
        />
      ))}
    </div>
  );
};

export default Menus;
