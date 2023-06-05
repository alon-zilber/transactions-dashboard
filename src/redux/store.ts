import { combineReducers, configureStore } from "@reduxjs/toolkit";
import transactionsSlice from "./transactions/transactionsSlice";

const rootReducer = combineReducers({
  transactions: transactionsSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});

export type AppState = ReturnType<typeof rootReducer>;
