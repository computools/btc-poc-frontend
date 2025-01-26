import { createAsyncThunk } from "@reduxjs/toolkit";
import { authorizedFetch } from "@/lib/authorizedFetch.js";

export const fetchReports = createAsyncThunk(
  "reports/fetchByCompanyId",
  async (company_id, { _, rejectWithValue }) => {
    try {
      const response = await authorizedFetch(
        `${
          import.meta.env.VITE_HACKATON_URL
        }/api/v1/reports?company_id=${company_id}`
      );

      return await response.json();
    } catch (error) {
      return rejectWithValue(
        error.message || "Something went wrong while getting reports"
      );
    }
  }
);

export const deleteReportsById = createAsyncThunk(
  "reports/deleteReportsById",
  async ({ company_id, id }, { dispatch, rejectWithValue }) => {
    try {
      const response = await authorizedFetch(
        `${import.meta.env.VITE_HACKATON_URL}/api/v1/reports/${id}`,
        {
          method: "DELETE",
        }
      );

      dispatch(fetchReports(company_id));
      return response.status;
    } catch (error) {
      return rejectWithValue(
        error.message || "Something went wrong while deleting the report"
      );
    }
  }
);

export const createReport = createAsyncThunk(
  "reports/createReport",
  async (report, { dispatch, rejectWithValue }) => {
    try {
      const response = await authorizedFetch(
        `${import.meta.env.VITE_HACKATON_URL}/api/v1/reports`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(report),
        }
      );

      dispatch(fetchReports(report.company_id));
      return response.status;
    } catch (error) {
      return rejectWithValue(
        error.message || "Something went wrong while deleting the report"
      );
    }
  }
);
