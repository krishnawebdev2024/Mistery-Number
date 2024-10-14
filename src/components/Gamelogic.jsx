import React, { useState } from "react";

const Gamelogic = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [rollingNumber, setRollingNumber] = useState("");
  const [playerGuess, setPlayerGuess] = useState("");
  const [computerNumber, setComputerNumber] = useState("");
  const [result, setResult] = useState("");

  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 6) + 1;
  };

  const handleInputChange = (e) => {
    setPlayerGuess(e.target.value);
  };

  const handlePlay = () => {
    const playerNum = parseInt(playerGuess);

    if (isNaN(playerNum) || playerNum < 1 || playerNum > 6) {
      setErrorMessage("Number must be between 1-6");
      return;
    }

    setErrorMessage("");
    const randomNum = generateRandomNumber();
    setComputerNumber(randomNum);

    if (playerNum === randomNum) {
      setResult("W");
    } else {
      setResult("L");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-indigo-500 to-purple-500">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-sm w-full text-center">
        <h2 className="text-2xl font-semibold mb-4">Guess the Number</h2>

        <input
          type="text"
          placeholder="Enter a number 1-6"
          className="input input-bordered w-full p-2 mb-4 text-center border-2 border-indigo-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={playerGuess}
          onChange={handleInputChange}
        />

        {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}

        <button
          className="px-6 py-2 mb-4 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow-md transition duration-300"
          onClick={handlePlay}
        >
          Play
        </button>

        <input
          type="text"
          placeholder="Computer's number"
          className="input input-bordered w-full p-2 mb-4 text-center border-2 border-indigo-300 rounded bg-gray-100"
          value={computerNumber}
          readOnly
        />

        {result && (
          <p
            className={`text-lg font-bold mt-4 ${
              result === "W" ? "text-green-500" : "text-red-500"
            }`}
          >
            {result === "W" ? "You Win!" : "You Lose!"}
          </p>
        )}
      </div>
    </div>
  );
};

export default Gamelogic;
