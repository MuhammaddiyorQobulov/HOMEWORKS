import React, { Component } from "react";
import "./calculator.scss";
class Calculator extends Component {
  numbers = ["7", "8", "9", "4", "5", "6", "1", "2", "3", ".", 0, "%"];
  operators = ["+", "-", "*", "/"];
  status = false;
  state = {
    value: "",
    equal: false,
  };

  handleClick = (e) => {
    let { value, equal } = this.state;
    //      event ===== number
    if (this.numbers.includes(e.target.value)) {
      if (equal === true) {
        value = "";
        this.status = false;
        this.setState({ value: e.target.value, equal: false });
      } else this.status = false;
      this.setState({ value: value + e.target.value, equal: false });
    }

    //      event ===== operator
    if (this.operators.includes(e.target.value)) {
      if (this.status) {
        this.setState({
          value: value.substr(0, value.length - 1) + e.target.value,
        });
      } else this.status = true;
      this.setState({ value: value + e.target.value, equal: false });
    }
  };

  // handleClick = (e) => {
  //   let { value, equal } = this.state;
  //   console.log("status1 = ", this.status);
  //   console.log("state1 = ", this.state);
  //   if (this.operators.includes(e.target.value)) {
  //     if (this.status) {
  //       this.setState({
  //         value: value.substr(0, value.length - 1) + e.target.value,
  //       });
  //       return;
  //     }

  //     this.status = true;
  //     this.setState({ value: value + e.target.value, equal: false });
  //     return;
  //   }

  //   if (equal === true) {
  //     value = "";
  //     this.setState({ value: e.target.value, equal: false });
  //     return;
  //   }

  //   this.status = false;
  //   this.setState({ value: value + e.target.value });
  //   console.log("status2 = ", this.status);
  //   console.log("state2 = ", this.state);
  // };

  render() {
    const { value } = this.state;
    return (
      <div className="calculator m-5">
        <div className="value bg-light col-12" defaultValue={this.state.value}>
          {this.state.value}
        </div>
        <div className="digits">
          <div>
            <div className="clear-btns">
              <button
                className="btn btn-danger clear-btn col-7"
                onClick={() => {
                  this.status = false;
                  this.setState({
                    value: value.substr(0, value.length - 1),
                    equal: false,
                  });
                }}
              >
                Clear
              </button>
              <button
                className="btn btn-danger clear-btn col-5"
                onClick={() => {
                  this.setState({ value: "" });
                }}
              >
                AC
              </button>
            </div>
            <div className="numbers-btns">
              {this.numbers.map((number, idx) => (
                <button
                  key={idx}
                  onClick={this.handleClick}
                  className="btn btn-dark number-btn"
                  value={number}
                >
                  {number}
                </button>
              ))}
            </div>
          </div>
          <div className="operators-btns">
            {this.operators.map((operator, idx) => (
              <button
                onClick={this.handleClick}
                className="btn btn-warning operator-btn"
                value={operator}
                key={idx}
              >
                {operator}
              </button>
            ))}
            <button
              onClick={() => {
                try {
                  const result = String(eval(value));
                  this.setState({ value: result, equal: true });
                } catch (err) {
                  this.setState({ value: "Something Error", equal: true });
                }
              }}
              className="btn btn-success operator-btn equal"
              id="equal"
            >
              =
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
