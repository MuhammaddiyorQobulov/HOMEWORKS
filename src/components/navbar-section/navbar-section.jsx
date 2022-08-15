import React from "react";
import "./navbar-section.scss";

const Navbar = ({ menuTitle = "Dashboard", onCollapse }) => {
  return (
    <div className="navbar-section">
      <div>
        <i className="fa-solid fa-bars" onClick={onCollapse}></i>
        <h2>{menuTitle}</h2>
      </div>
    </div>
  );
};

export default Navbar;
