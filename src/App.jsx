import React, { useState } from "react";
import { useCount } from "./use-count";

const num = 1;
const App = () => {
  const [count, { dispatch, inputValue }] = useCount(num);
  return (
    <div
      className="wrapper d-flex"
      style={{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        gap: "80px",
      }}
    >
      <div className="d-flex" style={{ gap: "30px", alignItems: "center" }}>
        <button
          onClick={() => dispatch({ type: "REMOVE1" })}
          className="btn btn-danger"
        >
          -
        </button>
        <span>{count.value}</span>
        <button
          onClick={() => dispatch({ type: "ADD1" })}
          className="btn btn-success"
        >
          +
        </button>
      </div>
      <div className="d-flex" style={{ gap: "30px", alignItems: "center" }}>
        <input
          type="number"
          className="input-group"
          style={{ width: "50px" }}
          onChange={(e) => inputValue(e.target.value)}
        />
        <button
          onClick={() => dispatch({ type: "INCREMENT" })}
          className="btn btn-primary"
        >
          Add amount
        </button>
        <button
          onClick={() =>
            setTimeout(() => {
              dispatch({ type: "ASYNC" });
            }, 1500)
          }
          className="btn btn-dark"
        >
          Add Async
        </button>
        <button
          onClick={() => dispatch({ type: "ODD" })}
          className="btn btn-warning"
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
};
export default App;
