import { createSlice } from "@reduxjs/toolkit";
import { IUserProps } from "../../@types";

const initialState: IUserProps = {
  user: null,
  userToken: null
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    createUser: (state, action) => {
      console.log(action.payload)
      state.user = action.payload;
    },
    deleteUser: (state) => {
      state.user = null;
      state.userToken = null;
    },
    createUserToken: (state, action) => {
      state.userToken = action.payload;
    },
    deleteUserToken: (state) => {
      state.userToken = null
    },
    loginUser: (state, action) => {
      state.user = action.payload.user;
      state.userToken = action.payload.userToken;
    },
    logoutUser: (state) => {
      state.user = null
      state.userToken = null
    },
  },
});


export const { createUser, deleteUser, createUserToken, deleteUserToken, logoutUser, loginUser } = userSlice.actions
export default userSlice.reducer;
