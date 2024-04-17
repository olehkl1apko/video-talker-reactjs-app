import { useSelector, useDispatch } from "react-redux";

import { LocalVideoView } from "./LocalVideoView";
import { RemoteVideoView } from "./RemoteVideoView";
import {
  selectCallerUsername,
  selectCallingDialogVisible,
  selectCallRejected,
  selectCallState,
  selectLocalStream,
  selectRemoteStream,
} from "@/store/selectors";
import { CallingDialog } from "./CallingDialog";
import { CallRejectedDialog } from "./CallRejectedDialog";
import { IncomingCallDialog } from "./IncomingCallDialog";
import { callStates, setCallRejected } from "@/store/callsSlice";

export const DirectCall = () => {
  const localStream = useSelector(selectLocalStream);
  const remoteStream = useSelector(selectRemoteStream);
  const callState = useSelector(selectCallState);
  const callerUsername = useSelector(selectCallerUsername);
  const callingDialogVisible = useSelector(selectCallingDialogVisible);
  const callRejected = useSelector(selectCallRejected);

  const dispatch = useDispatch();

  const hideCallRejectedDialog = (callRejectedDetails) => {
    dispatch(setCallRejected(callRejectedDetails));
  };

  return (
    <>
      <LocalVideoView localStream={localStream} />
      {remoteStream && <RemoteVideoView remoteStream={remoteStream} />}
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
    </>
  );
};
