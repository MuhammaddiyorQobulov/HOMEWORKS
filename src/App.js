import React, { Component } from "react";
import Counter from "./components/counter";
import "./App.scss";

class App extends Component {
  state = {
    value: 0,
    prevValue: 0,
  };

  handleCount = () => {
    this.setState({ value: this.state.value + 1, prevValue: this.state.value });
  };

  handleReset = () => {
    this.setState({ value: 0, prevValue: this.state.value });
  };

  handlePrevValue = () => {
    this.setState({ value: this.state.prevValue });
  };

  render() {
    return (
      <div className="App-container bg-dark p-5 m-5 col-4">
        <div onClick={this.handleCount} className="value bg-light ">
          <h1>{this.state.value}</h1>
        </div>
        <Counter
          reset={this.handleReset}
          count={this.handleCount}
          back={this.handlePrevValue}
        />
      </div>
    );
  }
}

export default App;
