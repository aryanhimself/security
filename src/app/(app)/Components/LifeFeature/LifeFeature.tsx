import VideoCard from "@/Components/Ui/VideoCard/VideoCard";
import React from "react";
import "./LifeFeature.css";
import VideoGrid from "@/Components/Ui/VideoCard/VideoGrid";

const peoples = [
  {
    name: "Adina",
    title: "O meserie cu dinamică aparte",
    videoUrl: "Adina experienta IT/Adina experienta IT.m3u8",
    thumbnail: "./assets/images/thumbnails/adina.PNG",
  },
  {
    name: "Radu",
    title: "Viața bate filmul!",
    videoUrl: "Radu cyber despre experiente/Radu cyber despre experiente.m3u8",
    thumbnail: "./assets/images/thumbnails/radu.PNG",
  },
  {
    name: "Vlad",
    title: "O familie puternică şi unită",
    videoUrl: "Vlad tehnic job_experiente/Vlad tehnic job_experiente.m3u8",
    thumbnail: "./assets/images/thumbnails/vlad.PNG",
  },
  {
    name: "loana",
    title: "Perseverenţa este răsplătită!",
    videoUrl: "Ioana_job_experiente/Ioana job_experiente.m3u8",
    thumbnail: "./assets/images/thumbnails/Ioana.png",
  },
];

const LifeFeature = () => {
  return (
    <section className="life__section padding__style" id="life__section">
      <div className="container">
        <div className="life__section__content flex flex__col item-center">
          <div className="tag__container">
            <div className="heading__tags">AFLĂ</div>
            <h1 className="text__highliter">Viața în SIE</h1>
          </div>
          <h2 className="">Experiențe unice relatate de colegii noștri</h2>
          <VideoGrid data={peoples} />
        </div>
        <p className="video__notice">
          *experiențele sunt reale, dar numele au fost schimbate, iar imaginile
          sunt ale unor avataruri
        </p>
      </div>
    </section>
  );
};

export default LifeFeature;
