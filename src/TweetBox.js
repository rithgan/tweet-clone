import React from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "./firebase";
import { useState } from "react";

function TweetBox() {
  const [input, setInput] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();
    db.collection("tweets").add({
      displayName: "Rithik",
      username: "@rithgan",
      text: input,
      verified: true,
      image: tweetImage,
      avatar: "https://i.pravatar.cc/",
    });
    setInput("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://i.pravatar.cc/"></Avatar>
          <input
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="What's happening"
          ></input>
        </div>
        <input
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__inputImage"
          placeholder="Optional : Enter image url"
        ></input>
        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
