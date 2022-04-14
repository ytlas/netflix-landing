import "../../styles/HeroSection.css";
import CTA from "./CTA";

const HeroContent = () => {
  return (
    <div className="hero-content">
      <div className="hero-content__text">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h3>Watch anywhere. Cancel anytime.</h3>
      </div>
      <div className="container--hero-cta">
        <CTA />
      </div>
    </div>
  );
};

export default HeroContent;
