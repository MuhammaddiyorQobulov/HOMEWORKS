import React, { Component } from "react";
import "./circle-parcent.scss";

class CircleParcent extends Component {
  render() {
    const { parcent, color } = this.props;
    const circle = 440 - (440 * parcent) / 100;
    return (
      <div className="circle-parcent" style={{ "--circle-parcent": circle }}>
        <div className="skill">
          <div className="outor">
            <div className="inner">
              <div className="number">{parcent}%</div>
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="160px"
            height="160px"
          >
            <defs>
              <linearGradient id="GradientColor">
                <stop offset={color ? "0%" : "100%"} stopColor="#118EE8" />
                {color && <stop offset="100%" stopColor={color} />}
              </linearGradient>
            </defs>
            <circle cx="80" cy="80" r="70" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    );
  }
}

export default CircleParcent;
