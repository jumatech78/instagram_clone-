import React from "react";
import "./navbarstyles.css";
import Badge from "@mui/material/Badge";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import SendIcon from "@mui/icons-material/Send";
import AddIcon from "@mui/icons-material/Add";
import ExploreIcon from "@mui/icons-material/Explore";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorderOutlined";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar_brand">
        <img className="navbar_logo" src="/logo.png" />
      </div>
      <div className="search_section">
        <SearchIcon size={12} className="search_icon" />
        <input className="search-input" placeholder="search" />
      </div>
      <div className="navbar_icons">
        <HomeIcon className="navbar_icon" />
        <Badge className='badge' badgeContent={2} color="primary">
          <SendIcon
            className="navbar_icon"
            style={{ transform: "rotate(320deg)" }}
          />
        </Badge>
        <AddIcon className="navbar_icon" />
        <ExploreIcon className="navbar_icon" />
        <FavoriteBorderIcon className="navbar_icon" />
      </div>
    </div>
  );
}

export default Navbar;
