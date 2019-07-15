import React, { Component } from "react";
//import Counter from "./components/counter/counter.component";
import CounterRedux from "./components/counterRedux/counterRedux.component";

class App extends Component {
  render() {
    return (
      <div className="App">
        <CounterRedux store={this.props.store} />
      </div>
    );
  }
}

export default App;
