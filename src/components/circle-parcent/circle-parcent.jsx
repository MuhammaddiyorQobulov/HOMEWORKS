import React, { Component } from "react";
import "./circle-parcent.scss";

class CircleParcent extends Component {
  render() {
    const { parcent } = this.props;
    return (
      <div className="circle-parcent">
        <h1>CIRCLE</h1>
      </div>
    );
  }
}

export default CircleParcent;
