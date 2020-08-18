import React, { useEffect, useState } from "react";
import "./sidebar.style.scss";

import SidebarOption from "../sidebarOption/sidebarOption.component";

//firebase
import { db } from "../../firebase/config";

//icon
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import CommentIcon from "@material-ui/icons/Comment";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import AppsIcon from "@material-ui/icons/Apps";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import AddIcon from "@material-ui/icons/Add";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import NotesIcon from "@material-ui/icons/Notes";

const Sidebar = () => {
  const [groupChats, setGroupChats] = useState(null);

  useEffect(() => {
    db.collection("group")
      .orderBy("createdAt", "desc")
      .onSnapshot((snapshot) => {
        setGroupChats(
          snapshot.docs.map((chat) => ({ id: chat.id, name: chat.data().name }))
        );
      });
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <h3>
          <FiberManualRecordIcon style={{ color: "green", fontSize: "1rem" }} />
          Min
          <ExpandMoreIcon style={{ fontSize: 15, marginLeft: "0.5rem" }} />
        </h3>
        <CreateOutlinedIcon />
      </div>
      <div className="sidebar_utils">
        <SidebarOption Icon={CommentIcon} title="Threads" />
        <SidebarOption Icon={BookmarkBorderIcon} title="Saved Item" />
        <SidebarOption Icon={AppsIcon} title="Apps" />
        <SidebarOption Icon={FileCopyIcon} title="File Browser" />
        <SidebarOption Icon={MoreVertIcon} title="More" />
      </div>
      <hr />

      <SidebarOption Icon={AddIcon} addGroup title="Group Chats" />
      <hr />

      {groupChats &&
        groupChats.map((chat) => (
          <SidebarOption
            key={chat.id}
            groupId={chat.id}
            Icon={NotesIcon}
            title={chat.name}
          />
        ))}
    </div>
  );
};

export default Sidebar;
