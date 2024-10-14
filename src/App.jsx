
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import React from "react";
import Gamelogic from "./components/Gamelogic"; // Adjust the path based on your folder structure

const App = () => {
  return (

    <div>
      <NavBar />

      <div className="flex justify-center">
        <Gamelogic /></div>

      <Footer />
    </div>

  );
};

export default App;
