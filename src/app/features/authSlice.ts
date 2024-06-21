import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type InitiaStateTypes = {
  success: boolean;
  token: string | null | undefined;
};

const initialState: InitiaStateTypes = {
  success: false,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loggedIn: (state, { payload }: PayloadAction<InitiaStateTypes>) => {
      state.success = payload.success;
      state.token = payload.token;
    },
    loggedOut: (state) => {
      state.success = false;
      state.token = null;
    },
  },
});

export const { loggedIn, loggedOut } = authSlice.actions;
export default authSlice.reducer;
