import React, { useState } from "react";
import { useUsersContext } from "../hooks/useUserContext";

const NewUsers = () => {
  const { setUsers } = useUsersContext();

  const [username, setUsername] = useState("");

  const handleUserNameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = { id: new Date().getTime().toString(), username: username };
    setUsers((prevUser) => [...prevUser, newUser]);
    setUsername("");
  };
  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
      }}
    >
      <h1 style={{ background: "green" }}> User Registration</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleUserNameChange}
          required
        />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default NewUsers;
