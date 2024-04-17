import { useRef, useEffect } from "react";

import "./styles.css";

export const RemoteVideoView = ({ remoteStream }) => {
  const remoteVideoRef = useRef();

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
    <div className="remote_container">
      <video className="remote_element" ref={remoteVideoRef} autoPlay />
    </div>
  );
};
