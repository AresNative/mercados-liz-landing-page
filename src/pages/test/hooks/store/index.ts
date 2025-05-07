import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { api } from "@/pages/test/hooks/reducers/api";
import { auth } from "@/pages/test/hooks/reducers/auth";
import { EnvConfig } from "@/pages/test/utils/constants/env.config";

import dropDownReducer from "@/pages/test/hooks/reducers/drop-down";
import filterData from "@/pages/test/hooks/reducers/filter";

import cartReducer from "@/pages/test/hooks/slices/cart";
import appReducer from "@/pages/test/hooks/slices/app";

const config = EnvConfig();
export const store = configureStore({
  reducer: {
    dropDownReducer,
    filterData,
    cart: cartReducer,
    app: appReducer,
    [api.reducerPath]: api.reducer,
    [auth.reducerPath]: auth.reducer,
  },
  devTools: /* config.mode !== "production" */ true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([api.middleware, auth.middleware]),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
