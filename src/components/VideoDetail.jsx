import React from "react";
//run the selected video
const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading ...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}?autoplay=1`;
  return (
    <div>
      <div className="row">
        <iframe
          src={videoSrc}
          width="640"
          height="360"
          title="Video player"
          allow="autoplay"
        />
      </div>
      <div className="row mt-3">
        <h4>{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
