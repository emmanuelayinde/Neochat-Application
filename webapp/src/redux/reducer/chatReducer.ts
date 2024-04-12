import { createSlice } from "@reduxjs/toolkit";


export interface chatState {
    isChatDrawerOpen: boolean
}

const initialState: chatState = {
    isChatDrawerOpen: false

};

const chatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {
        toggleChatDrawer: (state) => {
            state.isChatDrawerOpen = !state.isChatDrawerOpen
        },
    },
});

export const { toggleChatDrawer } = chatSlice.actions;
export default chatSlice.reducer;