import { configureStore } from "@reduxjs/toolkit";

import dashboardReducer from "./dashboardSlice";
import callReducer from "./callsSlice";

const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
    call: callReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["call/setLocalStream"],
      },
    }),
});

export default store;
