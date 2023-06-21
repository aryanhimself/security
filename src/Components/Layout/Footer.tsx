"use client";
import { useState, useRef } from "react";
import "./footer.css";

const Footer = () => {
  const footerDiv = useRef<null | HTMLDivElement>(null);
  const [showFooter, setShowFooter] = useState(false);
  const handleFooterClick = () => {
    setShowFooter(!showFooter);
    footerDiv.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <footer className="footer">
      <div className="container-sm">
        <div className="flex flex__between">
          <div className="flex flex__col item-center" id="contact-sie">
            <div
              className="flex flex__row item-center gap-1"
              onClick={handleFooterClick}
            >
              <p>Contact - SIE</p>
              <span>
                <svg
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1 1L6 6L11 1" stroke="white" stroke-width="2" />
                </svg>
              </span>
            </div>
            {showFooter && (
              <div
                className="contacts-container flex flex__col item-center gap-2"
                id="contacts-container"
                ref={footerDiv}
              >
                <div className="contacts-info flex flex__row item-center gap-1">
                  <div>
                    <p>
                      Telefon: <b>(+4021) 203.41.37</b>
                    </p>
                  </div>
                  <div className="verticle-divider"></div>
                  <div>
                    <p>
                      Fax: <b>(+4021) 203.41.63</b>
                    </p>
                  </div>
                  <div className="verticle-divider"></div>
                  <div>
                    <p>
                      E-mail:
                      <b>
                        E-mail: relatii_presa@sie.ro; relatii_publice@sie.ro
                      </b>
                    </p>
                  </div>
                  <div className="verticle-divider"></div>
                  <div>
                    <p>
                      Telefon: <b>(+4021) 203.41.37</b>
                    </p>
                  </div>
                </div>
                <div className="contacts-info flex flex__row item-center gap-2">
                  <div>
                    <p>
                      Adresa:
                      <b>
                        Sos. Bucuresti - Ploiesti, nr. 280-282, sector 1 ,
                        Bucuresti
                      </b>
                    </p>
                  </div>
                  <div className="verticle-divider"></div>
                  <div>
                    <p>Oficiul postal 41, casuta postala 59, Bucuresti</p>
                  </div>
                </div>
                <div className="contacts-info flex flex__row item-center gap-2">
                  <div>
                    <p>
                      Pentru orice problema de natura tehnica, va rugam sa ne
                      contactati la adresa de e-mail: webmaster@sie.ro
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="social-link flex flex__row item-center gap-2">
            <div>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.3335 10.6667C23.4552 10.6667 25.4901 11.5095 26.9904 13.0098C28.4906 14.5101 29.3335 16.545 29.3335 18.6667V28H24.0002V18.6667C24.0002 17.9594 23.7192 17.2812 23.2191 16.7811C22.719 16.281 22.0407 16 21.3335 16C20.6263 16 19.948 16.281 19.4479 16.7811C18.9478 17.2812 18.6668 17.9594 18.6668 18.6667V28H13.3335V18.6667C13.3335 16.545 14.1764 14.5101 15.6766 13.0098C17.1769 11.5095 19.2118 10.6667 21.3335 10.6667Z"
                  fill="white"
                />
                <path d="M7.99984 12H2.6665V28H7.99984V12Z" fill="white" />
                <path
                  d="M5.33317 8.00002C6.80593 8.00002 7.99984 6.80611 7.99984 5.33335C7.99984 3.86059 6.80593 2.66669 5.33317 2.66669C3.86041 2.66669 2.6665 3.86059 2.6665 5.33335C2.6665 6.80611 3.86041 8.00002 5.33317 8.00002Z"
                  fill="white"
                />
              </svg>
            </div>
            <div>
              <svg
                width="15"
                height="28"
                viewBox="0 0 15 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.0002 0.666687H11.0002C9.23205 0.666687 7.53636 1.36907 6.28612 2.61931C5.03588 3.86955 4.3335 5.56524 4.3335 7.33335V11.3334H0.333496V16.6667H4.3335V27.3334H9.66683V16.6667H13.6668L15.0002 11.3334H9.66683V7.33335C9.66683 6.97973 9.80731 6.64059 10.0574 6.39054C10.3074 6.1405 10.6465 6.00002 11.0002 6.00002H15.0002V0.666687Z"
                  fill="white"
                />
              </svg>
            </div>
            <div>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M22.667 2.66669H9.33366C5.65176 2.66669 2.66699 5.65146 2.66699 9.33335V22.6667C2.66699 26.3486 5.65176 29.3334 9.33366 29.3334H22.667C26.3489 29.3334 29.3337 26.3486 29.3337 22.6667V9.33335C29.3337 5.65146 26.3489 2.66669 22.667 2.66669ZM21.3336 15.16C21.4981 16.2696 21.3086 17.4029 20.7919 18.3987C20.2753 19.3944 19.4578 20.2019 18.4558 20.7062C17.4537 21.2106 16.3182 21.3861 15.2106 21.2079C14.1031 21.0297 13.0799 20.5068 12.2867 19.7135C11.4935 18.9203 10.9706 17.8971 10.7924 16.7896C10.6141 15.682 10.7897 14.5465 11.294 13.5445C11.7984 12.5424 12.6058 11.725 13.6016 11.2083C14.5973 10.6916 15.7306 10.5021 16.8403 10.6666C17.9722 10.8345 19.0201 11.3619 19.8292 12.1711C20.6383 12.9802 21.1657 14.0281 21.3336 15.16ZM24.8317 9.19085C24.977 8.91081 25.0303 8.59207 24.984 8.27997C24.9368 7.96163 24.7885 7.66691 24.5609 7.43934C24.3333 7.21177 24.0386 7.06343 23.7203 7.01623C23.4082 6.96995 23.0894 7.02325 22.8094 7.16857C22.5293 7.31388 22.3022 7.5438 22.1604 7.82562C22.0185 8.10744 21.9692 8.42681 22.0193 8.7383C22.0694 9.0498 22.2165 9.33756 22.4396 9.56066C22.6627 9.78375 22.9504 9.93082 23.2619 9.98095C23.5734 10.0311 23.8928 9.9817 24.1746 9.83985C24.4564 9.698 24.6864 9.4709 24.8317 9.19085Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
