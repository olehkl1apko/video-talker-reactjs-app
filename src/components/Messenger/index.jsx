import { useState, useEffect } from "react";

import "./styles.css";
import { sendMessageUsingDataChannel } from "@/utils/webRTC/webRTCHandler";

export const Messenger = ({ message, handleDirectCallMessage }) => {
  const [inputValue, setInputValue] = useState("");

  const handleOnKeyDownEvent = (e) => {
    if (e.keyCode === 13) {
      sendMessageUsingDataChannel(inputValue);
      setInputValue("");
    }
  };

  useEffect(() => {
    if (message.received) {
      setTimeout(() => {
        handleDirectCallMessage(false, "");
      }, [3000]);
    }
  }, [message.received, handleDirectCallMessage]);

  return (
    <>
      <input
        className="messages_input"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleOnKeyDownEvent}
        placeholder="Type your message"
      />
      {message.received && (
        <div className="message_display">{message.content}</div>
      )}
    </>
  );
};
