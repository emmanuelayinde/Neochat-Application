import { createSlice } from "@reduxjs/toolkit";
import { ILayoutProps } from "../../@types";

const initialState: ILayoutProps = {
  currentTabs: "user-chats",
  currentScreen: undefined,
  themeMode: 'dark'
};

const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    setThemeMode: (state, actions) => {
      state.themeMode = actions.payload
    },
    setCurrentTab: (state, actions) => {
      state.currentTabs = actions.payload
    },
    setCurrentScreen: (state, actions) => {
      state.currentScreen = actions.payload
    },
    resetScreen: (state) => {
      state.currentScreen = undefined
    }
  },
});


export const { setCurrentScreen, resetScreen, setCurrentTab, setThemeMode } = layoutSlice.actions
export default layoutSlice.reducer;