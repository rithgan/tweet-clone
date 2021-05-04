import React, { forwardRef } from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

const Post = forwardRef(
  ({ displayName, username, verified, text, image, avatar }, ref) => {
    return (
      <div className="post" ref={ref}>
        <div className="post__avatar">
          <Avatar src={avatar} />
        </div>
        <section>
          <header>
            <div className="post__headerText">
              <h3>
                {displayName}
                <span className="post__headerSpecial">
                  {verified ? (
                    <VerifiedUserIcon className="post__badge" />
                  ) : null}
                  {username}
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{text}</p>
            </div>
          </header>
          <img src={image} alt=""></img>
          <footer>
            <ChatBubbleIcon fontSize="small" />
            <RepeatIcon fontSize="smmall" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />
          </footer>
        </section>
      </div>
    );
  }
);

export default Post;
