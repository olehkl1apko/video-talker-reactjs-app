import { useRef, useEffect } from "react";

const GroupCallVideo = ({ stream }) => {
  const videoRef = useRef();

  useEffect(() => {
    const remoteGroupCallVideo = videoRef.current;
    remoteGroupCallVideo.srcObject = stream;
    remoteGroupCallVideo.onloadedmetadata = () => {
      remoteGroupCallVideo.play();
    };
  }, [stream]);

  return (
    <div className="group_call_video_container">
      <video className="group_call_video_element" ref={videoRef} autoPlay />
    </div>
  );
};

export default GroupCallVideo;
