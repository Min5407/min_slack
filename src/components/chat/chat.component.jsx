import React from "react";
import "./chat.style.scss";
import ChatHeader from "../chat-header/chatHeader.component";
import { useParams } from "react-router-dom";

const Chat = () => {
  const { groupId } = useParams();
  return (
    <div className="chat">
      <ChatHeader />
    </div>
  );
};

export default Chat;
