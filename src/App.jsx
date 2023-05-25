import { useState } from "react";
import Test from "./components/otherComponents";
import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import Features from "./components/features";
import Footer from "./components/Footer";
import { Todos } from "./components/todos";
import "./App.css";

function App() {
  const [todos, setTodo] = useState([
    {
      title: "Complete homework",
      desc: "Finish math and science assignments.",
    },
    {
      title: "Go grocery shopping",
      desc: "Buy milk, bread, and fruits.",
    },
    {
      title: "Call a friend",
      desc: "Catch up and make plans to meet.",
    },
    {
      title: "Clean the house",
      desc: "Vacuum, dust, and organize belongings.",
    },
    {
      title: "Exercise",
      desc: "Go for a run or do a workout at the gym.",
    },
  ]);

  const handleDelete = (todo) => {
    console.log("handle delete called", todo);
    setTodo(todos.filter((todoItem) => todoItem != todo));
  };

  return (
    <>
      <Test />
      <Navbar title="Task tracker" namde={true} />
      <Hero />
      <Features />
      <Todos todos={todos} onDelete={handleDelete} />
      <Footer />
    </>
  );
}

export default App;
