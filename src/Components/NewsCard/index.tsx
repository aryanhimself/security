import "./NewsCard.css";

const index = () => {
  return (
    <div className="news-card-container">
      <div className="news-images-container">
        <img src="./images/news_one.png" alt="" />
        <div className="news-date">
          <p>24 Aprilie 2023</p>
        </div>
      </div>
      <div className="news-content">
        <p>
          Serviciul de Informații Externe organizează stagiu de practică în
          domeniul Criptologie, în perioada iunie-iulie 2023.
        </p>
        <a href="#">Citește mai mult</a>
      </div>
    </div>
  );
};

export default index;
