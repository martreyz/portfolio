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
          <li className="contact__listItem contact__listGithub">martreyz</li>
          <li className="contact__listItem contact__listLinkedin">
            marta.rey.rodriguez
          </li>
          <li className="contact__listItem contact__listMail">
            martreyz@gmail.com
          </li>
          <li className="contact__listItem contact__listTwitter">
            im_martreyz
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
