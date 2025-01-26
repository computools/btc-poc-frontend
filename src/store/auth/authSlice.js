import { createSlice } from "@reduxjs/toolkit";
import { fetchTokens } from "./authAction";

const initialState = {
  error: null,
  loading: false,
  accessToken: "",
  refreshToken: "",
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTokens.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(fetchTokens.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.accessToken = action.payload.access_token;
        state.refreshToken = action.payload.refresh_token;
      })
      .addCase(fetchTokens.rejected, (state, action) => {
        state.error = action.payload
        state.loading = false;
      })
  }
});

export const {} = authSlice.actions;

export default authSlice.reducer;