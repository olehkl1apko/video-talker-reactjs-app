import store from "@/store";
import { setLocalStream } from "@/store/callsSlice";

const defaultConstrains = {
  video: true,
  audio: true,
};

export const getLocalStream = () => {
  navigator.mediaDevices
    .getUserMedia(defaultConstrains)
    .then((stream) => {
      store.dispatch(setLocalStream(stream));
    })
    .catch((err) => {
      console.log(
        "error occurred when trying to get an access to get local stream: ",
        err
      );
    });
};
