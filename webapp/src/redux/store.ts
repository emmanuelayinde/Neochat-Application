import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducer/userReducer";
// import socketReducer from "./reducer/socketReducer";
import callReducer from "./reducer/callReducer";
import layoutReducer from './reducer/layoutReducer'
import chatReducer from "./reducer/chatReducer";

const store = configureStore({
  reducer: {
    userReducer: userReducer,
    // socketReducer: socketReducer,
    callReducer: callReducer,
    chatReducer: chatReducer,
    layoutReducer: layoutReducer
  },
});

export default store;