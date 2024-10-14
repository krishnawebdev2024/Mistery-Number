import React, { useState } from "react";

const Gamelogic = () => {
  //State holds Errormassage
  const [errorMessage, setErrorMessage] = useState("");
  // State for rolling number
  const [rollingNumber, setRollingNumber] = useState("");

  // State to hold player's guess
  const [playerGuess, setPlayerGuess] = useState("");

  // State to hold the computer's generated number
  const [computerNumber, setComputerNumber] = useState("");

  // State to hold the result (W or L)
  const [result, setResult] = useState("");

  // Function to generate a random number between 1 and 6
  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 6) + 1; // Generates a number between 1 and 6
  };

  // Function to handle the player input
  const handleInputChange = (e) => {
    setPlayerGuess(e.target.value); // Update player guess from input field
  };

  const handlePlay = () => {
    const playerNum = parseInt(playerGuess); // Convert input to number

    if (isNaN(playerNum) || playerNum < 1 || playerNum > 6) {
      setErrorMessage("Number must be between 1-6"); // Set error message if input is invalid
      return; // Exit the function early if invalid input
    }

    setErrorMessage(""); // Clear any previous error if input is valid
    const randomNum = generateRandomNumber(); // Generate computer's random number
    setComputerNumber(randomNum); // Set computer's number for display

    if (playerNum === randomNum) {
      setResult("W"); // Win if numbers match
    } else {
      setResult("L"); // Lose if numbers don't match
    }
  };

  return (
    <div className="flex justify-center">
      <div className="game-container">
        {/* Input for player to type their guess */}
        <input
          type="text"
          placeholder="number 1-6"
          className="input input-bordered w-full max-w-xs"
          value={playerGuess}
          onChange={handleInputChange} // Update the guess as player types
        />

        {errorMessage && <p className="text-red-500">{errorMessage}</p>}

        {/* Button for player to submit their guess */}
        <button
          className="btn btn-success"
          onClick={handlePlay} // Trigger the play logic when button is clicked
        >
          Play
        </button>

        {/* Input to display computer's generated number (read-only) */}
        <input
          type="text"
          placeholder="Computer's number"
          className="input input-bordered w-full max-w-xs"
          value={computerNumber} // Display the computer's number here
          readOnly // Prevent typing in this field
        />

        {/* Display the result (W or L) */}
        {result && (
          <p className="result">
            {result === "W" ? "You Win!" : "You Lose!"}{" "}
            {/* Show W or L result */}
          </p>
        )}
      </div>
    </div>
  );
};

export default Gamelogic;
