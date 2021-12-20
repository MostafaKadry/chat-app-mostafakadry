import React from "react";
import "./textContainer.css";
const TextContainer = ({ users }) => {
  let arr = Array.from(users);
  return (
    <div className="textContainer">
      <span class="badge bg-success mx-3">Users in room</span>
      {arr.map((user, i) => (
        <span class="badge bg-info text-dark mx-3" key={i} id={user.id}>
          {user.name}
        </span>
      ))}
    </div>
  );
};

export default TextContainer;
