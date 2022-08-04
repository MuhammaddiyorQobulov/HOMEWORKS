import React from "react";

const Logo = ({ logo, search, logoName, media }) => {
  return (
    <>
      <div className="logo">
        {logo}
        {media ? <h3>{logoName}</h3> : ""}
      </div>
      <div className="search">
        <button>{search}</button>
        {media ? <input placeholder="Search" type="search" /> : ""}
      </div>
    </>
  );
};

export default Logo;
