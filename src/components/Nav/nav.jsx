
import { faCode, faHome, faPhone, faUser, faVcard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./nav.css";
import { useState } from "react";

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#');
  return (
    <>
      <nav>
        <a href="#" onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>
          <FontAwesomeIcon icon={faHome} />
        </a>
        <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>
          <FontAwesomeIcon icon={faUser} />
        </a>
        <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}>
          <FontAwesomeIcon icon={faVcard} />
        </a>
        <a href="#portfoglio" onClick={()=> setActiveNav('#portfoglio')} className={activeNav === '#portfoglio' ? 'active' : ''}>
          <FontAwesomeIcon icon={faCode} />
        </a>
        <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>
          <FontAwesomeIcon icon={faPhone} />
        </a>
      </nav>
    </>
  );
};

export default Nav;
