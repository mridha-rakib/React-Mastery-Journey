import React from "react";

const HoverCounter = ({ count, incrementCount, theme }) => {
  const style =
    theme === "dark"
      ? {
          backgroundColor: "#03dfd324",
          color: "#ffffff",
        }
      : null;

  return (
    <div>
      <h1 style={style} onMouseOver={incrementCount}>
        Hover {count} times
      </h1>
    </div>
  );
};

export default HoverCounter;
