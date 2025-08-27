import React, { useEffect, useState } from "react";

export default function DotGrid({ spacing = 32, dotSize = 1.5, height = 550, width = 1600 }) {
  const [waves, setWaves] = useState([]);

  // Calculate number of columns based on width (if width is a number)
  const gridWidth = typeof width === "number" ? width : 1600; // fallback for calculation
  const cols = Math.floor(gridWidth / spacing);
  const rows = Math.floor(height / spacing);

  useEffect(() => {
    const interval = setInterval(() => {
      // Pick a random dot position
      const x = Math.floor(Math.random() * cols);
      const y = Math.floor(Math.random() * rows);
      // Spawn 3 ripples with different delays
      const ripples = [0, 0.05, 0.1].map((delay, i) => ({
        x,
        y,
        id: Math.random().toString(36) + i,
        delay,
      }));
      setWaves((waves) => [...waves, ...ripples]);
      // Remove the wave after animation (e.g., 1s)
      setTimeout(() => {
        setWaves((waves) => waves.filter((w) => w.x !== x || w.y !== y));
      }, 1300); // slightly longer than the last ripple
    }, 2500); // every 2.5 seconds
    return () => clearInterval(interval);
  }, [cols, rows]);

  return (
    <div
      style={{
        width: "100%",
        height: `${height}px`,
        position: "relative",
        overflow: "hidden",
        backgroundImage: `radial-gradient(lightgray ${dotSize}px, transparent ${dotSize}px)`,
        backgroundSize: `${spacing}px ${spacing}px`,
      }}
    >
      {waves.map((wave) => (
        <span
          style={{
            position: "absolute",
            left: wave.x * spacing + spacing / 2,
            top: wave.y * spacing + spacing / 2,
            width: 3 * spacing,
            height: 3 * spacing,
            pointerEvents: "none",
            transform: "translate(-50%, -50%)",
            borderRadius: "50%",
            border: "2px solid #2c2c2cff", // Tailwind blue-400
            opacity: 0,
            animation: "dot-wave 1s ease-out",
            animationDelay: `${wave.delay}s`,
          }}
        />
      ))}
      {/* Add keyframes for the wave animation */}
      <style>
        {`
          @keyframes dot-wave {
            0% {
              opacity: 1.0;
              transform: translate(-50%, -50%) scale(0.1);
            }
        
            100% {
              opacity: 0.0;
              transform: translate(-50%, -50%) scale(1.0);
            }
          }
        `}
      </style>
    </div>
  );
  
  // return (
  //     <div
  //       style={{
  //         width: "100%",
  //         height: `${height}px`,
  //         backgroundImage: `radial-gradient(lightgray ${dotSize}px, transparent ${dotSize}px)`,
  //         backgroundSize: `${spacing}px ${spacing}px`,
  //       }}
  //     ></div>
  // );
}
