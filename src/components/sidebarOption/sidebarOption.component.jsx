import React from "react";
import "./sidebarOption.style.scss";

const SidebarOption = ({ Icon, title }) => {
  return (
    <div className="sidebar_option">
      <Icon />
      <h4>{title}</h4>
    </div>
  );
};

export default SidebarOption;
