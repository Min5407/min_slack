import React from "react";
import "./sidebar.style.scss";

import SidebarOption from "../sidebarOption/sidebarOption.component";

//icon
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import CommentIcon from "@material-ui/icons/Comment";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import AppsIcon from "@material-ui/icons/Apps";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import AddIcon from "@material-ui/icons/Add";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <h3>
          Min Young
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

      <SidebarOption Icon={AddIcon} title="Direct Messages" />
      <hr />
    </div>
  );
};

export default Sidebar;
