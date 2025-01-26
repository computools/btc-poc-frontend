import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTokens = createAsyncThunk(
  'auth/fetchTokens',
  async (params, {_, rejectWithValue}) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_HACKATON_URL}/api/v1/login?username=${params.email.trim()}&password=${params.password.trim()}`, {
        method: 'POST',
      });
      const data = await response.json();
      localStorage.setItem('access_token', data.access_token);
      localStorage.setItem('refresh_token', data.refresh_token);
      return data;
    } catch (error) {
      return rejectWithValue("Invalid credentials");
    }
  }
);