import React from "react";
import { Route, Link } from "react-router-dom";
import Menu from "../menu/menu";
import "./menus.scss";

const Menus = ({
  menus,
  collapsed,
  onSelectedProduct,
  products,
  onMenuTitle,
}) => {
  return (
    <div className="menus">
      {menus.map((menu, idx) => (
        <Menu
          selectedProduct={onSelectedProduct}
          onMenuTitle={onMenuTitle}
          key={menu.title}
          collapsed={collapsed}
          products={products}
          {...menu}
        />
      ))}
    </div>
  );
};

export default Menus;
