import userAvatar from "@/resources/userAvatar.png";
import { callToOtherUser } from "@/utils/webRTC/webRTCHandler";
import { callStates } from "@/store/callsSlice";

const ActiveUsersListItem = ({ activeUser, callState }) => {
  const handleListItemPressed = () => {
    if (callState === callStates.CALL_AVAILABLE) {
      callToOtherUser(activeUser);
    }
  };

  return (
    <div className="active_user_list_item" onClick={handleListItemPressed}>
      <div className="active_user_list_image_container">
        <img className="active_user_list_image" src={userAvatar} />
      </div>
      <span className="active_user_list_text">{activeUser.username}</span>
    </div>
  );
};

export default ActiveUsersListItem;
