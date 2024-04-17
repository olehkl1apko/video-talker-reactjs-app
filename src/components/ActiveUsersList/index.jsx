import { useSelector } from "react-redux";

import "./styles.css";
import ActiveUsersListItem from "./ActiveUsersListItem";
import { selectActiveUsers } from "@/store/selectors";

export const ActiveUsersList = () => {
  const activeUsers = useSelector(selectActiveUsers);

  return (
    <div className="active_user_list_container">
      {activeUsers.map((activeUser) => (
        <ActiveUsersListItem
          key={activeUser.socketId}
          activeUser={activeUser}
        />
      ))}
    </div>
  );
};
