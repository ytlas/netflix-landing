import "../../styles/Header.css";
import LanguageOption from "./LanguageOption";
import { BsGlobe } from "react-icons/bs";

const Header = () => {
  return (
    <header className="header">
      <img className="logo" src="https://i.ibb.co/r5krrdz/logo.png" />
      <div className="header__buttons">
        <LanguageOption className="col-light inset-shadow-light" />
        <button className="btn--sign-in bg-primary">Sign In</button>
      </div>
    </header>
  );
};

export default Header;
