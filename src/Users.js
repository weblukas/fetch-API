import React from "react";

const Users = (users) => {
  console.log(users.users);

  return (
    <div>
      {users.users.map((item) => (
        <div className="user-box">
          <h4>{item.name}</h4>
          <p>email: {item.email}</p>
          <h6>company name: {item.company.name}</h6>
          <button className="btn">send a message</button>
        </div>
      ))}
    </div>
  );
};

export default Users;
