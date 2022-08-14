import React, { Component } from "react";
import "./horizontal-parcent.scss";
class Horizontal extends Component {
  render() {
    const { parcent } = this.props;
    return (
      <div
        style={{ "--parcent": `${parcent}%` }}
        className="horizontal-parcent"
      >
        <div className="line"></div>
        <div className="parcent">{parcent} %</div>
      </div>
    );
  }
}

export default Horizontal;
