import OverlayHeader from "@/Components/Layout/OverlayHeader";
import "./referral.css";
import Footer from "@/Components/Layout/Footer";
import InputForm from "@/Components/Ui/InputForm";

const page = () => {
  return (
    <div className="referral-body">
      <div className="referral-body-container">
        <OverlayHeader />
        <div className="container-sm">
          <div
            className="flex flex__col item-center gap-3 referral-container"
            style={{ alignItems: "start" }}
          >
            <div className="referral-text-content">
              <h1>UN SERVICIU DE ELITĂ, EFICIENT ŞI DINAMIC,</h1>
              <p>
                cu o atitudine proactivă, redutabil în confruntarea cu
                provocările contextului extern în care funcţionează
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="notification-container">
        <div className="notification-box application__form">
          <p>
            Dacă doriţi să ne sesizaţi o situaţie pe care o apreciaţi, în
            limitele prevederilor legale, ca fiind din domeniul de competenţă al
            Serviciului de Informaţii Externe, vă rugăm să folosiţi formularul
            alăturat. Vă asigurăm de confidenţialitatea mesajului dumneavoastră.
          </p>
          <form id="application_form">
            <div className="form__group">
              <label htmlFor="Prenume *">Prenume *</label>
              <InputForm
                type="text"
                placeholder="ex Adrian"
                name="firstName"
                required
              />
            </div>
            <div className="form__group">
              <label htmlFor="Nume familie *">Nume familie *</label>
              <input
                type="text"
                placeholder="ex Popescu"
                className="form__control"
                // oninvalid="setCustomValidity('te rog sa completezi acest spatiu')"
                // oninput="setCustomValidity('')"
                name="familyName"
                required
              />
            </div>
            <div className="form__group">
              <label htmlFor="Nume familie *">Email *</label>
              <input
                type="email"
                placeholder="ex nume@mail.com"
                className="form__control"
                // oninvalid="setCustomValidity('te rog sa completezi acest spatiu')"
                // oninput="setCustomValidity('')"
                name="email"
                required
              />
            </div>
            <div className="form__group">
              <label htmlFor="Nume familie *">Subject *</label>
              <input
                type="text"
                className="form__control"
                name="subject"
                required
              />
            </div>
            <div className="form__group">
              <label htmlFor="Scrie-ne pe scurt de ce iti doresti sa aplici *">
                Mesaj
              </label>
              <textarea
                name="motivation"
                cols={30}
                rows={5}
                className="form__control"
                // oninvalid="setCustomValidity('te rog sa completezi acest spatiu')"
                // oninput="setCustomValidity('')"
                required
              ></textarea>
              <span className="form__message">max 1000 caractere</span>
            </div>
            <div className="form__group">
              <label htmlFor="Nume familie *">Suma de control *</label>
              <input
                type="text"
                className="form__control"
                name="sumNum"
                required
              />
            </div>
            <div
              className="application__form__message__container"
              id="application__form__message__container"
            >
              <div className="application__form__message">
                Multumim, am receptionat mesajul si te vom contacta curand!
              </div>
            </div>
            <button
              className="orange__button application__button application__form__button"
              id="application__form__button"
            >
              Trimite
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default page;
