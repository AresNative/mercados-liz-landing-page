import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "@/store/reducers";
import usersReducer from "@/store/reducerUser";
export const store = configureStore({
  reducer: {
    filters: filterReducer,
    users: usersReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
