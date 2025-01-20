import React, { useState, useEffect } from "react";


// Ball component
const Ball: React.FC<{ speed: number }> = ({ speed }) => {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [direction, setDirection] = useState({ dx: 1, dy: 1 });

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => {
        const newX = prev.x + direction.dx * speed;
        const newY = prev.y + direction.dy * speed;

        let newDx = direction.dx;
        let newDy = direction.dy;

        if (newX <= 0 || newX >= window.innerWidth - 40) newDx *= -1;
        if (newY <= 0 || newY >= window.innerHeight - 40) newDy *= -1;

        setDirection({ dx: newDx, dy: newDy });
        return { x: newX, y: newY };
      });
    }, 16);

    return () => clearInterval(interval);
  }, [direction, speed]);

  return (
    <div
      className="ball"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        backgroundColor: "#007BFF",
      }}
    ></div>
  );
};

export default Ball;