import "../stylesheets/landing.scss";
import photo from "../images/marta.png";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <main className="landing">
      <section className="landing__container">
        <img
          className="landing__photo"
          src={photo}
          alt="Marta Rey"
          title="Marta Rey"
        />
        <h1 className="landing__title">¡Hola mundo!</h1>
        <p className="landing__text">
          <span className="landing__textOne">Soy Marta,</span>
          <span className="landing__textTwo">desarrolladora front end jr</span>
        </p>
        <p className="landing__aboutText">
          <span className="about__parr">
            Graduada en <strong>Turismo</strong> y apasionada por conocer mundo
            y sus diferentes <strong>culturas y personas</strong>.
          </span>
          <span className="about__parr">
            Mi <strong>perseverancia</strong> y{" "}
            <strong>facilidad de aprendizaje</strong> han sido clave en mi
            trayectoria profesional.
          </span>
          <span className="about__parr">
            He sido coordinadora de equipo en proyectos IT, lo que me ha
            aportado experiencia en <strong>resolución de problemas</strong>,{" "}
            <strong>organización</strong>, <strong>empatía</strong> y
            <strong> motivación de equipos</strong>.
          </span>
          <span className="about__parr">
            Me reinvento en <strong>desarrollo front-end</strong>, que me
            resulta <strong>apasionante, dinámico e infinito</strong>, y donde
            puedo aplicar las habilidades que he adquirido en mi carrera
            profesional.
          </span>
        </p>
      </section>
      <nav>
        <ul>
          <li className="landing__menu-projects">
            <Link to="/projects" className="landingLink__menu-projects">
              Proyectos
            </Link>
          </li>
          <li className="landing__menu-contact">
            <Link to="/contact" className="header__menu-contact">
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </main>
  );
};

export default Landing;
