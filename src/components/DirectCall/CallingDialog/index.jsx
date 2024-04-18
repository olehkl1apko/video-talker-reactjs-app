import { MdCallEnd } from "react-icons/md";

import "./styles.css";
import { hangUp } from "@/utils/webRTC/webRTCHandler";

export const CallingDialog = () => {
  return (
    <div className="direct_calling_dialog background_secondary_color">
      <span>Calling</span>
      <div className="dialog_button_container" onClick={() => hangUp()}>
        <MdCallEnd className="dialog_icon" />
      </div>
    </div>
  );
};
