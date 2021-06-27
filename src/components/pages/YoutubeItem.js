import React from "react";

const YoutubeItem = (props) => {
  //console.log(props);
  return (
    <li>
      <img
        src={props.video.snippet.thumbnails.medium.url}
        alt={props.video.snippet.title}
      ></img>
      <p className="title">{props.video.snippet.title}</p>
    </li>
  );
};

export default YoutubeItem;
