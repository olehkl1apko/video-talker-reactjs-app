import { useSelector } from "react-redux";

import { LocalVideoView } from "./LocalVideoView";
import { RemoteVideoView } from "./RemoteVideoView";
import { selectLocalStream, selectRemoteStream } from "@/store/selectors";
import { CallingDialog } from "./CallingDialog";
import { CallRejectedDialog } from "./CallRejectedDialog";
import { IncomingCallDialog } from "./IncomingCallDialog";

export const DirectCall = () => {
  const localStream = useSelector(selectLocalStream);
  const remoteStream = useSelector(selectRemoteStream);

  return (
    <>
      <LocalVideoView localStream={localStream} />
      {remoteStream && <RemoteVideoView remoteStream={remoteStream} />}
      <CallRejectedDialog />
      <CallingDialog />
      <IncomingCallDialog />
    </>
  );
};
