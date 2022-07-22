import "./experience.css";
import Html from "../../img/html.svg";
import Css from '../../img/css.svg';
import Js from '../../img/javascript.svg';
import Reactjs from '../../img/react.svg';
import Sass from '../../img/sass.svg';
import Git from '../../img/git.svg';
const Experience = () => {
  return (
    <>
      <section id="experience">
        <h5>What Can I Do</h5>
        <h2>My Skills</h2>

        <div className="container experience-container">
          <h3>Front End Development</h3>
          <div className="skills-images">
            <img src={Html} alt="HTML" title="HTML" />
            <img src={Css} alt="CSS" />
            <img src={Js} alt="JAVASCRIPT" />
            <img src={Reactjs} alt="REACT" />
            <img src={Sass} alt="SASS" />
            <img src={Git} alt="GIT" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
