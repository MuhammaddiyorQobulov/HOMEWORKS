import React from "react";
import { logo, search } from "../../assets/icons";

const Logo = ({ collapsed }) => {
  return (
    <>
      <div className='logo'>
        {logo}
        {collapsed && <h3>MingCute</h3>}
      </div>
      <div className='search'>
        <button>{search}</button>
        {collapsed && <input placeholder='Search' type='search' />}
      </div>
    </>
  );
};

export default Logo;
