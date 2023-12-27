import React, { Component } from "react";

export class EventBinding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleClicked() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClicked.bind(this)}>Increment</button>
      </div>
    );
  }
}

export default EventBinding;
