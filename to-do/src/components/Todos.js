import React from "react";
import Todo from "./Todo";

import style from "./Todos.module.css";

const Todos = (props) => {
  return (
    <section className={style.todos}>
      {props.todos.map((todo) => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </section>
  );
};

export default Todos;
