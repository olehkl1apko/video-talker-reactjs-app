import { useSelector } from "react-redux";

import "./styles.css";
import { RoomItem } from "./RoomItem";
import { selectGroupCallRooms } from "@/store/selectors";

export const GroupCallRoomsList = () => {
  const groupCallRooms = useSelector(selectGroupCallRooms);

  return (
    <div className="rooms_wrapper">
      {groupCallRooms.map((room) => (
        <RoomItem key={room.roomId} room={room} />
      ))}
    </div>
  );
};
