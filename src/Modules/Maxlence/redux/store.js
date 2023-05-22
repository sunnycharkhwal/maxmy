import { configureStore } from "@reduxjs/toolkit";
import modalStateReducer from "./modalStateSlice";

export default configureStore({
    reducer: {
      state: modalStateReducer,
    },
  });