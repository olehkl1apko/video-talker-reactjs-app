import { useEffect } from "react";

import "./styles.css";
import { ActiveUsersList } from "@/components/ActiveUsersList";
import { DirectCall } from "@/components/DirectCall";
import logo from "@/resources/logo.png";
import { getLocalStream } from "@/utils/webRTC/webRTCHandler";

const Dashboard = () => {
  useEffect(() => {
    getLocalStream();
  }, []);

  return (
    <div className="dashboard_container background_main_color">
      <div className="dashboard_left_section">
        <div className="dashboard_content_container">
          <DirectCall />
        </div>
        <div className="dashboard_rooms_container background_secondary_color">
          rooms
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
