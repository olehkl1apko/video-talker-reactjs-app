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
        ignoredActions: ["call/setLocalStream", "call/setCallState"],
        ignoredActionPaths: ["payload.localStream"],
      },
    }),
});

export default store;
