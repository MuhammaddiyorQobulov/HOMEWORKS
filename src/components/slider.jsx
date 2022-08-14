import React, { Component } from "react";
import CircleParcent from "./circle-parcent/circle-parcent";
import Horizontal from "./horizontal-parcent";
import "./slider.scss";
class Slider extends Component {
  state = {
    sliderWidth: 600,
    parcent: 33,
  };
  handleClick = (e) => {
    console.log(e);
    const width = e.clientX - 50;
    console.log(e.type);
    const parcent =
      (width * 100) / 1800 + (((width * 100) / 1800) % 10 > 5 ? 1 : 0);

    this.setState({ sliderWidth: width, parcent: parseInt(parcent) });
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
        <CircleParcent parcent={parcent} />
      </>
    );
  }
}

export default Slider;
