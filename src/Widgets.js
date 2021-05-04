import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widget_input">
        <SearchIcon className="widgets__SearchIcon" />
        <input placeholder="Search Twitter" type="text"></input>
      </div>
      <div className="widgets__widgetContainer">
        <h2>What's happening </h2>
        <TwitterTweetEmbed tweetId={"933354946111705097"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="saurabhnemade"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={"https://twitter.com"}
          options={{ text: "#reactjs is awesome", via: "rithgan" }}
        />
      </div>
    </div>
  );
}

export default Widgets;