import React from "react";

const User = ({ users, media }) => {
  return users.map((user, idx) => (
    <div className="user" key={user.name}>
      <img src={user.img} alt="" />
      {media ? (
        <div>
          <nav>{user.name}</nav>
          <p>{user.email}</p>
        </div>
      ) : (
        ""
      )}
      {media ? user.icon : ""}
    </div>
  ));
};

export default User;
