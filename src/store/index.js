import { configureStore } from "@reduxjs/toolkit";

import dashboardReducer from "./dashboardSlice";
import callReducer from "./callsSlice";

const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
    call: callReducer,
  },
});

export default store;
