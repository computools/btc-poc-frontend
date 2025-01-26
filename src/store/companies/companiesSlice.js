import { createSlice } from "@reduxjs/toolkit";
import { getCompanyById, updateCompanyById } from "@/store/companies/companiesAction.jsx";

const initialState = {
  error: null,
  loading: false,
  company: {
    id: 1,
    name: "",
    short_name: "",
    public_id: "",
    physical_address: "",
    physical_city: "",
    physical_zip: "",
    postal_address: "",
    postal_city: "",
    postal_zip: "",
  },
};

const companiesSlice = createSlice({
  name: "companies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCompanyById.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(getCompanyById.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.company = action.payload;
      })
      .addCase(getCompanyById.rejected, (state, action) => {
        state.error = action.payload || "An error occurred";
        state.loading = false;
      })
      .addCase(updateCompanyById.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(updateCompanyById.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.company = action.payload;
      })
      .addCase(updateCompanyById.rejected, (state, action) => {
        state.error = action.payload || "An error occurred";
        state.loading = false;
      });
  },
});

export const {} = companiesSlice.actions;

export default companiesSlice.reducer;