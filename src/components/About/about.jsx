import "./about.css";
import MyPhoto from "../../img/my-photo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward, faFolder, faUser } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <>
      <section id="about">
        <h5>Get To Know</h5>
        <h2>About Me</h2>
        <div className="container about-container">
          <div className="about-me">
            <div className="about-image">
              <img src={MyPhoto} alt="Morteza Toushekhah" />
            </div>
          </div>
          <div className="about-content">
            <div className="about-cards">
              <article className="about-card">
                <FontAwesomeIcon icon={faAward} className="about-icon" />
                <h5>Experience</h5>
                <small>2+ years experience</small>
              </article>

              <article className="about-card">
                <FontAwesomeIcon icon={faUser} className="about-icon" />
                <h5>Clients</h5>
                <small>50+ Clients</small>
              </article>

              <article className="about-card">
                <FontAwesomeIcon icon={faFolder} className="about-icon" />
                <h5>Projects</h5>
                <small>70+ Projects</small>
              </article>
            </div>

            <p>
              I am computer engineering and <b>Front End Developer</b>. my
              skills are front end technologies such as html, css, javascript,
              react, sass, bootstrap, git.
            </p>
            <a href="#contact" className="btn btn-primary">
              Contact Me
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
