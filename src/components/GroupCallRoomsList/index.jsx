import { useSelector } from "react-redux";

import "./styles.css";
import { RoomItem } from "./RoomItem";
import { selectGroupCallRooms } from "@/store/selectors";

const GroupCallRoomsList = () => {
  // const groupCallRooms = useSelector(selectGroupCallRooms);
  const groupCallRooms = [
    {
      roomId: "111",
      hostName: "Oleh",
    },
    {
      roomId: "222",
      hostName: "Luda",
    },
  ];

  return (
    <div className="rooms_wrapper">
      {groupCallRooms.map((room) => (
        <RoomItem key={room.roomId} room={room} />
      ))}
    </div>
  );
};

export default GroupCallRoomsList;
