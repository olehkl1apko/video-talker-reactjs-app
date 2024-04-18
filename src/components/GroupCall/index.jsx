import { useSelector } from "react-redux";

import { GroupCallButton } from "./GroupCallButton";
import {
  callStates,
  setLocalCameraEnabled,
  setLocalMicrophoneEnabled,
} from "@/store/callsSlice";
import {
  selectCallState,
  selectGroupCallStreams,
  selectIsGroupCallActive,
  selectLocalStream,
} from "@/store/selectors";
import {
  createNewGroupCall,
  leaveGroupCall,
} from "@/utils/webRTC/webRTCGroupCallHandler";

export const GroupCall = () => {
  const callState = useSelector(selectCallState);
  const localStream = useSelector(selectLocalStream);
  const groupCallActive = useSelector(selectIsGroupCallActive);
  // const groupCallStreams = useSelector(selectGroupCallStreams);

  const createRoom = () => {
    createNewGroupCall();
  };

  const leaveRoom = () => {
    leaveGroupCall();
  };

  return (
    <>
      {!groupCallActive &&
        localStream &&
        callState !== callStates.CALL_IN_PROGRESS && (
          <GroupCallButton onClickHandler={createRoom} label="Create room" />
        )}
      {groupCallActive && (
        <GroupCallButton onClickHandler={leaveRoom} label="Leave room" />
      )}
    </>
  );
};

// const mapActionsToProps = (dispatch) => {
//   return {
//     setCameraEnabled: (enabled) => dispatch(setLocalCameraEnabled(enabled)),
//     setMicrophoneEnabled: (enabled) =>
//       dispatch(setLocalMicrophoneEnabled(enabled)),
//   };
// };
