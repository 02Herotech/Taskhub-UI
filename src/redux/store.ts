import { configureStore } from "@reduxjs/toolkit";

import { setupListeners } from "@reduxjs/toolkit/query";
import { serviceProviderApi } from "./features/service-provider/api";
import { authApi } from "./features/auth/api";

export const store = configureStore({
  reducer: {
    [serviceProviderApi.reducerPath]: serviceProviderApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      serviceProviderApi.middleware,
      authApi.middleware,
    ]),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
