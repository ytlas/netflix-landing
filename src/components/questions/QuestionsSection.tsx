import CTA from "../hero/CTA";

import "../../styles/QuestionsSection.css";
import "../../styles/Generals.css";
import Accordion from "./Accordion";

const QuestionsSection = () => {
  return (
    <section className="questions-section border-bottom">
      <div className="container--questions">
        <h2>Frequently Asked Questions</h2>
        <Accordion />
        <div className="container--cta">
          <CTA />
        </div>
      </div>
    </section>
  );
};

export default QuestionsSection;
