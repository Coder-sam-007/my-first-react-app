import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import Features from "./components/features";
import Footer from "./components/Footer";
import { Todos } from "./components/todos";
import { AddTodo } from "./components/AddTodo";
import "./App.css";
import Pricing from "./components/pricing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
      <Router>
        <Navbar title="Task tracker" namde={true} />

        <Routes>
          <Route exact path="/features" element={<Features />} />

          <Route
            exact
            path="/"
            element={
              <>
                <Hero />
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={handleDelete} />
              </>
            }
          />

          <Route exact path="/pricing" element={<Pricing />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
