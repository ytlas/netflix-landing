import "../../styles/Footer.css";
import LanguageOption from "../hero/LanguageOption";
import { footerLinks } from "./footerLinks";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container--footer">
        <span className="footer__number col-medium-grey">
          Questions? Call{" "}
          <a className="col-medium-grey" href="#">
            x-xxx-xxx-xxx
          </a>
        </span>
        <div className="footer__links col-medium-grey">
          {footerLinks.map((link, index) => {
            return (
              <div key={index} className="footer__link">
                {link.name}
              </div>
            );
          })}
        </div>
        <div className="footer__language">
          <LanguageOption className="col-medium-grey inset-shadow-grey" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
