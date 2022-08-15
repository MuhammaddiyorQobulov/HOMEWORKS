import React from "react";
import { Route, Switch } from "react-router-dom";
import Menu from "../menu/menu";
import "./menus.scss";

const Menus = ({ menus, onSelect, collapsed, onSelectedProduct }) => {
  return (
    <div className="menus">
      {/* <Switch> */}
      {menus.map((menu, idx) => (
        <Route
          path="/"
          key={menu.path}
          render={(props) => (
            <Menu
              {...props}
              onSelectedProduct={onSelectedProduct}
              key={menu.title}
              collapsed={collapsed}
              {...menu}
            />
          )}
        />
      ))}
      {/* </Switch> */}
    </div>
  );
};

export default Menus;
