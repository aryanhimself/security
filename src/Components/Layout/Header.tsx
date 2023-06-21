import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header>
      <div className="header">
        <div className="container">
          <div className="">
            <nav className="flex flex__row">
              <div>
                <img src="/images/logo.png" alt="" />
              </div>
              <div className="flex flex__col" id="AFLA_Button">
                <a id="AFLA"> AFLĂ </a>
                <span>SIE ca loc de muncă!</span>
              </div>
              <div className="flex flex__col" id="ALEGE_Button">
                <a id="ALEGE"> ALEGE </a>
                <span>Oportunițăti angajare!</span>
              </div>
              <div className="flex flex__col" id="APLICA_Button">
                <a id="APLICA"> APLICĂ </a>
                <span>Pentru un job unic!</span>
              </div>
              <div className="flex flex__col" id="JOBURI_Button">
                <a id="JOBURI"> JOBURI </a>
                <span>Disponibile ACUM!</span>
              </div>
              <div className="flex flex__col" id="Intreaba_Button">
                <a id="Intreaba"> Intreabă </a>
                <span style={{ visibility: "collapse" }}>Intreaba</span>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
