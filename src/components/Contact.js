import "../stylesheets/contact.scss";
import Illustration from "../images/IMG_0566.PNG";
import { Link } from "react-router-dom";
import Github from "../images/github-white.svg";
import Linkedin from "../images/linkedin-white.svg";
import Twitter from "../images/twitter-white.svg";
import Mail from "../images/envelope-white.svg";

const Contact = (props) => {
  return (
    <main className="contact">
      <section className="contact__section">
        <h1 className="contact__title">
          {props.translated ? "Contact" : "Contacto"}
        </h1>
        <h2 className="contact__subtitle">
          {props.translated
            ? "Shall we get in touch?"
            : "¿Nos ponemos en contacto?"}
        </h2>
        <p className="contact__text">
          {props.translated
            ? "If you are hiring a junior front end developer profile, or you think we can share and collaborate, do not hesitate to contact me:"
            : "Si estás buscando un perfil de desarrolladora front-end junior, o crees que podemos compartir y colaborar, no dudes en contactarme:"}
        </p>
        <ul className="contact__list">
          <li className="contact__listItem contact__listGithub">
            <a
              target="_blank"
              rel="noreferrer"
              className="contact__menuList-access"
              href="https://github.com/martreyz"
              title="Access GitHub"
            >
              <img
                className="contact__logoImg"
                src={Github}
                alt="View GitHub"
                title="Logo GitHub"
              />
              martreyz
            </a>
          </li>
          <li className="contact__listItem contact__listLinkedin">
            <a
              target="_blank"
              rel="noreferrer"
              className="contact__menuList-access"
              href="https://www.linkedin.com/in/martareyrodriguez/"
              title="Access Linkedin"
            >
              <img
                className="contact__logoImg"
                src={Linkedin}
                alt="View Linkedin"
                title="Logo Linkedin"
              />
              marta.rey.rodriguez
            </a>
          </li>
          <li className="contact__listItem contact__listMail">
            <a
              target="_blank"
              rel="noreferrer"
              className="contact__menuList-access"
              href="mailto: martreyz@gmail.com"
              title="Send email"
            >
              <img
                className="contact__logoImg"
                src={Mail}
                alt="Send e-mail"
                title="Logo email"
              />
              martreyz@gmail.com
            </a>
          </li>
          <li className="contact__listItem contact__listTwitter">
            <a
              target="_blank"
              rel="noreferrer"
              className="contact__menuList-access"
              href="https://twitter.com/im_martreyz"
              title="Access Twitter"
            >
              <img
                className="contact__logoImg"
                src={Twitter}
                alt="View Twitter"
                title="Logo Twitter"
              />
              im_martreyz
            </a>
          </li>
        </ul>
        <img
          className="contact__image"
          src={Illustration}
          title="martreyz illustration"
          alt="Selfillustration martreyz"
        />
      </section>
      <nav className="contact__menu-home">
        <Link to="/" className="contactLink__menu-home">
          {props.translated ? "Home" : "Inicio"}
        </Link>
      </nav>
    </main>
  );
};

export default Contact;
