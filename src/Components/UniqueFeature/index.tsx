import React from "react";
import "./UniqueFeature.css";
import VideoJs from "../Ui/VideoJs";

const FirstUniqueFeature = () => {
  return (
    <section
      className="unique__feature__section padding__style"
      id="unique__feature__section"
    >
      <div className="container">
        <div className="unique__feature__section__content flex flex__col item-center">
          <h1 className="">
            Ai în față un viitor valoros și unic, aplică la SIE!
          </h1>
          <div className="large__video__container">
            <VideoJs src="Intro Cariere Dan, Ana, Alex 2 iunie/Intro Cariere Dan, Ana, Alex 2 iunie.m3u8" />
          </div>

          <button className="button" id="unique__feature__button">
            Formular de aplicare
          </button>
        </div>
      </div>
    </section>
  );
};

export default FirstUniqueFeature;
