import { useState } from "react";
import AccordionItem from "./AccordionItem";

const questions = [
  {
    id: 1,
    q: "What is Netflix?",
    a: `Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!`,
  },
  {
    id: 2,
    q: "How much does Netflix cost?",
    a: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $9.99 to $19.99 a month. No extra costs, no contracts.",
  },
  {
    id: 3,
    q: "Where can I watch?",
    a: `Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.`,
  },
  {
    id: 4,
    q: "How do I cancel?",
    a: `Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.`,
  },
  {
    id: 5,
    q: "What can I watch on Netflix?",
    a: `Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.`,
  },
  {
    id: 6,
    q: `Is Netflix good for kids?`,
    a: `The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.`,
  },
];

const Accordion = () => {
  const [activeItem, setActiveItem] = useState<number>(0);
  return (
    <div className="accordion">
      {questions.map((question) => {
        return (
          <AccordionItem
            key={question.id}
            isActive={question.id === activeItem}
            question={question}
            setActiveItem={setActiveItem}
          />
        );
      })}
    </div>
  );
};

export default Accordion;
