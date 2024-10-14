import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Gamelogic from "./components/Gamelogic"; // Adjust the path based on your folder structure

const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/lets-play" element={<Gamelogic />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
