import React from "react";
import "./Header.css";
import Avatar from "@mui/material/Avatar";
export default function Header() {
  return (
    <div className="header-align">
      <Avatar src="mpr.png" alt="mpr" className="avatar-align" />
      <h1 style={{ color: "white" }}>MPR CHAT</h1>
    </div>
  );
}
