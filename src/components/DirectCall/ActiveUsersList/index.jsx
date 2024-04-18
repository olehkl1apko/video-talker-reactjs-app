import { useSelector } from "react-redux";

import "./styles.css";
import ActiveUsersListItem from "./ActiveUsersListItem";
import { selectActiveUsers, selectCallState } from "@/store/selectors";

export const ActiveUsersList = () => {
  const activeUsers = useSelector(selectActiveUsers);
  const callState = useSelector(selectCallState);

  return (
    <div className="active_user_list_container">
      {activeUsers.map((activeUser) => (
        <ActiveUsersListItem
          key={activeUser.socketId}
          activeUser={activeUser}
          callState={callState}
        />
      ))}
    </div>
  );
};
