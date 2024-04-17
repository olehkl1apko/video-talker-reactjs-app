import { createSlice } from "@reduxjs/toolkit";

export const callStates = {
  CALL_UNAVAILABLE: "CALL_UNAVAILABLE",
  CALL_AVAILABLE: "CALL_AVAILABLE",
  CALL_REQUESTED: "CALL_REQUESTED",
  CALL_IN_PROGRESS: "CALL_IN_PROGRESS",
};

const callSlice = createSlice({
  name: "call",
  initialState: {
    localStream: null,
    callState: callStates.CALL_UNAVAILABLE,
    callingDialogVisible: false,
    callerUsername: "",
    callRejected: {
      rejected: false,
      reason: "",
    },
    remoteStream: null,
    localCameraEnabled: true,
    localMicrophoneEnabled: true,
    screenSharingActive: false,
    groupCallActive: false,
    groupCallStreams: [],
    message: {
      received: false,
      content: "",
    },
  },
  reducers: {
    setLocalStream: (state, action) => {
      state.localStream = action.payload;
    },
    setCallState: (state, action) => {
      state.callState = action.payload;
    },
    setCallingDialogVisible: (state, action) => {
      state.callingDialogVisible = action.payload;
    },
    setCallerUsername: (state, action) => {
      state.callerUsername = action.payload;
    },
    setCallRejected: (state, action) => {
      state.callRejected = action.payload;
    },
    setRemoteStream: (state, action) => {
      state.remoteStream = action.payload;
    },
    setLocalMicrophoneEnabled: (state, action) => {
      state.localMicrophoneEnabled = action.payload;
    },
    setLocalCameraEnabled: (state, action) => {
      state.localCameraEnabled = action.payload;
    },
    setScreenSharingActive: (state, action) => {
      state.screenSharingActive = action.payload;
    },
    resetCallDataState: (state) => {
      state.remoteStream = null;
      state.screenSharingActive = false;
      state.callerUsername = "";
      state.localMicrophoneEnabled = true;
      state.localCameraEnabled = true;
      state.callingDialogVisible = false;
    },
    setGroupCallActive: (state, action) => {
      state.groupCallActive = action.payload;
    },
    setGroupCallIncomingStreams: (state, action) => {
      state.groupCallStreams = action.payload;
    },
    clearGroupCallData: (state) => {
      state.groupCallActive = false;
      state.groupCallStreams = [];
      state.callState = "CALL_AVAILABLE";
      state.localMicrophoneEnabled = true;
      state.localCameraEnabled = true;
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    },
  },
});

export const {
  setLocalStream,
  setCallState,
  setCallingDialogVisible,
  setCallerUsername,
  setCallRejected,
  setRemoteStream,
  setLocalMicrophoneEnabled,
  setLocalCameraEnabled,
  setScreenSharingActive,
  resetCallDataState,
  setGroupCallActive,
  setGroupCallIncomingStreams,
  clearGroupCallData,
  setMessage,
} = callSlice.actions;

export default callSlice.reducer;
