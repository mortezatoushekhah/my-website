import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer id="footer" className="footer-copyright">
        <small>&copy; Morteza Toushekhah, all rights reserved!</small>
        <a href="#">
          <FontAwesomeIcon className="top-arrow" icon={faArrowAltCircleUp} />
        </a>
      </footer>
    </>
  );
};

export default Footer;
<></>;
