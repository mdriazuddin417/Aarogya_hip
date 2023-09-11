import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userModes: [
    {
      _id: "64ec4ceecd204dc0d139568c",
      healthID: "gautam_1999@sbx",
      authModes: ["MOBILE_OTP", "DEMOGRAPHICS", "PASSWORD", "AADHAAR_OTP"],
      __v: 0,
    },
  ],
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
