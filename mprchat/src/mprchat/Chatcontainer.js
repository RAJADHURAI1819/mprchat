import React from "react";
import "./Chatcontainer.css";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

const ChatContainer = ({ messages }) => {
  return (
    <div className="messages-container">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`message ${
            message.sender === "user" ? "message-right" : "message-left"
          }`}
        >
          {message.sender === "user" ? (
            message.text
          ) : (
            <IconButton sx={{ gap: 2 }}>
              <Avatar src="mpr.png" alt="mpr" className="avatar-align" />
              <Typography sx={{ color: "whitesmoke" }}>
                {message.text}
              </Typography>
            </IconButton>
          )}
        </div>
      ))}
    </div>
  );
};

export default ChatContainer;
