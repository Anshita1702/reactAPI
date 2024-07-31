import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Nav from "./components/Nav";
import Home from "./components/Home";


const App = () => {
  return (
    <div className="mt-10 mx-auto w-[80%] bg-zinc-200  p-10">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </div>
  );
};

export default App;
