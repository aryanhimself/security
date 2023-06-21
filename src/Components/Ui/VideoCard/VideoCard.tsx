import React from "react";
import VideoJs from "../VideoJs";
import "./VideoCard.css";
import { IVideoGridVideoItem } from "./VideoGrid";

const VideoCard = ({
  name,
  thumbnail,
  title,
  videoUrl,
}: IVideoGridVideoItem) => {
  return (
    <div className="video__card">
      <div>
        <VideoJs src={videoUrl} />
      </div>
      <div className="card__container">
        <div className="flex flex__row item-center flex__between">
          <div className="video__header__left">
            <p>{name}</p>
          </div>
          <div className="video__header__right">
            <p>{title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
