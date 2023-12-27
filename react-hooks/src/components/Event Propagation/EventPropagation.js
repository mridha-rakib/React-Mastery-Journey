import React from "react";
import "./style.css";

export default function EventPropagation() {
  const handleParentClicked = (event) => {
    console.log("Parent event");
  };
  const handleChildClicked = (e) => {
    e.stopPropagation();
    console.log("Child event");
  };

  return (
    <div className="parent" onClick={handleParentClicked}>
      <h1>Welcome Everyone</h1>
      <button onClick={handleChildClicked}>+</button>
    </div>
  );
}
