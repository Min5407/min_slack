import React from "react";
import "./chatHeader.style.scss";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import StarBorderRoundedIcon from "@material-ui/icons/StarBorderRounded";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const ChatHeader = ({ title }) => {
  return (
    <div className="chat-header">
      <div className="chat_header_name">
        <FiberManualRecordIcon style={{ color: "green", fontSize: "1rem" }} />
        <h4>{title}</h4>
        <StarBorderRoundedIcon style={{ fontSize: "1rem" }} />
      </div>
      <div>
        <InfoOutlinedIcon />
      </div>
    </div>
  );
};

export default ChatHeader;
