export const selectActiveUsers = (state) => state.dashboard.activeUsers;
export const selectUsername = (state) => state.dashboard.username;

export const selectLocalStream = (state) => state.call.localStream;
export const selectRemoteStream = (state) => state.call.remoteStream;
export const selectCallState = (state) => state.call.callState;
export const selectCallerUsername = (state) => state.call.callerUsername;
export const selectCallingDialogVisible = (state) =>
  state.call.callingDialogVisible;
export const selectCallRejected = (state) => state.call.callRejected;
export const selectLocalCameraEnabled = (state) =>
  state.call.localCameraEnabled;
export const selectLocalMicrophoneEnabled = (state) =>
  state.call.localMicrophoneEnabled;
export const selectScreenSharingActive = (state) =>
  state.call.screenSharingActive;
export const selectIsGroupCallActive = (state) => state.call.groupCallActive;
