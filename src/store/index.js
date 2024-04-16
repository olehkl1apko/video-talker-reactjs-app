import { configureStore } from "@reduxjs/toolkit";

import dashboardReducer from "./reducers/dashboardReducer";
import callReducer from "./reducers/callReducer";

const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
    call: callReducer,
  },
});

export default store;
