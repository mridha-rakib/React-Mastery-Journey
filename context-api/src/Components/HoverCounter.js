import React, { Component } from "react";

const HoverCounter = ({ count, incrementCount }) => {
  return (
    <div>
      <h1 onMouseOver={incrementCount}>Hover {count} times</h1>
    </div>
  );
};

export default HoverCounter;
