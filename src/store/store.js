import {combineReducers, configureStore} from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import companiesReducer from "./companies/companiesSlice.js";
import reportsReducer from "./reports/reportsSlice.js";

const loadAuthState = () => {
    try {
        const accessToken = localStorage.getItem("access_token");
        const refreshToken = localStorage.getItem("refresh_token");
        const name = localStorage.getItem("name");
        const role = localStorage.getItem("role");
        return {
            accessToken: accessToken || "",
            refreshToken: refreshToken || "",
            name: name || "",
            role: role || "",
            loading: false,
            error: null,
        };
    } catch (error) {
        console.error("Error loading auth data from localStorage:", error);
        return undefined;
    }
};

const saveAuthState = (authState) => {
    try {
        localStorage.setItem("access_token", authState.accessToken);
        localStorage.setItem("refresh_token", authState.refreshToken);
        localStorage.setItem("name", authState.name);
        const roleMatch = authState.role.match(/admin|guest/);
        if (roleMatch) {
            localStorage.setItem("role", roleMatch[0]);
        }
    } catch (error) {
        console.error("Error saving auth data to localStorage:", error);
    }
};

const reducer = combineReducers({
    auth: authReducer,
    companies: companiesReducer,
    reports: reportsReducer,
});

const preloadedState = {
    auth: loadAuthState(),
};

const store = configureStore({
    reducer,
    preloadedState,
});

store.subscribe(() => {
    const state = store.getState();
    saveAuthState(state.auth);
});

const authData = (state) => state.auth;
const reportsData = (state) => state.reports;
const companiesData = (state) => state.companies;

export {
    store,
    authData,
    reportsData,
    companiesData
}
