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
      {props.todos.length === 0 ? (
        <h3 className="text-center">All Todo Items are Completed!</h3>
      ) : (
        props.todos.map((todo) => {
          return (
            <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
          );
        })
      )}
    </div>
  );
};
