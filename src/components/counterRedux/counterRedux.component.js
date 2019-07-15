import React, { Component } from "react";
import { incr, decr } from "../../actions/counterActions";

class CounterRedux extends Component {
  increament = () => {
    this.props.store.dispatch(incr());
  };

  decreament = () => {
    this.props.store.dispatch(decr());
  };

  render() {
    return (
      <div>
        <p>{this.props.store.getState()}</p>
        <button onClick={this.increament}>+</button>
        <button onClick={this.decreament}>-</button>
      </div>
    );
  }
}
export default CounterRedux;
