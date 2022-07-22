import { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_wvrtnml",
      "template_ljgchyw",
      form.current,
      "vuoizIn9Ucg-u0Dce"
    );

    e.target.reset();
  };

  return (
    <>
      <section id="contact">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <div className="container contact-container">
          <div className="contact-option">
            <article>
              <FontAwesomeIcon className="contact-icon" icon={faEnvelope} />
              <span className="email">mtoshe87@gmail.com</span>
            </article>

            <a href="https://github.com/mortezatoushekhah/" target='_blank'>
              <article>
                <FontAwesomeIcon className="contact-icon" icon={faGithub} />
                <span className="email">Github</span>
              </article>
            </a>

            <a href="https://www.instagram.com/mauri_moori/" target='_blank'>
              <article>
                <FontAwesomeIcon className="contact-icon" icon={faInstagram} />
                <span className="email">Instagram</span>
              </article>
            </a>

            <a href="https://www.linkedin.com/in/mortezatoshekhah/" target='_blank'>
              <article>
                <FontAwesomeIcon className="contact-icon" icon={faLinkedin} />
                <span className="email">Linkedin</span>
              </article>
            </a>
          </div>

          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" required placeholder="Your Name" />
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
            />
            <textarea
              name="message"
              rows="7"
              placeholder="Your Message"
              required
            ></textarea>
            <button className="btn btn-primary" type="submit">
              send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
