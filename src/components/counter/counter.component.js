import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }

  increament = () => {
    this.setState({
      value: this.state.value + 1
    });
  };
  decrement = () => {
    this.setState({
      value: this.state.value - 1
    });
  };
  render() {
    return (
      <div>
        <h1>{this.state.value}</h1>
        <button onClick={this.increament}>+</button>&emsp;
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}

export default Counter;
