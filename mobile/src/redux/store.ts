import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducer/userReducer";
import socketReducer from "./reducer/socketReducer";

const store = configureStore({
  reducer: {
    userReducer: userReducer,
    socketReducer: socketReducer
  },
});

export default store;
