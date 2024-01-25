import React, { createContext, useState } from "react";

export const UsersContext = createContext({});

const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([
    { id: 1, username: "rakib" },
    { id: 2, username: "rasel" },
  ]);

  return (
    <UsersContext.Provider value={{ users, setUsers }}>
      {children}
    </UsersContext.Provider>
  );
};

export default UserProvider;
