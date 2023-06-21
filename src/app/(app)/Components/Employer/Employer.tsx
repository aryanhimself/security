import VideoJs from "@/Components/Ui/VideoJs";
import React from "react";
import "./Employer.css";

const Employer = () => {
  return (
    <section
      className="employer__section padding__style"
      id="employer__section"
    >
      <div className="container">
        <div className="employer__section__content flex flex__col item-center">
          <div className="tag__container">
            <div className="heading__tags">AFLĂ</div>
            <h1 className="text__highliter">SIE ca angajator</h1>
          </div>
          <h2 className="">O echipă de elită, o viață specială</h2>
          <div className="large__video__container">
            <VideoJs src="/Intro Afla! Ana 2 iunie/Intro Afla! Ana 2 iunie.m3u8" />
            {/* poster="./assets/images/thumbnails/O_echipă_de_elită.PNG" */}
          </div>
          <button className="button" id="employer__section__button">
            Intreabă orice!
          </button>
        </div>
      </div>
    </section>
  );
};

export default Employer;
