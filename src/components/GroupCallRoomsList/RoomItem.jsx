import { joinGroupCall } from "@/utils/webRTC/webRTCGroupCallHandler";

export const RoomItem = ({ room }) => {
  const handleListItemPressed = () => {
    joinGroupCall(room.socketId, room.roomId);
  };

  return (
    <div onClick={handleListItemPressed} className="group_calls_list_item">
      <span>{room.hostName}</span>
    </div>
  );
};
