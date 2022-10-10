import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  step: "x",
  steps: [],
  ceils: ["", "", "", "", "", "", "", "", ""],
};
const ticTacToe = createSlice({
  name: "ticTac",
  initialState,
  reducers: {
    setValue: (state, idx) => {
      console.log(idx.payload);
      state.ceils[idx.payload] = state.step === "x" ? "x" : "o";
      state.step = state.step === "x" ? "o" : "x";
    },
    restart: (state) => {
      state = initialState;
      console.log(state);
      return state;
    },
  },
});

export const { setValue, restart } = ticTacToe.actions;
export default ticTacToe.reducer;
