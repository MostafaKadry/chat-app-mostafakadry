import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import io from "socket.io-client";
import InfoBar from "../infobar/infobar";
import Input from "../input/input";
import Messages from "../messages/messages";

import "./chat.css";
let socket;
const Chat = () => {
  const location = useLocation();
  const ENDPOINT = "https://chat-app-mostafakadry.herokuapp.com/";
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  const [users, setUsers] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    socket = io(ENDPOINT);

    setRoom(room);
    setName(name);

    socket.emit("join", { name, room }, (error) => {
      if (error) {
        alert(error);
        window.location = "/";
      }
    });

    return () => {
      socket.emit("disconnect", { name, room });
      socket.off();
    };
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });
  }, [message, messages]);
  useEffect(() => {
    socket.on("roomData", ({ room, users }) => {
      setUsers(users);
    });
  }, [users]);
  // function for sending messages 01: 45:0
  const sendMessage = (event) => {
    event.preventDefault();
    if (message) {
      socket.emit("sendMessage", message, () => {
        setMessage("");
      });
    }
  };
  return (
    <div className="outerContainer">
      <div className="myContainer">
        <InfoBar room={room} users={users} />
        <Messages messages={messages} name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
    </div>
  );
};

export default Chat;
