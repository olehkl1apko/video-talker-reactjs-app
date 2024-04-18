import { useRef, useEffect } from "react";

import "./styles.css";

export const LocalVideoView = ({ localStream }) => {
  const localVideoRef = useRef();

  useEffect(() => {
    if (localStream) {
      const localVideo = localVideoRef.current;
      localVideo.srcObject = localStream;

      localVideo.onloadedmetadata = () => {
        localVideo.play();
      };
    }
  }, [localStream]);

  return (
    <div className="background_secondary_color local_container">
      <video className="local_element" ref={localVideoRef} autoPlay muted />
    </div>
  );
};
