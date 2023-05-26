import React, { useState } from "react";

export const AddTodo = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();

    if (!title || !desc) alert("You have forgot title or desc");

    props.addTodo(title, desc);

    setTitle("");
    setDesc("");
  };

  return (
    <form className="container bg-secondary rounded p-4" onSubmit={submit}>
      <h3 className="mb-4"> Add Your TODOs </h3>
      <div className="mb-3 ">
        <label htmlFor="Todo_title" className="form-label">
          Todo Title
        </label>
        <input
          type="text"
          className="form-control"
          id="Todo_title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="Todo_desc" className="form-label">
          Todo Description
        </label>
        <input
          type="text"
          className="form-control"
          id="Todo_desc"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-success">
        Submit
      </button>
    </form>
  );
};
