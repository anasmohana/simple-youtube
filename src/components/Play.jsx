import React from "react";

const Play = ({ video, onVideoSelect }) => {
  return (
    <h6 onClick={() => onVideoSelect(video)} className="mt-2 mb-2">
      {video.snippet.title}
    </h6>
  );
};

export default Play;
