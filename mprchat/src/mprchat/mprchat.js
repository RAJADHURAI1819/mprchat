import React, { useState } from "react";
import "./mprchat.css";
import axios from "axios";
import InputBox from "./Inputbox";
import ChatContainer from "./Chatcontainer";
import apiConfig from "../server";
export default function Mprchat() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const sendMessage = async () => {
    if (inputValue.trim() !== "") {
      // Add user message first
      setMessages([
        ...messages,
        {
          text: inputValue,
          sender: "user",
        },
      ]);

      // Clear the input field immediately
      setInputValue("");

      try {
        // Send message to backend (replace with your API endpoint)
        const response = await axios.post(`${apiConfig.thirdpartyapi}`, {
          input: inputValue,
        });
        // console.log(response);
        // Add bot's response to the messages
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            text: response.data,
            sender: "bot",
          },
        ]);
      } catch (error) {
        console.error("Error sending message to bot:", error);
        // Optionally, handle errors (e.g., display an error message to the user)
      }
    }
  };
  return (
    <div className="chat-container">
      <InputBox
        inputValue={inputValue}
        setInputValue={setInputValue}
        sendMessage={sendMessage}
      />
      <ChatContainer messages={messages} />
    </div>
  );
}
