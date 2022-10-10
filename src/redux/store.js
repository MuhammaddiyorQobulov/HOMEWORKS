import { configureStore } from "@reduxjs/toolkit";
import ticTacToeReducer from "./tic-tac-toe-reducer";
export const store = configureStore({
  reducer: {
    tictactoe: ticTacToeReducer,
  },
});
