import React from "react";
import YoutubeItem from "../pages/YoutubeItem";

const Youtubelist = (props) => {
  //console.log(props.list.data.items);
  return (
    <div className="youtube__list">
      <ul>
        {props.list.data.items.map((list) => (
          <YoutubeItem key={list.id.videoId} video={list} />
        ))}
      </ul>
    </div>
  );
};

export default Youtubelist;
