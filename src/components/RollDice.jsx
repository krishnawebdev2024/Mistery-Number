import React, { useState, useEffect } from "react";
import "./RollDice.css"; // External CSS file to handle cube styles

const RollDice = ({
  size,
  clickable = true,
  rollTrigger = false,
  onRollComplete,
}) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 }); // Track current rotation
  const [diceNumber, setDiceNumber] = useState(null); // Store the final dice number

  // Predefined rotation states for each face of the dice
  const rotations = [
    { number: 1, x: 0, y: 0 }, // Top face (1)
    { number: 2, x: 180, y: 0 }, // Bottom face (2)
    { number: 5, x: 90, y: 0 }, // Front face (5)
    { number: 6, x: -90, y: 0 }, // Back face (6)
    { number: 4, x: 0, y: 90 }, // Right face (4)
    { number: 3, x: 0, y: -90 }, // Left face (3)
  ];

  // Function to handle rolling the dice
  const rollDice = () => {
    const randomIndex = Math.floor(Math.random() * rotations.length); // Pick a random rotation
    const selectedRotation = rotations[randomIndex]; // Get the selected rotation
    setRotation({ x: selectedRotation.x, y: selectedRotation.y }); // Set the cube's rotation
    setDiceNumber(selectedRotation.number); // Set the final dice number

    // If a callback is provided, call it with the dice number
    if (onRollComplete) {
      onRollComplete(selectedRotation.number);
    }
  };

  // Trigger roll when the rollTrigger prop changes to true
  useEffect(() => {
    if (rollTrigger) {
      rollDice();
    }
  }, [rollTrigger]);

  // Calculate depth based on size (half of size for translateZ)
  const depth = parseInt(size, 10) / 2;

  return (
    <div>
      <section className="container" style={{ width: size, height: size }}>
        {/* The cube element, which rotates when clicked */}
        <div
          id="cube"
          onClick={() => clickable && rollDice()} // Allow clicking if clickable is true
          style={{
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
            WebkitTransform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
            transition: "transform 1s",
            transformOrigin: "center",
            width: "100%",
            height: "100%",
          }}
        >
          {/* Cube faces */}
          <div
            className="front"
            style={{ transform: `translateZ(${depth}px)` }}
          >
            <span className="dot dot1"></span>
          </div>
          <div
            className="back"
            style={{ transform: `rotateX(180deg) translateZ(${depth}px)` }}
          >
            <span className="dot dot1"></span>
            <span className="dot dot2"></span>
          </div>
          <div
            className="right"
            style={{ transform: `rotateY(90deg) translateZ(${depth}px)` }}
          >
            <span className="dot dot1"></span>
            <span className="dot dot2"></span>
            <span className="dot dot3"></span>
          </div>
          <div
            className="left"
            style={{ transform: `rotateY(-90deg) translateZ(${depth}px)` }}
          >
            <span className="dot dot1"></span>
            <span className="dot dot2"></span>
            <span className="dot dot3"></span>
            <span className="dot dot4"></span>
          </div>
          <div
            className="top"
            style={{ transform: `rotateX(-90deg) translateZ(${depth}px)` }}
          >
            <span className="dot dot1"></span>
            <span className="dot dot2"></span>
            <span className="dot dot3"></span>
            <span className="dot dot4"></span>
            <span className="dot dot5"></span>
          </div>
          <div
            className="bottom"
            style={{ transform: `rotateX(90deg) translateZ(${depth}px)` }}
          >
            <span className="dot dot1"></span>
            <span className="dot dot2"></span>
            <span className="dot dot3"></span>
            <span className="dot dot4"></span>
            <span className="dot dot5"></span>
            <span className="dot dot6"></span>
          </div>
        </div>
      </section>

      {/* Display the final dice number */}
      <p>The dice shows: {diceNumber}</p>
    </div>
  );
};

export default RollDice;
