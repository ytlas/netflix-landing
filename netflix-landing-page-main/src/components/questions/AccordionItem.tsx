import { BsPlusLg } from "react-icons/bs";
import "../../styles/QuestionsSection.css";

interface Question {
  id: number;
  q: string;
  a: string;
}

interface Props {
  isActive: boolean;
  question: Question;
  setActiveItem: React.Dispatch<React.SetStateAction<number>>;
}

const AccordionItem = ({ isActive, question, setActiveItem }: Props) => {
  const questionClass = isActive ? "active-question" : "";
  const crossClass = isActive ? "active-cross" : "cross";

  return (
    <div className="accordion-item">
      <div
        className={`accordion-question ${questionClass}`}
        onClick={() =>
          setActiveItem((prev) => (prev === question.id ? 0 : question.id))
        }
      >
        <span>{question.q}</span>
        <span className={`x ${crossClass}`}>
          <BsPlusLg />
        </span>
      </div>
      {isActive && <div className="accordion-answer">{question.a}</div>}
    </div>
  );
};

export default AccordionItem;
