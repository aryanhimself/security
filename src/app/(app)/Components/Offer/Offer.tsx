import VideoJs from "@/Components/Ui/VideoJs";
import React from "react";
import "./Offer.css";
import AccordionWrapper from "@/Components/Ui/Accordion/AccordionWrapper";

const Offer = () => {
  const data = [
    {
      title: "Beneficiile încadrării în SIE",
      node: (
        <>
          <p>
            A fi angajat al SIE înseamnă să fii în prima line de apărare a
            României.
          </p>
          <p>Înseamnă responsabilitate dar și distincție.</p>
          <p>
            Oferim un mediu care te ajută să te formezi și să te dezvolți, după
            cele mai înalte criterii, învățând de la oameni cu abilități de
            excepție.
          </p>
          <p>Beneficiile angajării în SIE sunt:</p>
          <ul>
            <li>program personalizat de integrare în organizație ;</li>
            <li>
              dezvoltare personală continuă, dezvoltarea de noi competențe
              profesionale, ce presupune participarea la cursuri, seminarii,
              conferințe, workshopuri etc, în țară sau în străinătate;
            </li>
            <li>
              oportunități de evoluție profesională; parcurs de carieră discutat
              împreună cu un consilier;
            </li>
            <li>
              programe de bunăstare psihologică, consiliere psihologică,
              facilități de petrecere a concediului de odihnă și a timpului
              liber;
            </li>
            <li>asistență medicală gratuită, pentru tine și familie;</li>
            <li>program flexibil de 8 ore, adaptat nevoilor tale;</li>
            <li>
              compensarea chiriei, în limita unui plafon conform legislației și,
              dacă îți achiziționezi un imobil, această sumă se va acorda pentru
              achitarea unei părți din rată;
            </li>
            <li>
              decontarea cheltuielilor de transport pe timpul concediului de
              odihnă;
            </li>
            <li>vouchere de vacanță;</li>
            <li>concediu de studii plătit, permisii.</li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <section
      className="offer__section unique__feature__section padding__style"
      id="offer__section"
    >
      <div className="container">
        <div className="offer__section__content unique__feature__section__content flex flex__col item-center">
          <div className="tag__container">
            <div className="heading__tags">ALEGE</div>
            <h1 className="text__highliter">O ofertă unică</h1>
          </div>
          <h2 className="">
            O ofertă performantă în slujba securității României
          </h2>
          <div className="large__video__container">
            <VideoJs src="\Ana Oferta Candidailor 2 iunie/Ana Oferta Candidailor 2 iunie.m3u8" />
            {/* poster="./assets/images/thumbnails/O_ofertă_performantă_în_slujba.PNG" */}
          </div>
          <AccordionWrapper className="offer__section_accordion" data={data} />

          <button className="button" id="offer__section__button">
            Formular de aplicare
          </button>
        </div>
      </div>
    </section>
  );
};

export default Offer;
