import React from "react";
import "./chat.style.scss";
import { useParams } from "react-router-dom";

const Chat = () => {
  const { groupId } = useParams();
  return <div className="chat">{groupId}</div>;
};

export default Chat;
