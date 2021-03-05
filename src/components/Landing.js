import "../stylesheets/landing.scss";
import photo from "../images/marta.png";
import { Link } from "react-router-dom";

const Landing = (props) => {
  return (
    <main className="landing">
      <section className="landing__container">
        <img
          className="landing__photo"
          src={photo}
          alt="Marta Rey"
          title="Marta Rey"
        />
        <h1
          className={
            props.accesible
              ? "landing__title landing__titleACC"
              : "landing__title"
          }
        >
          {" "}
          {props.translated ? "Hi!" : "¡Hola!"}{" "}
        </h1>

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
      </section>
      <nav className="nav__menu">
        <ul className="menu">
          <li
            className={
              props.accesible
                ? "landing__menu-projects landing__menu-projectsACC"
                : "landing__menu-projects"
            }
          >
            <Link
              to="/projects"
              title={props.translated ? "Projects" : "Proyectos"}
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
              title={props.translated ? "About me" : "Sobre mí"}
              to="/contact"
              className={
                props.accesible
                  ? "landingLink__menu-contact landingLink__menu-contactACC"
                  : "landingLink__menu-contact"
              }
            >
              {props.translated ? "About me" : "Sobre mí"}
            </Link>
          </li>
        </ul>
      </nav>
    </main>
  );
};

export default Landing;
