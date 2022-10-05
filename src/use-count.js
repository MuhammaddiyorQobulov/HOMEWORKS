import React, { useState } from "react";

const reducer = (state, option) => {
  switch (option.type) {
    case "INCREMENT": {
      const newValue = state.value + state.num;
      return {
        ...state,
        value: newValue,
      };
    }

    case "ADD1": {
      const newValue = state.value + 1;
      return {
        ...state,
        value: newValue,
      };
    }
    case "REMOVE1": {
      const newValue = state.value - 1;
      return {
        ...state,
        value: newValue,
      };
    }

    case "DECREMENT": {
      const newValue = state.value - state.num;
      return {
        ...state,
        value: newValue,
      };
    }
    case "ASYNC": {
      const newValue = state.value + state.num;
      return {
        ...state,
        value: newValue,
      };
      break;
    }

    case "ODD": {
      const newValue = state.value + (state.value % 2 === 1 && state.num);
      return {
        ...state,
        value: newValue,
      };
    }

    default:
  }
};

export function useCount(num) {
  const [count, setCount] = useState({
    value: 0,
    num: num,
  });

  const dispatch = (option) => setCount(reducer(count, option));
  const inputValue = (num) => setCount({ ...count, num: Math.floor(num) });

  return [count, { dispatch, inputValue }];
}
