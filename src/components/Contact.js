import "../stylesheets/contact.scss";
import Illustration from "../images/IMG_0566.PNG";

const Contact = () => {
  return (
    <main className="contact">
      <h1 className="contact__title">Contacto</h1>
      <section className="contact__section">
        <h2 className="contact__subtitle">¿Nos ponemos en contacto? </h2>
        <p className="contact__text">
          Si estás buscando un perfil de desarrolladora front-end junior, o
          crees que podemos compartir y colaborar, no dudes en contactarme:
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
              im_martreyz
            </a>
          </li>
        </ul>
      </section>
      <img
        className="contact__image"
        src={Illustration}
        title="martreyz illustration"
        alt="Selfillustration martreyz"
      />
    </main>
  );
};

export default Contact;
