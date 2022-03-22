import React from "react";
import "./PostCard.css";
import Avatar from "@mui/material/Avatar";
import MoreHoriz from "@mui/icons-material/MoreHoriz";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import SendIcon from "@mui/icons-material/Send";
import BookmarkBorder from "@mui/icons-material/BookmarkBorder";

function PostCard() {
  return (
    <div className="post_card">
      <div className="post_card_header">
        <div className="post_title">
          <Avatar src="https://images.unsplash.com/photo-1647476699575-a25db189e3b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDl8Ym84alFLVGFFMFl8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />
          <h5>name</h5>
        </div>
        <div>
          <h6>
            <MoreHoriz className="menu_icon" />
          </h6>
        </div>
      </div>
      <div className="post_card_body">
        <img src="https://images.unsplash.com/photo-1647831570034-51d43eac0694?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDV8Ym84alFLVGFFMFl8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />
      </div>
      <div className="card_footer">
        <div className="card_footer_chat">
          <div>
            <FavoriteBorder />
            <SendIcon style={{marginLeft:10}} />
          </div>
          <div>
            <BookmarkBorder />
          </div>
        </div>
      </div>
      <div style={{
        display:'flex',
        alignItems:'center',
      }}>
        <Avatar style={{
          marginRight:20,
          height:25,
          width:25,
          marginLeft:20
        }} src='https://images.unsplash.com/photo-1647613560920-9576ec9a4537?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDh8UzRNS0xBc0JCNzR8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'/>
        <h6>Liked by <span style={{fontWeight:'900'}}>JumaTech</span></h6>
      </div>
      <div>
        <h5 style={{
          fontWeight:'100',
          marginTop:2,
          padding:20
        }}>5 hours ago</h5>
      </div>
    </div>
  );
}

export default PostCard;
