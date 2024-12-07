import React from "react";
import { FaArrowCircleDown } from "react-icons/fa";
import "./Inputbox.css";
const InputBox = ({ inputValue, setInputValue, sendMessage }) => {
  return (
    <header className="chat-header">
      <input
        type="text"
        className="form-control chat-input"
        placeholder="Type your message here ..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") sendMessage();
        }}
      />
      <FaArrowCircleDown
        className={`send-icon ${
          inputValue.trim() === "" ? "icon-disabled" : ""
        }`}
        onClick={sendMessage}
      />
    </header>
  );
};
export default InputBox;
