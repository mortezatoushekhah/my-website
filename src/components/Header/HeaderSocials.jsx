import { faLinkedin, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HeaderSocials = () => {
    return ( 
        <>
            <div className="header-socials">
                <a href="https://linkedin.com" target='_blank'>
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://linkedin.com" target='_blank'>
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://linkedin.com" target='_blank'>
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
            </div>
        </>
     );
}
 
export default HeaderSocials;