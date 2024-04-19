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
  isGroupCall,
}) => {
  const localStream = useSelector(selectLocalStream);
  const localMicrophoneEnabled = useSelector(selectLocalMicrophoneEnabled);
  const localCameraEnabled = useSelector(selectLocalCameraEnabled);
  const screenSharingActive = useSelector(selectScreenSharingActive);

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
    <div className="conversation_button_container">
      <ButtonItem onClickHandler={handleMicButtonPressed}>
        {localMicrophoneEnabled ? (
          <MdMic className="conversation_icon" />
        ) : (
          <MdMicOff className="conversation_icon" />
        )}
      </ButtonItem>
      {!isGroupCall && (
        <ButtonItem onClickHandler={handleHangUpButtonPressed}>
          <MdCallEnd className="conversation_icon" />
        </ButtonItem>
      )}
      <ButtonItem onClickHandler={handleCameraButtonPressed}>
        {localCameraEnabled ? (
          <MdVideocam className="conversation_icon" />
        ) : (
          <MdVideocamOff className="conversation_icon" />
        )}
      </ButtonItem>
      {!isGroupCall && (
        <ButtonItem onClickHandler={handleScreenSharingButtonPressed}>
          {screenSharingActive ? (
            <MdCamera className="conversation_icon" />
          ) : (
            <MdVideoLabel className="conversation_icon" />
          )}
        </ButtonItem>
      )}
    </div>
  );
};
