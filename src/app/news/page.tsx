"use client";
import OverlayHeader from "@/Components/Layout/OverlayHeader";
import "./news.css";
import Footer from "@/Components/Layout/Footer";
import NewsCard from "@/Components/NewsCard";
import { useState } from "react";
const page = () => {
  const [showNews, setShowNews] = useState(true);
  const [showMedia, setShowMedia] = useState(false);
  const [showAccereditation, setShowAccereditation] = useState(false);
  const [showNotice, setShowNotice] = useState(false);
  const handleClickNews = () => {
    setShowNews(true);
    setShowMedia(false);
  };
  const handleMediaClick = () => {
    setShowMedia(true);
    setShowNews(false);
  };
  const handleAccereditationClick = () => {
    setShowAccereditation(true);
    setShowNews(false);
  };
  const handleNoticeClick = () => {
    setShowNotice(true);
    setShowNews(false);
  };
  return (
    <div className="news-body">
      <div className="news-body-container">
        <OverlayHeader />
        <div className="container-sm">
          <div
            className="flex flex__col item-center gap-3 news-showcase-container"
            // style="align-items: start"
            style={{ alignItems: "start" }}
          >
            <div className="news-text-content">
              <h1>UN SERVICIU DE ELITĂ, EFICIENT ŞI DINAMIC,</h1>
              <p>
                cu o atitudine proactivă, redutabil în confruntarea cu
                provocările contextului extern în care funcţionează
              </p>
            </div>
            <div className="news-button-container">
              <div className="flex flex__col item-center news-button-div">
                <button className="news-button" onClick={handleClickNews}>
                  Noutăți
                </button>
                <div id="news-button-svg">
                  <svg
                    width="31"
                    height="16"
                    viewBox="0 0 31 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M29.5323 0H1.46773C0.569389 0 0.126663 1.09252 0.771583 1.7179L14.8039 15.3249C15.1917 15.7011 15.8083 15.7011 16.1961 15.3249L30.2284 1.7179C30.8733 1.09252 30.4306 0 29.5323 0Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex flex__col item-center news-button-div">
                <button className="news-button" onClick={handleMediaClick}>
                  Comunicate și apariții în media
                </button>
                <div id="media-button-svg">
                  <svg
                    width="31"
                    height="16"
                    viewBox="0 0 31 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M29.5323 0H1.46773C0.569389 0 0.126663 1.09252 0.771583 1.7179L14.8039 15.3249C15.1917 15.7011 15.8083 15.7011 16.1961 15.3249L30.2284 1.7179C30.8733 1.09252 30.4306 0 29.5323 0Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex flex__col item-center news-button-div">
                <button
                  className="news-button"
                  id="accereditation-button"
                  onClick={handleAccereditationClick}
                >
                  Acreditare
                </button>
                <div id="accereditation-button-svg">
                  <svg
                    width="31"
                    height="16"
                    viewBox="0 0 31 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M29.5323 0H1.46773C0.569389 0 0.126663 1.09252 0.771583 1.7179L14.8039 15.3249C15.1917 15.7011 15.8083 15.7011 16.1961 15.3249L30.2284 1.7179C30.8733 1.09252 30.4306 0 29.5323 0Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
              <div
                className="flex flex__col item-center news-button-div"
                onClick={handleNoticeClick}
              >
                <button className="news-button" id="notice-button">
                  Avize Tehnice
                </button>
                <div id="notice-button-svg">
                  <svg
                    width="31"
                    height="16"
                    viewBox="0 0 31 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M29.5323 0H1.46773C0.569389 0 0.126663 1.09252 0.771583 1.7179L14.8039 15.3249C15.1917 15.7011 15.8083 15.7011 16.1961 15.3249L30.2284 1.7179C30.8733 1.09252 30.4306 0 29.5323 0Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="news-container">
        <div className="container-sm">
          {/* <!-- new card --> */}
          {showNews && (
            <div className="news-section" id="news-section">
              <NewsCard />
            </div>
          )}
          {/* <!-- new card end -->
          <!-- media card --> */}
          {showMedia && (
            <div className="media-section news-section" id="media-section">
              <NewsCard />
              <NewsCard />
            </div>
          )}
        </div>
      </div>
      {/* <!-- other button content --> */}
      <div className="container-sm">
        {/* <!-- accereditation card --> */}
        <div className="accereditation-section" id="accereditation-section">
          <h1>Acreditare</h1>

          <br />
          <p>
            Pentru acreditarea la SIE a jurnaliştilor din presa centrală şi
            locală care au în responsabilitate problematica serviciilor de
            informaţii sunt necesare următoarele:
          </p>
          <br />
          <ul>
            <li>
              cerere de acreditare, semnată de o persoană din conducerea
              redacţiei, în care să se precizeze datele de contact ale
              jurnalistului pentru care se solicită acreditarea (telefon, fax,
              e-mail);
            </li>
            <li>
              copii după buletinul/cartea de identitate şi legitimaţia de presă,
              vizată la zi, ale jurnalistului desemnat.
            </li>
          </ul>

          <br />
          <p>
            Actele menţionate se transmit prin fax sau e-mail la adresele de
            contact publicate pe site.
          </p>
        </div>
        {/* <!-- notice card --> */}
        <div className="notice-section" id="notice-section">
          <h1>
            Documentele necesare emiterii de către S.I.E a avizelor pentru
            documentații de amenajare a teritoriului, urbanism și autorizarea
            executării / desființării lucrărilor de construcții
          </h1>
          <br />
          <p>
            Autoritățile administrației publice, agenții economici, persoane
            fizice și juridice, pot obține avizul Serviciului de Informații
            Externe, în conformitate cu prevederile următoarelor acte normative:
          </p>
          <br />
          <ul>
            <li>
              Legea nr. 50/1991 privind autorizarea executării lucrărilor de
              construcții, republicată, cu modificările și completările
              ulterioare;
            </li>
            <li>
              Legea nr. 350/2001 privind amenajarea teritoriului și
              urbanismului, cu modificările și completările ulterioare.
            </li>
          </ul>
          <br />
          <p>
            Documentele necesare emiterii de către S.I.E a avizelor pentru
            documentații de amenajare a teritoriului, urbanism și autorizarea
            executării / desființării lucrărilor de construcții, pe tipuri de
            documentații avizate, sunt următoarele:
          </p>
        </div>
      </div>
      {/* <!-- other button content end --> */}
      <Footer />
    </div>
  );
};

export default page;
