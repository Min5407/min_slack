import React from "react";
import "./sidebarOption.style.scss";
import { useHistory } from "react-router-dom";
import firebase, { db } from "../../firebase/config";

const SidebarOption = ({ Icon, title, groupId, addGroup }) => {
  const history = useHistory();
  const goToGroupChat = () => {
    if (groupId) {
      history.push(`/group/${groupId}`);
    }
  };
  const createGroup = () => {
    const groupName = prompt("write a group name");

    if (groupName) {
      db.collection("group").add({
        name: groupName,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }
  };

  return (
    <div
      className="sidebar_option"
      onClick={addGroup ? createGroup : goToGroupChat}
    >
      <Icon />
      <h4>{title}</h4>
    </div>
  );
};

export default SidebarOption;
