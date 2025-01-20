import React, { useState } from "react";
import "./App.css";
import Ball from "./components/Ball";

const App: React.FC = () => {
  const [speed, setSpeed] = useState(5);
  const [numBalls, setNumBalls] = useState(1);
  const [showSettings, setShowSettings] = useState(false);

  return (
    <div className="app">
      <div className="exercise">
        {[...Array(numBalls)].map((_, i) => (
          <Ball key={i} speed={speed} />
        ))}
      </div>                   
      <button className="settings-icon" onClick={() => setShowSettings(!showSettings)}>
        ⚙️
      </button>

      {showSettings && (
        <div className="settings-popup">
          <h3>Settings</h3>
          <label>
            Speed:
            <input
              type="range"
              min="1"
              max="20"
              value={speed}
              onChange={(e) => setSpeed(Number(e.target.value))}
            />
          </label>
          <label>
            Number of Balls:
            <div>
              <button onClick={() => setNumBalls((prev) => Math.max(prev - 1, 1))}>-</button>
              <span>{numBalls}</span>
              <button onClick={() => setNumBalls((prev) => prev + 1)}>+</button>
            </div>
          </label>
          <button onClick={() => setShowSettings(false)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default App;