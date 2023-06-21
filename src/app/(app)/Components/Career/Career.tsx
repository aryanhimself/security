import VideoGrid from "@/Components/Ui/VideoCard/VideoGrid";
import React from "react";
import "./Career.css";

const Career = () => {
  const data = [
    {
      name: "Alina",
      thumbnail: "./assets/images/thumbnails/Alina.png",
      title: "Aşteaptă-te la neașteptat!",
      videoUrl: "/Alina analist job/Alina analist job.m3u8",
    },
    {
      name: "Cristi",
      thumbnail: "./assets/images/thumbnails/Cristi.png",
      title: "Motivat de contribuția la comunitate",
      videoUrl: "/Cristi ofiter analist JOB/Cristi ofiter analist JOB.m3u8",
    },
    {
      name: "Laurențiu",
      thumbnail: "/assets/images/thumbnails/Laurențiu.png",
      title: "Veghem la cele 3 culori!",
      videoUrl: "/Laurentiu job_experienta/Laurentiu job_experienta.m3u8",
    },
    {
      name: "Olivia",
      thumbnail: "./assets/images/thumbnails/oliva.PNG",
      title: "O dinamică aparte!",
      videoUrl: "/Olivia job_experienta/Olivia job_experienta.m3u8",
    },
  ];
  return (
    <section
      className="life__section career__section padding__style"
      id="career__section"
    >
      <div className="container">
        <div className="life__section__content flex flex__col">
          <div className="tag__container">
            <div className="heading__tags">ALEGE</div>
            <h1 className="text__highliter">Idei de carieră</h1>
          </div>
          <h2 className="">Ce spun colegii despre job-urile lor</h2>
          <VideoGrid data={data} />

          <div className="flex career__button__component">
            <button className="button" id="life__section__btn__condition">
              Condiții încadrare
            </button>
            <button className="button" id="life__section__btn__ask">
              Întreabă orice
            </button>
            <button className="button" id="life__section__btn__form">
              Formular de aplicare
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
