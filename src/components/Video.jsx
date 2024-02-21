import React from "react";

const Video = (props) => {
  return (
    <div className="item item-video">
      <iframe
        title="Unique Title"
        src={props.url}
        allow="autoplay; encrypted-media"
      ></iframe>
      <p className="views">Просмотров: {props.views}</p>
    </div>
  );
};

export default Video;
