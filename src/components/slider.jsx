import React, { Component } from "react";
import CircleParcent from "./circle-parcent/circle-parcent";
import Horizontal from "./horizontal-parcent";
import { ceil } from "lodash";
import "./slider.scss";
class Slider extends Component {
  state = {
    sliderWidth: 600,
    parcent: 33,
  };
  handleClick = (e) => {
    const width = e.clientX - 50;
    const parcent = width / 18;
    this.setState({ sliderWidth: width, parcent: ceil(parcent, 1) });
  };

  render() {
    const { sliderWidth, parcent } = this.state;
    const { handleClick } = this;

    return (
      <>
        <div
          className="slider"
          style={{
            "--slider-width": `${sliderWidth}px`,
          }}
          onClick={handleClick}
          //   onMouseMove={handleClick}
        >
          {" "}
          <div className="slider-dot"></div>
          <div className="slider-box">
            <span className="dots">
              <nav>
                <p> A</p>
              </nav>
              <nav>
                <p> B</p>
              </nav>
              <nav>
                <p> C</p>
              </nav>
              <nav>
                <p> D</p>
              </nav>
              <nav>
                <p> E</p>
              </nav>
            </span>
          </div>
        </div>
        <Horizontal parcent={parcent} />
        <div className="parcentColor">
          <CircleParcent parcent={parcent} />
          <CircleParcent parcent={parcent} color="#118EE8" />
        </div>
      </>
    );
  }
}

export default Slider;
