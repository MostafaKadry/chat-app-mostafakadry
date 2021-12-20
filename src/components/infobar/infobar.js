import React from "react";
import "./infobar.css";
import TextContainer from "../textContainer/textContainer";
require("../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css");
const InfoBar = ({ room, users }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <span className="onlineIcon"></span>

      <h3>{room}</h3>
    </div>

    <TextContainer users={users} />

    <div className="rightInnerContainer">
      <a href="/chat-app-mostafakadry">
        <i className="far fa-window-close"></i>
      </a>
    </div>
  </div>
);

export default InfoBar;
