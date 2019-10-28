import React from "react";

const Hide = ({ video, onVideoHide }) => {
  return (
    <button
      onClick={() => onVideoHide(video)}
      className="btn btn-secondary btn-sm mt-2 mb-2"
    >
      Hide
    </button>
  );
};

export default Hide;
