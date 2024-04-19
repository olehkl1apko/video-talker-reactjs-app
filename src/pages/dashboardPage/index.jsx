import { useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import "./styles.css";
import { ActiveUsersList } from "@/components/ActiveUsersList";
import { DirectCall } from "@/components/DirectCall";
import { GroupCallRoomsList } from "@/components/GroupCallRoomsList";
import { GroupCall } from "@/components/GroupCall";
import DashboardInfo from "@/components/DashboardInfo";

import logo from "@/resources/logo.png";
import { getLocalStream } from "@/utils/webRTC/webRTCHandler";
import { connectWithMyPeer } from "@/utils/webRTC/webRTCGroupCallHandler";
import { setTurnServers } from "@/utils/webRTC/TURN";
import { selectCallState, selectUsername } from "@/store/selectors";
import { callStates } from "@/store/callsSlice";

const TWILIO_CREDENTIALS_API = import.meta.env.VITE_TWILIO_CREDENTIALS_API;

const Dashboard = () => {
  const callState = useSelector(selectCallState);
  const username = useSelector(selectUsername);

  useEffect(() => {
    axios
      .get(TWILIO_CREDENTIALS_API)
      .then((responseData) => {
        setTurnServers(responseData.data.token.iceServers);
        getLocalStream();
        connectWithMyPeer();
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="dashboard_container background_main_color">
      <div className="dashboard_left_section">
        <div className="dashboard_content_container">
          <DirectCall />
          <GroupCall />
          {callState !== callStates.CALL_IN_PROGRESS && (
            <DashboardInfo username={username} />
          )}
        </div>
        <div className="dashboard_rooms_container background_secondary_color">
          <GroupCallRoomsList />
        </div>
      </div>
      <div className="dashboard_right_section background_secondary_color">
        <div className="dashboard_active_users_list">
          <ActiveUsersList />
        </div>
        <div className="dashboard_logo_container">
          <img className="dashboard_logo_image" src={logo} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
