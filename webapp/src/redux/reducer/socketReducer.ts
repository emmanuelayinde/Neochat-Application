import { createSlice } from "@reduxjs/toolkit";
import { socketState } from "../../@types";


const initialState: socketState = {
    isConnected: false,
    socket: null,
    socketId: null,
};

const socketSlice = createSlice({
    name: "socket",
    initialState,
    reducers: {
        connectSocket: (state, action) => {
            state = {
                isConnected: true,
                socket: action.payload.socket,
                socketId: action.payload.socketId
            }
        },
        disconnectSocket: (state) => {
            state = { isConnected: false, socketId: null, socket: null }
        },
    },
});

export const { connectSocket, disconnectSocket } = socketSlice.actions;
export default socketSlice.reducer;
