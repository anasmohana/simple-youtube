import React from "react";
import Hide from "./Hide";
import Play from "./Play";
import "../style/video.css";
// render the video items as a child of video list
const VideoItem = ({ video, onVideoSelect, onVideoHide }) => {
  return (
    <li className="list-group-item item-container mb-3">
      <div className="content">
        <div className="date ">{video.snippet.publishedAt}</div>
        <div className="date ">{video.snippet.channelTitle}</div>
        <div className="tiltle video-item">
          <Play video={video} onVideoSelect={onVideoSelect} />
        </div>
        <div className="header ">
          <Hide video={video} onVideoHide={onVideoHide} />
        </div>
      </div>
    </li>
  );
};
export default VideoItem;
