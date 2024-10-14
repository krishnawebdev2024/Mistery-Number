import React, { useState } from "react";
import RollDice from "./RollDice"; // Import the RollDice component

const MyComponent = () => {
  const [computerRoll, setComputerRoll] = useState(false); // Track if the computer should roll

  const handlePlayerRoll = () => {
    // Trigger the computer's roll after 1 second
    setTimeout(() => {
      setComputerRoll(true); // Set state to trigger the computer roll
    }, 1000);
  };

  const handleComputerRollComplete = () => {
    // Reset the computer's roll state after it finishes
    setComputerRoll(false);
  };

  return (
    <div className="flex w-full flex-col items-center">
      {/* Top div with a message */}
      <div className="w-full text-center mb-4">
        <p className="text-lg font-bold">Roll the Dice</p>
      </div>

      <div className="flex w-full flex-row">
        {/* First card (Player Dice) */}
        <div className="card bg-slate-200 rounded-box grid h-60 flex-grow place-items-center">
          <RollDice
            size="100px"
            clickable={true}
            onRollComplete={handlePlayerRoll}
          />
          {/* Player's dice is clickable and triggers computer roll after 1 second */}
        </div>

        {/* Divider that remains horizontal on all screen sizes */}
        <div className="divider divider-horizontal">VS</div>

        {/* Second card (Computer Dice) */}
        <div className="card bg-slate-200 rounded-box grid h-60 flex-grow place-items-center">
          <RollDice
            size="100px"
            clickable={false}
            rollTrigger={computerRoll} // Automatically roll the computer dice when true
            onRollComplete={handleComputerRollComplete} // Reset after computer roll completes
          />
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
