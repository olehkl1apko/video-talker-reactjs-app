import { useDispatch } from "react-redux";

import "./styles.css";
import { ConversationButtons } from "@/components/ConversationButtons";
import GroupCallVideo from "./GroupCallVideo";
import {
  setLocalCameraEnabled,
  setLocalMicrophoneEnabled,
} from "@/store/callsSlice";

const GroupCallRoom = ({ groupCallStreams }) => {
  const dispatch = useDispatch();

  const handleCameraEnabled = (enabled) => {
    dispatch(setLocalCameraEnabled(enabled));
  };

  const handleMicrophoneEnabled = (enabled) => {
    dispatch(setLocalMicrophoneEnabled(enabled));
  };

  return (
    <div className="group_call_room_container">
      <span className="group_call_title">Group Call</span>
      <div className="group_call_videos_container">
        {groupCallStreams.map((stream) => {
          return <GroupCallVideo key={stream.id} stream={stream} />;
        })}
      </div>
      <ConversationButtons
        handleCameraEnabled={handleCameraEnabled}
        handleMicrophoneEnabled={handleMicrophoneEnabled}
        isGroupCall
      />
    </div>
  );
};

export default GroupCallRoom;
