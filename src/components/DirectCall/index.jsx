import { useSelector } from "react-redux";

import { LocalVideoView } from "./LocalVideoView";
import { RemoteVideoView } from "./RemoteVideoView";
import {
  selectCallerUsername,
  selectCallingDialogVisible,
  selectCallState,
  selectLocalStream,
  selectRemoteStream,
} from "@/store/selectors";
import { CallingDialog } from "./CallingDialog";
import { CallRejectedDialog } from "./CallRejectedDialog";
import { IncomingCallDialog } from "./IncomingCallDialog";
import { callStates } from "@/store/callsSlice";

export const DirectCall = () => {
  const localStream = useSelector(selectLocalStream);
  const remoteStream = useSelector(selectRemoteStream);
  const callState = useSelector(selectCallState);
  const callerUsername = useSelector(selectCallerUsername);
  const callingDialogVisible = useSelector(selectCallingDialogVisible);

  return (
    <>
      <LocalVideoView localStream={localStream} />
      {remoteStream && <RemoteVideoView remoteStream={remoteStream} />}
      {callState == callStates.CALL_REQUESTED && (
        <IncomingCallDialog callerUsername={callerUsername} />
      )}
      {callingDialogVisible && <CallingDialog />}
      {/* <CallRejectedDialog/> */}
    </>
  );
};
