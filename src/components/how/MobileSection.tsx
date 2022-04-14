import "../../styles/Generals.css";
import "../../styles/HowSection.css";

const MobileSection = () => {
  return (
    <section className="how-section border-bottom">
      <div className="how-section-grid mobile">
        <div className="how-img__box">
          <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" />
        </div>
        <div className="how-section__text-content">
          <h2>Download your shows to watch offline.</h2>
          <p>Save your favorites easily and always have something to watch.</p>
        </div>
      </div>
    </section>
  );
};

export default MobileSection;
