import socketClient from "socket.io-client";

const SERVER = import.meta.env.VITE_SERVER_URL;

let socket;

export const connectWithWebSocket = () => {
  socket = socketClient(SERVER);

  socket.on("connection", () => {
    console.log("successfully connected with wss server");
    console.log(socket.id);
  });
};

export const registerNewUser = (username) => {
  socket.emit("register-new-user", {
    username: username,
    socketId: socket.id,
  });
};
