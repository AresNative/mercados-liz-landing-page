import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "@/store/reducers";
import usersReducer from "@/store/reducerUser";
import { EnvConfig } from "@/utils/env.config";

const config = EnvConfig();

export const store = configureStore({
  reducer: {
    filters: filterReducer,
    users: usersReducer,
  },
  devTools: config.mode !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
