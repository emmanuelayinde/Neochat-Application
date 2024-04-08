import { createSlice } from "@reduxjs/toolkit";


export interface callState {
    isSpeakerOn: boolean,
    isMicOn: boolean
}

const initialState: callState = {
    isSpeakerOn: true,
    isMicOn: true,

};

const callSlice = createSlice({
    name: "call",
    initialState,
    reducers: {
        toggleSpeaker: (state) => {
            state.isSpeakerOn = !state.isSpeakerOn
        },
        toggleMic: (state) => {
            state.isMicOn = !state.isMicOn
        },
    },
});

export const { toggleMic, toggleSpeaker } = callSlice.actions;
export default callSlice.reducer;