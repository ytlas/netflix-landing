import Header from "./Header";
import HeroContent from "./HeroContent";

import "../../styles/HeroSection.css";
import "../../styles/Generals.css";
const HeroSection = () => {
  return (
    <section className="border-bottom hero-section">
      <Header />
      <HeroContent />
    </section>
  );
};

export default HeroSection;
