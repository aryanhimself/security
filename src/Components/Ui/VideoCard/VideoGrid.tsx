import React from "react";
import VideoCard from "./VideoCard";
import "./VideoGrid.css";

export type IVideoGridVideoItem = {
  videoUrl: string;
  thumbnail: string;
  name: string;
  title: string;
};

const VideoGrid = ({ data }: { data: IVideoGridVideoItem[] }) => {
  return (
    <div className="video__grid">
      {data.map((x) => (
        <VideoCard {...x} key={x.name} />
      ))}
    </div>
  );
};

export default VideoGrid;
