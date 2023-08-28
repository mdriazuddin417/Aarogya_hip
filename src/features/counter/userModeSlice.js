import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userModes: {},
};

export const userModeSlice = createSlice({
  name: "user_mode",
  initialState,
  reducers: {
    createUserMode: (state, action) => {
      state.userModes = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { createUserMode } = userModeSlice.actions;

export default userModeSlice.reducer;
