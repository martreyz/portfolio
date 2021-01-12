import "../stylesheets/landing.scss";
import photo from "../images/marta.png";
import { Link } from "react-router-dom";

const Landing = (props) => {
  return (
    <main className="landing">
      <section className="landing__container">
        <h1
          className={
            props.accesible
              ? "landing__title landing__titleACC"
              : "landing__title"
          }
        >
          {" "}
          {props.translated ? "Hello world!" : "¡Hola mundo!"}{" "}
        </h1>
        <img
          className="landing__photo"
          src={photo}
          alt="Marta Rey"
          title="Marta Rey"
        />
        <p className="landing__text">
          <span
            className={
              props.accesible
                ? "landing__textOne landing__textOneACC"
                : "landing__textOne"
            }
          >
            {props.translated ? "This is Marta," : "Soy Marta,"}
          </span>
          <span
            className={
              props.accesible
                ? "landing__textTwo landing__textTwoACC"
                : "landing__textTwo"
            }
          >
            {props.translated
              ? "junior front end developer"
              : "desarrolladora front end jr"}
          </span>
        </p>
        <p
          className={
            props.accesible
              ? "landing__aboutText landing__aboutTextACC"
              : "landing__aboutText"
          }
        >
          <span className="about__parr">
            {props.translated ? "Graduated in" : "Graduada en"}{" "}
            <strong>{props.translated ? "Tourism" : "Turismo"}</strong>{" "}
            {props.translated
              ? "and passionate about knowing the world and its different"
              : "y apasionada por conocer mundo y sus diferentes"}{" "}
            <strong>
              {props.translated ? "cultures and people" : "culturas y personas"}
            </strong>
            .
          </span>
          <span className="about__parr">
            {props.translated ? "My" : "Mi"}{" "}
            <strong>
              {props.translated ? "perseverance" : "perseverancia"}
            </strong>{" "}
            {props.translated ? "and " : "y "}
            <strong>
              {props.translated
                ? "ease of learning"
                : "facilidad de aprendizaje"}
            </strong>{" "}
            {props.translated
              ? " have been a key in my professional career."
              : "han sido clave en mi trayectoria profesional."}
          </span>
          <span className="about__parr">
            {props.translated
              ? "I have been a team coordinator in IT projects, which has given me experience in"
              : "He sido coordinadora de equipo en proyectos IT, lo que me ha aportado experiencia en"}{" "}
            <strong>
              {props.translated
                ? "problem resolution"
                : "resolución de problemas"}
            </strong>
            ,{" "}
            <strong>
              {props.translated ? "organization" : "organización"}
            </strong>
            , <strong>{props.translated ? "empathy" : "empatía"}</strong>{" "}
            {props.translated ? "and" : "y"}
            <strong>
              {" "}
              {props.translated ? "team motivation" : "motivación de equipos"}
            </strong>
            .
          </span>
          <span className="about__parr">
            {props.translated ? "I reinvent myself in" : "Me reinvento en"}{" "}
            <strong>
              {props.translated
                ? "front end development"
                : "desarrollo front end"}
            </strong>
            {props.translated ? ", which I find " : ", que me resulta "}
            <strong>
              {props.translated
                ? "exciting, dynamic and infinite"
                : "apasionante, dinámico e infinito"}
            </strong>
            {props.translated
              ? ", and where I can apply the skills that I have acquired in my professional career."
              : ", y donde puedo aplicar las habilidades que he adquirido en mi carrera profesional."}
          </span>
        </p>
      </section>
      <nav>
        <ul>
          <li
            className={
              props.accesible
                ? "landing__menu-projects landing__menu-projectsACC"
                : "landing__menu-projects"
            }
          >
            <Link
              to="/projects"
              className={
                props.accesible
                  ? "landingLink__menu-projects landingLink__menu-projectsACC"
                  : "landingLink__menu-projects"
              }
            >
              {props.translated ? "Projects" : "Proyectos"}
            </Link>
          </li>
          <li
            className={
              props.accesible
                ? "landing__menu-contact landing__menu-contactACC"
                : "landing__menu-contact"
            }
          >
            <Link
              to="/contact"
              className={
                props.accesible
                  ? "landingLink__menu-contact landingLink__menu-contactACC"
                  : "landingLink__menu-contact"
              }
            >
              {props.translated ? "Contact" : "Contacto"}
            </Link>
          </li>
        </ul>
      </nav>
    </main>
  );
};

export default Landing;
