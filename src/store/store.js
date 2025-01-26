import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import companiesReducer from "./companies/companiesSlice.js";
import reportsReducer from "./reports/reportsSlice.js";

const reducer = combineReducers({
  auth: authReducer,
  companies: companiesReducer,
  reports: reportsReducer
});

const authData = (state) => state.auth;
const reportsData = (state) => state.reports;
const companiesData = (state) => state.companies;

const store = configureStore({ reducer });

export {
  store,
  authData,
  reportsData,
  companiesData
}
