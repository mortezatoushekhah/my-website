import CallToAction from "./calltoaction";
import "./header.css";
import ProfilePicture from "../../img/pcguy.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <>
      <header>
        <div className="container header-container">
          <h5>I a'm</h5>
          <h1>Morteza Toushekhah</h1>
          <h5 className="text-light">Front End Developer</h5>
          <CallToAction />
          <HeaderSocials />

          <div className="image">
            <img src={ProfilePicture} alt="Morteza Toushekhah" />
          </div>

          <a href="#contact" className="scroll-down">
            Scroll Down
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
