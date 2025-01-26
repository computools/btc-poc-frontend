import { createSlice } from "@reduxjs/toolkit";
import { fetchReports, deleteReportsById,createReport } from "./reportsAction";

const initialState = {
  error: null,
  loading: false,
  reports: [],
};

const reportsSlice = createSlice({
  name: "reports",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReports.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(fetchReports.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.reports = action.payload;
      })
      .addCase(fetchReports.rejected, (state, action) => {
        state.error = action.payload || "An error occurred";
        state.loading = false;
      })
      .addCase(deleteReportsById.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(deleteReportsById.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(deleteReportsById.rejected, (state, action) => {
        state.error = action.payload || "An error occurred";
        state.loading = false;
      })
      .addCase(createReport.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(createReport.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(createReport.rejected, (state, action) => {
        state.error = action.payload || "An error occurred";
        state.loading = false;
      });
  },
});

export const {} = reportsSlice.actions;

export default reportsSlice.reducer;
