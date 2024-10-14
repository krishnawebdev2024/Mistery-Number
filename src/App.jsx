
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import React from "react";
import Gamelogic from "./components/Gamelogic"; // Adjust the path based on your folder structure

const App = () => {
  return (
    <div className="App">
    
     <div>
    <NavBar />

    <div>content</div>

    <Footer />
  </div>
)
      <h1 className="text-2xl font-bold text-center">Mystery-Number</h1>
      <div className="flex justify-center">
        <Gamelogic />
      </div>
    </div>
  );
};

export default App;

