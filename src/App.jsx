import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import Home from "./components/Home";
import Gamelogic from "./components/Gamelogic";
import DiceGame from "./components/DiceGame";

const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lets-play" element={<Gamelogic />} />
          <Route path="/lets-dice" element={<DiceGame />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
