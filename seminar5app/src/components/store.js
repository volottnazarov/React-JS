import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reducer";
import { reducerTheme } from "./reducerTheme";

export const store = configureStore({
    reducer: reducer,
});
export const storeTheme = configureStore({
    reducer: reducerTheme,
});