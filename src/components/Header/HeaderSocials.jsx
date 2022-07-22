import { faLinkedin, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HeaderSocials = () => {
    return ( 
        <>
            <div className="header-socials">
                <a href="https://www.linkedin.com/in/mortezatoshekhah/" target='_blank'>
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://github.com/mortezatoushekhah/" target='_blank'>
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://www.instagram.com/mauri_moori/" target='_blank'>
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
            </div>
        </>
     );
}
 
export default HeaderSocials;