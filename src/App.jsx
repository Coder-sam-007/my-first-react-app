import { useEffect, useState } from "react";
import Test from "./components/otherComponents";
import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import Features from "./components/features";
import Footer from "./components/Footer";
import { Todos } from "./components/todos";
import { AddTodo } from "./components/AddTodo";
import "./App.css";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const [todos, setTodo] = useState(initTodo);

  const handleDelete = (todo) => {
    setTodo(todos.filter((todoItem) => todoItem != todo));
  };

  const addTodo = (title, desc) => {
    let sno;
    if (todos.length == 0) sno = 0;
    else sno = todos[todos.length - 1].sno + 1;

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };

    setTodo([...todos, myTodo]);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Test />
      <Navbar title="Task tracker" namde={true} />
      <Hero />
      <Features />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={handleDelete} />
      <Footer />
    </>
  );
}

export default App;
