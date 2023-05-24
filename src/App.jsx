import { useState } from "react";
import Test from "./components/otherComponents";
import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import Features from "./components/features";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <>
      <Test />
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </>
  );
}

export default App;
