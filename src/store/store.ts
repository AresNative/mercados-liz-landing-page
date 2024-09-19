import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "@/store/reducers";
export const store = configureStore({
  reducer: {
    filters: filterReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
