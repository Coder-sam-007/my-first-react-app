import React from "react";

export const TodoItem = ({ todo, onDelete }) => {
  return (
    <div className=" alert alert-success d-flex justify-content-between align-items-center flex-wrap mx-5">
      <div>
        <h3>{todo.title}</h3>
        <p>{todo.desc}</p>
      </div>
      <button
        className="btn btn-danger"
        onClick={() => {
          onDelete(todo);
        }}
      >
        Delete
      </button>
    </div>
  );
};
