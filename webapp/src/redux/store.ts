import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducer/userReducer";
import socketReducer from "./reducer/socketReducer";
import callReducer from "./reducer/callReducer";
import layoutReducer from './reducer/layoutReducer'

const store = configureStore({
  reducer: {
    userReducer: userReducer,
    socketReducer: socketReducer,
    callReducer: callReducer,
    layoutReducer: layoutReducer
  },
});

export default store;