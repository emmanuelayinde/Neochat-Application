import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducer/userReducer";

const store = configureStore({
  reducer: {
    userReducer: userReducer,
  },
});

export default store;
