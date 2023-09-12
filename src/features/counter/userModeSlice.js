import { createSlice } from "@reduxjs/toolkit";
import { initialAuth } from "../../constant/data";

const initialState = {
  userModes: [],
  user: false,
};

export const userModeSlice = createSlice({
  name: "user_mode",
  initialState,
  reducers: {
    createUserMode: (state, action) => {
      state.userModes = action.payload;
    },
    login: (state, action) => {
      state.user = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const { createUserMode, login } = userModeSlice.actions;

export default userModeSlice.reducer;
