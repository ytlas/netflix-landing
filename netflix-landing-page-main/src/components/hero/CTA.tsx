import "../../styles/HeroSection.css";

const CTA = () => {
  return (
    <div className="hero-content__field">
      <label>
        Ready to watch? Enter your email to create or restart your membership.
      </label>
      <div className="cta">
        <input placeholder="Email address" />
        <button className="bg-primary">
          <span>Get</span> <span>Started</span>
        </button>
      </div>
    </div>
  );
};

export default CTA;
