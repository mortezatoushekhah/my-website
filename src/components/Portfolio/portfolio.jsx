import "./portfolio.css";
import Portfolio1 from "../../img/portfolio-01.avif";
import Portfolio2 from "../../img/portfolio-02.avif";
import Portfolio3 from "../../img/portfolio-03.avif";

const Portfolio = () => {
  return (
    <>
      <section id="portfolio">
        <h5>My Recent Work's</h5>
        <h2>Portfoglio</h2>

        <div className="container portfolio-container">
          <article className="portfolio-item">
            <div className="portfolio-item-image">
              <img src={Portfolio1} alt="" />
            </div>
            <h3>Portfolio first item</h3>
            <div className="portfolio-item-btn">
              <a href="#" className="btn">
                Source Code
              </a>
              <a href="#" className="btn btn-primary">
                Live Demo
              </a>
            </div>
          </article>

          <article className="portfolio-item">
            <div className="portfolio-item-image">
              <img src={Portfolio2} alt="" />
            </div>
            <h3>Portfolio second item</h3>
            <div className="portfolio-item-btn">
              <a href="#" className="btn">
                Source Code
              </a>
              <a href="#" className="btn btn-primary">
                Live Demo
              </a>
            </div>
          </article>

          <article className="portfolio-item">
            <div className="portfolio-item-image">
              <img src={Portfolio3} alt="" />
            </div>
            <h3>Portfolio third item</h3>
            <div className="portfolio-item-btn">
              <a href="#" className="btn">
                Source Code
              </a>
              <a href="#" className="btn btn-primary">
                Live Demo
              </a>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
