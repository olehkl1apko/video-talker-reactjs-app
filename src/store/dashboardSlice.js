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
    setGroupCallRooms: (state, action) => {
      state.groupCallRooms = action.payload;
    },
  },
});

export const { setUsername, setActiveUsers, setGroupCallRooms } =
  dashboardSlice.actions;
export default dashboardSlice.reducer;
