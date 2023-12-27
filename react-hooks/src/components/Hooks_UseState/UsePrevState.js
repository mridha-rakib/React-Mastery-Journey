import React, { useState } from "react";

export default function UsePrevState() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => {
      return prevCount + 1;
    });
    setCount((prevCount) => {
      return prevCount + 1;
    });
    setCount((prevCount) => {
      return prevCount + 1;
    });
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}
