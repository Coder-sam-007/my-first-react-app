import React from "react";
import { TodoItem } from "./todoitem";

export const Todos = (props) => {
  // const handleDelete = () => {
  //   console.log("handle delete called");
  // };

  return (
    <div className="p-5 my-4 container bg-secondary rounded ">
      <h2 className="text-center">My Todos List</h2>
      <hr />
      {props.todos.map((todo) => (
        <TodoItem key={todo.title} todo={todo} onDelete={props.onDelete} />
      ))}
    </div>
  );
};
