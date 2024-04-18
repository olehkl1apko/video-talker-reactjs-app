import { useRef, useEffect } from "react";

import "./styles.css";
import { selectCallerUsername } from "@/store/selectors";
import { useSelector } from "react-redux";

export const RemoteVideoView = ({ remoteStream }) => {
  const remoteVideoRef = useRef();
  const callerUsername = useSelector(selectCallerUsername);

  useEffect(() => {
    if (remoteStream) {
      const remoteVideo = remoteVideoRef.current;
      remoteVideo.srcObject = remoteStream;

      remoteVideo.onloadedmetadata = () => {
        remoteVideo.play();
      };
    }
  }, [remoteStream]);

  return (
    <div className="background_secondary_color remote_container">
      <video className="remote_element" ref={remoteVideoRef} autoPlay />
      <p>User: {callerUsername}</p>
    </div>
  );
};
