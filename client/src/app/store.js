import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../features/authSlice.js';
import { authApi } from '../features/api/authApi.js'; // Import the API slice

export const store = configureStore({
    reducer: {
        auth: authReducer,
        [authApi.reducerPath]: authApi.reducer, // ✅ Add the RTK Query reducer here
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApi.middleware), // ✅ Add the RTK Query middleware here
});
