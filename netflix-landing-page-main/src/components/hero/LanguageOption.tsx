import "../../styles/Header.css";

interface Props {
  className: string;
}

const LanguageOption = ({ className }: Props) => {
  return (
    <select className={`select-box language-option ${className}`}>
      <option>English</option>
      <option>Spanish</option>
    </select>
  );
};

export default LanguageOption;
