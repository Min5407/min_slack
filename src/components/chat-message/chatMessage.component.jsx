import React from "react";
import "./chatMessage.style.scss";
import Avatar from "@material-ui/core/Avatar";

const ChatMessage = ({ data }) => {
  const { user, createdAt, message } = data;
  const date = new Date(createdAt.toDate()).toUTCString();
  const modifedDate = date.slice(0, date.length - 3);
  return (
    <div className="chat-message">
      <Avatar variant="rounded" style={{ backgroundColor: "salmon" }}>
        {user[0]}
      </Avatar>
      <div className="chat-content">
        <h4>
          {user} <small className="chat_date"> {modifedDate}</small>
        </h4>
        <p>message</p>
      </div>
    </div>
  );
};

export default ChatMessage;
