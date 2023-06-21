import InternshipCard from "@/Components/Ui/InternshipCard/InternshipCard";
import React from "react";
import "./InternshipSection.css";

const InternshipSection = () => {
  const internshipMessage = [
    `…acest stagiu m-a prins între un final (cel al facultății,susținerea licenței) și un început, cel al recrutării în această instituție, care îmi doresc să fie în favoarea dorinței mele. Pe scurt, a fost un beneficiu atât personal, prin prisma oamenilor, cât și profesional, din perspectiva informațiilor acumulate și a începutului recrutării.`,
    `Organizarea a fost foarte bună, profesorii au fost mereu pregătiți și dornici să ne ajute atunci când aveam o problemă. Am descoperit ce înseamnă Criptologia și am aprofundat unele concepte pe care le mai știam. A fost o experiență plăcută pe care aș mai repeta-o.`,
    `Am putut interacționa cu oameni calzi și primitori, persoane care te ajută când nu știi și încearcă să facă totul interactiv și amuzant pentru noi. Nu numai interacțiunea cu specialiștii a fost plăcută, dar și cea cu prietenii pe care am reușit să mi-i fac în cele 4 săptămâni de stagiu.`,
    `Acest domeniu m-a fascinat. Chiar dacă este greu, te ține în mod constant într-o stare de evoluție continuă. Mi-a plăcut foarte mult și m-a făcut să-mi întrec limitele, prin toate subiectele abordate, teme, provocări. Cred că mi-ar plăcea să descopăr cât mai multe despre acest domeniu.`,
  ];
  return (
    <section
      className="internship__section padding__style"
      id="internship__section"
    >
      <div className="flex flex__col item-center">
        <div className="tag__container">
          <div className="heading__tags">ALEGE</div>
          <h1 className="internship__title text__highliter">
            Remarcă-te în stagii!
          </h1>
        </div>
        <div className="internship__banner">
          <div className="container flex flex__col item-center">
            <h1 className="banner__title">Stagii de practică în SIE</h1>
            <p className="banner__paragraph">
              În colaborare cu mediul universitar, organizăm în fiecare an
              programe de practică în domeniul Criptologiei. Completează
              formularul pentru a afla mai multe.
            </p>
          </div>
        </div>
        <div className="container">
          <div className="message__grid">
            {internshipMessage.map((x, i) => (
              <InternshipCard index={i} text={x} key={i} />
            ))}
          </div>
        </div>

        <div className="container">
          <div className="send__message__form">
            <h1>
              Completează formularul dacă dorești să fii informat despre
              următorul stagiu de pregătire
            </h1>
            <form className="flex flex__col item-center" id="message__form">
              <div className="message__form flex flex__row item-center">
                <div className="form__group">
                  <label htmlFor="firstname">Prenume *</label>
                  <input
                    type="text"
                    className="form__control"
                    name="firstName"
                    required
                  />
                </div>
                <div className="form__group">
                  <label htmlFor="name">Nume *</label>
                  <input
                    type="text"
                    className="form__control"
                    name="lastName"
                    required
                  />
                </div>
                <div className="form__group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    className="form__control"
                    name="email"
                    required
                  />
                </div>
                <div className="form__group">
                  <label htmlFor="Initiale">Inițiale *</label>
                  <input
                    type="text"
                    className="form__control"
                    name="initiale"
                    required
                  />
                </div>
              </div>
              <button className="message__button button" id="message__button">
                Expediază Mesajul
              </button>
              <div
                className="send__form__message__container"
                id="send__form__message__container"
              >
                <div className="application__form__message">
                  Multumim, am receptionat mesajul si te vom contacta curand!
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternshipSection;
