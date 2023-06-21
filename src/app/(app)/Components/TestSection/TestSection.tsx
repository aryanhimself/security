import React from "react";
import "./TestSection.css";
const TestSection = () => {
  return (
    <section className="test__section padding__style" id="teste">
      <div className="container">
        <div className="test__section__content flex flex__col item-center">
          <div className="tag__container">
            <div className="heading__tags">ALEGE</div>
            <h1 className="text__highliter">Teste</h1>
          </div>
          <h1 className="test__title">Joacă-te serios</h1>
          <h2 className="">Testează-ți cunoștințele!</h2>
          <div className="test__container">
            <a
              href="test.html?category=it"
              className="orange__test__box test__box"
            >
              <p>Testează cunoștințele de IT</p>
            </a>
            <a
              href="test.html?category=logica"
              className="blue__test__box test__box"
            >
              <p>Testează logica</p>
            </a>
            <a
              href="test.html?category=criptologi"
              className="white__test__box test__box"
            >
              <p>Te pasionează criptologia?</p>
            </a>
            <a
              href="test.html?category=support"
              className="white__test__box test__box"
              style={{ height: "max-content" }}
            >
              <p>Ai cunoștințe tehnice</p>
            </a>
            <a
              href="test.html?category=criptologi"
              className="orange__test__box test__box"
            >
              <p>Cât de bun agent ești?</p>
            </a>
            <a
              href="test.html?category=analiza"
              className="blue__test__box test__box"
            >
              <p>Analiză strategică?</p>
            </a>
          </div>
          <button className="orange__button test_button button">
            Formular Aplicare
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestSection;
