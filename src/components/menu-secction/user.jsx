import React from "react";

const User = ({ users, media }) => {
  return users.map(({ img, email, name, icon }, idx) => (
    <div className="user" key={name}>
      <img src={img} alt="" />
      {media ? (
        <div>
          <nav>{name}</nav>
          <p>{email}</p>
        </div>
      ) : (
        ""
      )}
      {media ? icon : ""}
    </div>
  ));
};

export default User;
