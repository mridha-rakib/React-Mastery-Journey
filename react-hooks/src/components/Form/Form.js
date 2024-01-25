import React, { useState } from "react";
import style from "./Form.module.css";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let userInfo = {
      name,
      email,
      password,
    };
    console.log(userInfo);
  };
  return (
    <div>
      <h1>Registration</h1>
      <form action="" onSubmit={handleSubmit}>
        <div className={style.formGroup}>
          <label htmlFor="name">Name: </label>
          <input
            onChange={handleNameChange}
            type="text"
            name="name"
            id="name"
            value={name}
            required
          />
        </div>

        <div className={style.formGroup}>
          <label htmlFor="email">Email: </label>
          <input
            onChange={handleEmailChange}
            type="email"
            name="email"
            id="email"
            value={email}
            required
          />
        </div>
        <div className={style.formGroup}>
          <label htmlFor="password">Password:</label>
          <input
            onChange={handlePasswordChange}
            type="password"
            name="password"
            id="password"
            value={password}
            required
          />
        </div>
        <div className={style.formGroup}>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
}
