import { createSlice } from "@reduxjs/toolkit";

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    username: "",
    activeUsers: [],
    groupCallRooms: [],
  },
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setActiveUsers: (state, action) => {
      state.activeUsers = action.payload;
    },
    setGroupCalls: (state, action) => {
      state.groupCallRooms = action.payload;
    },
  },
});

export const { setUsername, setActiveUsers, setGroupCalls } =
  dashboardSlice.actions;
export default dashboardSlice.reducer;
