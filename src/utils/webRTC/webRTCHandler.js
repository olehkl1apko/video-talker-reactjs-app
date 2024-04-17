import store from "@/store";
import { setLocalStream } from "@/store/callsSlice";
import { callStates, setCallState } from "@/store/callsSlice";
import * as wss from "../wssConnection/wssConnection";

const defaultConstrains = {
  video: {
    width: 480,
    height: 360,
  },
  audio: true,
};

let connectedUserSocketId;
let peerConnection;
let dataChannel;

export const getLocalStream = () => {
  navigator.mediaDevices
    .getUserMedia(defaultConstrains)
    .then((stream) => {
      store.dispatch(setLocalStream(stream));
      store.dispatch(setCallState(callStates.CALL_AVAILABLE));
    })
    .catch((err) => {
      console.log(
        "error occurred when trying to get an access to get local stream: ",
        err
      );
    });
};

export const hangUp = () => {
  wss.sendUserHangedUp({ connectedUserSocketId });

  // resetCallDataAfterHangUp();
};
