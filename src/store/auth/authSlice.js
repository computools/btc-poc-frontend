import {createSlice} from "@reduxjs/toolkit";
import {fetchTokens, logOut} from "./authAction";
import {jwtDecode} from "jwt-decode";

const initialState = {
    error: null,
    loading: false,
    accessToken: "",
    refreshToken: "",
    name: "",
    role: ""
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
                const payload = jwtDecode(action.payload.access_token);
                state.name = payload.name.split(' ')[0];
                const roleMatch = payload.preferred_username.match(/admin|guest/);
                if (roleMatch) {
                    state.role = roleMatch[0];
                }
            })
            .addCase(fetchTokens.rejected, (state, action) => {
                state.error = action.payload
                state.loading = false;
            })
            .addCase(logOut.pending, (state) => {
                state.error = null;
                state.loading = true;
            })
            .addCase(logOut.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.accessToken = "";
                state.refreshToken = "";
                state.name = "";
                state.role = "";
            })
            .addCase(logOut.rejected, (state, action) => {
                state.error = action.payload
                state.loading = false;
            })
    }
});

export const {} = authSlice.actions;

export default authSlice.reducer;