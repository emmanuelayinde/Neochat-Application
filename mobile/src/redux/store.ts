import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducer/userReducer";
import socketReducer from "./reducer/socketReducer";
import callReducer from "./reducer/callReducer";

const store = configureStore({
  reducer: {
    userReducer: userReducer,
    socketReducer: socketReducer,
    callReducer: callReducer
  },
});

export default store;
