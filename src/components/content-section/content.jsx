import React from "react";

const Content = ({ menuTitle, onMedia }) => {
  return (
    <div className="content-section">
      <div>
        <i className="fa-solid fa-bars" onClick={onMedia}></i>
        <h2>{menuTitle}</h2>
      </div>
    </div>
  );
};

export default Content;
