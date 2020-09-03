import React, { useState, useEffect } from "react";
import "./chat.style.scss";
import ChatHeader from "../chat-header/chatHeader.component";
import ChatMessage from "../chat-message/chatMessage.component";
import { useParams } from "react-router-dom";
import firebase, { db } from "../../firebase/config";

const Chat = () => {
  const [chatContent, setChatContent] = useState(null);
  const [messages, setMessages] = useState([]);
  const { groupId } = useParams();

  useEffect(() => {
    if (groupId) {
      db.collection("group")
        .doc(groupId)
        .onSnapshot((snapshot) => {
          setChatContent(snapshot.data());
        });
    }

    db.collection("group")
      .doc(groupId)
      .collection("messages")
      .orderBy("createdAt", "asc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((message) => {
            return { data: message.data(), id: message.id };
          })
        );
      });
  }, [groupId]);
  // console.log(chatContent);
  // console.log(messages);
  return (
    <div className="chat">
      <ChatHeader title={chatContent ? chatContent.name : groupId} />
      <div className="chat_box">
        {messages.map((message) => (
          <ChatMessage key={message.id} data={message.data} />
        ))}
      </div>
    </div>
  );
};

export default Chat;
