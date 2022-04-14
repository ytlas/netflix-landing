import "../../styles/HowSection.css";

const TVSection = () => {
  return (
    <section className="how-section border-bottom">
      <div className="how-section-grid">
        <div className="how-section__text-content">
          <h2>Enjoy on your TV.</h2>
          <p>
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </p>
        </div>
        <div className="how-img__box">
          <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" />
        </div>
      </div>
    </section>
  );
};

export default TVSection;
