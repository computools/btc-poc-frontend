import {createAsyncThunk} from "@reduxjs/toolkit";
import {authorizedFetch} from "@/lib/authorizedFetch.js";

export const fetchTokens = createAsyncThunk(
    'auth/fetchTokens',
    async (params, {_, rejectWithValue}) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_HACKATON_URL}/api/v1/login?username=${params.email.trim()}&password=${params.password.trim()}`, {
                method: 'POST',
            });
            return await response.json();
        } catch (error) {
            return rejectWithValue("Invalid credentials");
        }
    }
);

export const logOut = createAsyncThunk(
    'auth/logOut',
    async (params, {_, rejectWithValue}) => {
        const refreshToken = localStorage.getItem('refresh_token');
        try {
            const response = await authorizedFetch(`${import.meta.env.VITE_HACKATON_URL}/api/v1/logout?refresh_token=${refreshToken}`, {
                method: 'POST',
            })

            if (response.ok) {
                localStorage.removeItem("access_token");
                localStorage.removeItem("refresh_token");
                localStorage.removeItem("name");
                localStorage.removeItem("role");
            }
            return response.status;
        } catch (error) {
            return rejectWithValue("Invalid credentials");
        }
    }
);