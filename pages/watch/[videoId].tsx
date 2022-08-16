import React from "react";
import { useRouter } from "next/router";
import ReactPlayer from "react-player/lazy";

function WatchVideoPage() {
  const { query } = useRouter();

  return (
    <div>
      {/* <video
        src={}
        width="800px"
        height="auto"
        controls
        autoPlay
        id="video-player"
      /> */}
      <ReactPlayer
        url={`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/videos/${query.videoId}`}
        playing={true}
        controls
      />
    </div>
  );
}

export default WatchVideoPage;
