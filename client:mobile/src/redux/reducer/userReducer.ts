// src/reducers/counterSlice.ts
import { createSlice } from "@reduxjs/toolkit";
import { userState } from "../type";

const initialState: userState = {
  user: {} || null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    createUser: (state, action) => {
      state.user = action.payload;
    },
    deleteUser: (state) => {
      state.user = null;
    },
  },
});

export const { createUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
