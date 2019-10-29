import React from "react";
import VideoItem from "./VideoItem";
//render video list
const VideoList = ({ videos, onVideoSelect, onVideoHide }) => {
  const renderedVideos = videos.map(video => {
    return (
      <VideoItem
        key={video.id.videoId}
        video={video}
        onVideoSelect={onVideoSelect}
        onVideoHide={onVideoHide}
      />
    );
  });

  return <ul className="list-group">{renderedVideos}</ul>;
};
export default VideoList;
