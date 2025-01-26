import { createAsyncThunk } from "@reduxjs/toolkit";
import { authorizedFetch } from "@/lib/authorizedFetch.js";

export const getCompanyById = createAsyncThunk(
  'companies/getCompanyById',
  async (id, { _, rejectWithValue }) => {
    try {
      const response = await authorizedFetch(`${ import.meta.env.VITE_HACKATON_URL }/api/v1/companies/${ id }`)
      return await response.json();
    } catch (error) {
      return rejectWithValue('Somethins went wrong while getting companies');
    }
  }
);

export const updateCompanyById = createAsyncThunk(
  'companies/updateCompanyById',
  async ({ company, id }, { _, rejectWithValue }) => {
    try {
      const response = await authorizedFetch(`${ import.meta.env.VITE_HACKATON_URL }/api/v1/companies/${ id }`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(company),
      })
      return await response.json();
    } catch (error) {
      return rejectWithValue('Somethins went wrong while getting companies');
    }
  }
);
