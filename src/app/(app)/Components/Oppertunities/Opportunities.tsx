import VideoJs from "@/Components/Ui/VideoJs";
import React from "react";
import "./Opportunities.css";

const Opportunities = () => {
  const data = {
    videoUrl: "ALEGE Intro Alex 2 iunie/ALEGE Intro Alex 2 iunie.m3u8",
    thumbnail: "./assets/images/thumbnails/Urmează-ți.PNG",
    name: "ALEGE",
    title: "Oportunități de angajare",
    body: "Urmează-ți vocația cu curaj!",
  };
  return (
    <section
      className="opportunitie__section employer__section padding__style"
      id="opportunitie__section"
    >
      <div className="container">
        <div className="opportunitie__section__content employer__section__content flex flex__col item-center">
          <div className="tag__container">
            <div className="heading__tags">{data.name}</div>
            <h1 className="text__highliter">{data.title}</h1>
          </div>
          <h2 className="">{data.body}</h2>
          <div className="large__video__container">
            <VideoJs src={data.videoUrl} />
          </div>
          <button className="button" id="opportunitie__section__button">
            Intreabă orice!
          </button>
        </div>
      </div>
    </section>
  );
};

export default Opportunities;
