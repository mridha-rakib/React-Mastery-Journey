import React from "react";
import { ReactDOM } from "react";

class Clock extends React.component {
  render() {
    return (
      <h1 className="heading">
        <span className="text">
          {new Date().toLocaleDateString(this.props.local)}
        </span>
      </h1>
    );
  }
}
