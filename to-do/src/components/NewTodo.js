import React, { useState } from "react";
import style from "./NewTodo.module.css";

const NewTodo = () => {
  const [todo, setTodo] = useState({ title: "", desc: "" });

  const { title, desc } = todo;

  const handleChange = (event) => {
    const name = event.target.name;
    console.log(name);
    setTodo((oldTodo) => {
      return { ...oldTodo, [name]: event.target.value };
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <div className={style["form-field"]}>
        <label htmlFor="title">Title </label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={handleChange}
        />
      </div>
      <div className={style["form-field"]}>
        <label htmlFor="desc">Desc</label>
        <textarea
          type="text"
          id="desc"
          name="desc"
          value={desc}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Add todo</button>
    </form>
  );
};

export default NewTodo;
