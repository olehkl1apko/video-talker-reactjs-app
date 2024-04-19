import { useSelector, useDispatch } from "react-redux";

import { LocalVideoView } from "./LocalVideoView";
import { RemoteVideoView } from "./RemoteVideoView";
import { ConversationButtons } from "../ConversationButtons";
import { Messenger } from "../Messenger";
import { CallingDialog } from "./CallingDialog";
import { CallRejectedDialog } from "./CallRejectedDialog";
import { IncomingCallDialog } from "./IncomingCallDialog";
import {
  selectCallerUsername,
  selectCallingDialogVisible,
  selectCallRejected,
  selectCallState,
  selectLocalStream,
  selectMessage,
  selectRemoteStream,
} from "@/store/selectors";
import {
  callStates,
  setCallRejected,
  setLocalCameraEnabled,
  setLocalMicrophoneEnabled,
  setMessage,
} from "@/store/callsSlice";

export const DirectCall = () => {
  const localStream = useSelector(selectLocalStream);
  const remoteStream = useSelector(selectRemoteStream);
  const callState = useSelector(selectCallState);
  const callerUsername = useSelector(selectCallerUsername);
  const callingDialogVisible = useSelector(selectCallingDialogVisible);
  const callRejected = useSelector(selectCallRejected);
  const message = useSelector(selectMessage);

  const dispatch = useDispatch();

  const hideCallRejectedDialog = (callRejectedDetails) => {
    dispatch(setCallRejected(callRejectedDetails));
  };

  const handleCameraEnabled = (enabled) => {
    dispatch(setLocalCameraEnabled(enabled));
  };

  const handleMicrophoneEnabled = (enabled) => {
    dispatch(setLocalMicrophoneEnabled(enabled));
  };

  const handleDirectCallMessage = (received, content) => {
    dispatch(setMessage(received, content));
  };

  return (
    <>
      <LocalVideoView localStream={localStream} />
      {remoteStream && callState == callStates.CALL_IN_PROGRESS && (
        <RemoteVideoView remoteStream={remoteStream} />
      )}

      {callState == callStates.CALL_REQUESTED && (
        <IncomingCallDialog callerUsername={callerUsername} />
      )}

      {callingDialogVisible && <CallingDialog />}
      {callRejected.rejected && (
        <CallRejectedDialog
          reason={callRejected.reason}
          hideCallRejectedDialog={hideCallRejectedDialog}
        />
      )}

      {remoteStream && callState === callStates.CALL_IN_PROGRESS && (
        <ConversationButtons
          handleCameraEnabled={handleCameraEnabled}
          handleMicrophoneEnabled={handleMicrophoneEnabled}
        />
      )}

      {remoteStream && callState === callStates.CALL_IN_PROGRESS && (
        <Messenger
          message={message}
          handleDirectCallMessage={handleDirectCallMessage}
        />
      )}
    </>
  );
};
