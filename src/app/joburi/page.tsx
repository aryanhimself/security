import React from "react";
import "./joburi.css";
import Footer from "@/Components/Layout/Footer";
import OverlayHeader from "@/Components/Layout/OverlayHeader";

const page = () => {
  return (
    <div>
      <div className="job-body">
        <div className="job-body-container">
          <OverlayHeader />
          <div className="container-sm">
            <div
              className="flex flex__col item-center"
              style={{ alignItems: "start", gap: "40px" }}
            >
              <div className="job-text-content">
                <h1>Bun venit în prima linie de apărare a României</h1>
                <p>
                  Punem ţara înainte de orice, datoria înainte de propria
                  persoană, suntem mândri ştiind că tot ceea ce facem este
                  pentru România.
                </p>
              </div>
              <div className="job-button flex flex__col item-center gap-1">
                <button className="phase-button">JOBURI</button>
                <span>Disponibile ACUM!</span>
              </div>
              <div className="button-list flex flex__row item-center gap-2">
                <button className="phase-button">CARIERE</button>
                <button className="phase-button">SESIZĂRI</button>
                <button className="phase-button">DESPRE NOI</button>
                <button className="phase-button">NOUTĂȚI</button>
                <button className="phase-button">FAQ</button>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default page;
