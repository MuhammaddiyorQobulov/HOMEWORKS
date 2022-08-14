import React, { Component } from "react";
import { ceil } from "lodash";
import "./slider.scss";

class Slider extends Component {
  state = {
    dot1: 20,
    dot2: 55,
  };
  handleClick = (e) => {
    const { dot1, dot2 } = this.state;
    const width = e.pageX - 50;
    const parcent = (width * 100) / e.target.clientWidth;
    this.setState({
      dot1:
        Math.abs(parcent - dot1) < Math.abs(parcent - dot2) ? parcent : dot1,
      dot2:
        Math.abs(parcent - dot1) > Math.abs(parcent - dot2) ? parcent : dot2,
    });
    console.log(parcent);
  };

  render() {
    const { handleClick } = this;
    const { dot1, dot2 } = this.state;

    return (
      <div className="container">
        <div
          className="slider"
          onClick={handleClick}
          style={{
            "--dot1": `${dot1}%`,
            "--dot2": `${dot2}%`,
          }}
        >
          <span className="dot1">
            <nav className="dot1-value">{ceil(dot2, 1)}%</nav>
          </span>
          <span className="dot2">
            <nav className="dot2-value">{ceil(dot1, 1)}%</nav>
          </span>
        </div>
        <button
          className="showDistance"
          onClick={() => {
            const distance = ceil(Math.abs(dot1 - dot2), 1);
            alert(distance);
          }}
        >
          Distance
        </button>
      </div>
    );
  }
}

export default Slider;
