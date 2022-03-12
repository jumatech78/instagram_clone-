import React from "react";
import "./Card.css";
import Avatar from "@mui/material/Avatar";
import MoreHoriz from "@mui/icons-material/MoreHoriz";

function Card() {
  return (
    <div className="Container">
      <div className="Header_container">
        <div className="Avatar_container">
          <Avatar />
          <h6>name</h6>
        </div>
        <div className="More">
          <MoreHoriz />
        </div>
      </div>
    </div>
  );
}

export default Card;
