import {
  MdCallEnd,
  MdMic,
  MdMicOff,
  MdVideocam,
  MdVideocamOff,
  MdVideoLabel,
  MdCamera,
} from "react-icons/md";
import { useSelector } from "react-redux";

import "./styles.css";
import ButtonItem from "./ButtonItem";
import {
  selectIsGroupCallActive,
  selectLocalCameraEnabled,
  selectLocalMicrophoneEnabled,
  selectLocalStream,
  selectScreenSharingActive,
} from "@/store/selectors";
import {
  switchForScreenSharingStream,
  hangUp,
} from "@/utils/webRTC/webRTCHandler";

export const ConversationButtons = ({
  handleCameraEnabled,
  handleMicrophoneEnabled,
}) => {
  const localStream = useSelector(selectLocalStream);
  const localMicrophoneEnabled = useSelector(selectLocalMicrophoneEnabled);
  const localCameraEnabled = useSelector(selectLocalCameraEnabled);
  const screenSharingActive = useSelector(selectScreenSharingActive);
  const isGroupCallActive = useSelector(selectIsGroupCallActive);

  const handleMicButtonPressed = () => {
    localStream.getAudioTracks()[0].enabled = !localMicrophoneEnabled;
    handleMicrophoneEnabled(!localMicrophoneEnabled);
  };

  const handleCameraButtonPressed = () => {
    localStream.getVideoTracks()[0].enabled = !localCameraEnabled;
    handleCameraEnabled(!localCameraEnabled);
  };

  const handleScreenSharingButtonPressed = () => {
    switchForScreenSharingStream();
  };

  const handleHangUpButtonPressed = () => {
    hangUp();
  };

  return (
    <div className="button_container">
      <ButtonItem onClickHandler={handleMicButtonPressed}>
        {localMicrophoneEnabled ? (
          <MdMic className="icon" />
        ) : (
          <MdMicOff className="icon" />
        )}
      </ButtonItem>
      {!isGroupCallActive && (
        <ButtonItem onClickHandler={handleHangUpButtonPressed}>
          <MdCallEnd className="icon" />
        </ButtonItem>
      )}
      <ButtonItem onClickHandler={handleCameraButtonPressed}>
        {localCameraEnabled ? (
          <MdVideocam className="icon" />
        ) : (
          <MdVideocamOff className="icon" />
        )}
      </ButtonItem>
      {!isGroupCallActive && (
        <ButtonItem onClickHandler={handleScreenSharingButtonPressed}>
          {screenSharingActive ? (
            <MdCamera className="icon" />
          ) : (
            <MdVideoLabel className="icon" />
          )}
        </ButtonItem>
      )}
    </div>
  );
};
