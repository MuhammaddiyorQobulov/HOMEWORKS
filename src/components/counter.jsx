import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div className="counter">
        <button onClick={this.props.reset} className="reset btn btn-danger">
          Reset
        </button>
        <button onClick={this.props.count} className="count btn btn-primary">
          Count
        </button>
        <button onClick={this.props.back} className="back btn btn-warning">
          Back
        </button>
      </div>
    );
  }
}
export default Counter;
