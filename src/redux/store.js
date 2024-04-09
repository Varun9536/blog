import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./Slice";
export const store = configureStore({
    reducer : authSlice.reducer
})