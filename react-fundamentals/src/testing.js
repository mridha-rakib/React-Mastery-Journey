import React from "react";
import ReactDOM from "react-dom/client";

function Greeting() {
  return (
    <div>
      <h2>My first component</h2>
      <ul>
        <li>
          <a href="#">hello wrld</a>
        </li>
      </ul>
    </div>
  );
}
// function Greeting() {
//   return React.createElement("h1", {}, "Hello World");
// }
// function Greeting2() {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1", {}, "Hello World")
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Greeting />);
