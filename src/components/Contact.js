import "../stylesheets/contact.scss";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Github from "../images/github-alt-brands.svg";
import Linkedin from "../images/linkedin-in-brands.svg";
import Twitter from "../images/twitter-brands.svg";
import Mail from "../images/envelope-solid.svg";
import GithubACC from "../images/github-ACC.svg";
import LinkedinACC from "../images/linkedin-ACC.svg";
import TwitterACC from "../images/twitter-ACC.svg";
import MailACC from "../images/envelope-ACC.svg";

const Contact = (props) => {
  useEffect(() => {
    const trajectoryArray = document.querySelectorAll(
      ".contact_trajectoryItem"
    );

    const trajectoryContent = document.querySelector(
      ".contact_trajectoryContent"
    );

    let isHovered = false;
    let counter = 1;

    const showTrajectoryContentOnClick = (ev) => {
      if (trajectoryArray[counter - 1]) {
        trajectoryArray[counter - 1].classList.remove("item_hovered");
      }

      const infoToShow = props.trajectory[ev.currentTarget.id];
      trajectoryContent.innerHTML = infoToShow;
      if (
        ev.currentTarget.id === "0" ||
        parseInt(ev.currentTarget.id) % 3 === 0
      ) {
        trajectoryContent.classList.add("bg_yellow");
        trajectoryContent.classList.remove("bg_red");
      } else if (
        ev.currentTarget.id === "1" ||
        (parseInt(ev.currentTarget.id) - 1) % 3 === 0
      ) {
        trajectoryContent.classList.add("bg_red");
        trajectoryContent.classList.remove("bg_yellow");
      } else {
        trajectoryContent.classList.remove("bg_red");
        trajectoryContent.classList.remove("bg_yellow");
      }
    };

    const showTrajectoryContentOnHover = (ev) => {
      isHovered = true;
      if (trajectoryArray[counter - 1]) {
        trajectoryArray[counter - 1].classList.remove("item_hovered");
      }

      const infoToShow = props.trajectory[ev.currentTarget.id];
      trajectoryContent.innerHTML = infoToShow;
      if (
        ev.currentTarget.id === "0" ||
        parseInt(ev.currentTarget.id) % 3 === 0
      ) {
        trajectoryContent.classList.add("bg_yellow");
        trajectoryContent.classList.remove("bg_red");
      } else if (
        ev.currentTarget.id === "1" ||
        (parseInt(ev.currentTarget.id) - 1) % 3 === 0
      ) {
        trajectoryContent.classList.add("bg_red");
        trajectoryContent.classList.remove("bg_yellow");
      } else {
        trajectoryContent.classList.remove("bg_red");
        trajectoryContent.classList.remove("bg_yellow");
      }
    };

    for (let i = 0; i < trajectoryArray.length; i++) {
      trajectoryArray[i].addEventListener(
        "mouseover",
        showTrajectoryContentOnHover
      );
      trajectoryArray[i].addEventListener(
        "click",
        showTrajectoryContentOnClick
      );
    }

    const changeHover = () => {
      if (!isHovered) {
        if (counter !== 9) {
          trajectoryArray[counter].classList.add("item_hovered");
          if (counter !== 0) {
            trajectoryArray[counter - 1].classList.remove("item_hovered");
          } else {
            trajectoryArray[9].classList.remove("item_hovered");
          }
          trajectoryArray[counter].click();
          counter++;
        } else {
          trajectoryArray[counter].classList.add("item_hovered");
          trajectoryArray[counter - 1].classList.remove("item_hovered");
          trajectoryArray[counter].click();
          counter = 0;
        }
      }
    };

    setInterval(changeHover, 8000);
  }, []);

  return (
    <main className="contact">
      <h1
        className={
          props.accesible
            ? "contact__title contact__titleACC"
            : "contact__title"
        }
      >
        {props.translated ? "About me:" : "Sobre mí:"}
      </h1>
      <section className="contact_trajectory">
        <h2 className="contact_trajectoryTitle">Trayectoria profesional:</h2>
        <ul className="contact_trajectoryContainer">
          {" "}
          <li
            id="0"
            className="contact_trajectoryItem item_hovered contact_trajectoryUniversity"
          >
            2008
          </li>
          <li id="1" className="contact_trajectoryItem contact_trajectoryNH">
            2010
          </li>
          <li
            id="2"
            className="contact_trajectoryItem contact_trajectoryEurostarsPraga"
          >
            2011
          </li>
          <li
            id="3"
            className="contact_trajectoryItem contact_trajectoryEurostarsMadrid"
          >
            2013
          </li>
          <li
            id="4"
            className="contact_trajectoryItem contact_trajectoryEurostarsMadridRevenue"
          >
            2015
          </li>
          <li
            id="5"
            className="contact_trajectoryItem contact_trajectoryEurostarsMadridTMS"
          >
            2016
          </li>
          <li
            id="6"
            className="contact_trajectoryItem contact_trajectoryGoldcarMadrid"
          >
            2018
          </li>
          <li
            id="7"
            className="contact_trajectoryItem contact_trajectoryAdalab"
          >
            2020
          </li>
          <li
            id="8"
            className="contact_trajectoryItem contact_trajectorypostAdalab"
          >
            2021
          </li>
          <li
            id="9"
            className="contact_trajectoryItem contact_trajectoryPerspectives"
          >
            ...
          </li>
        </ul>
        <p className="contact_trajectoryContent bg_yellow">
          {props.trajectory[0]}{" "}
        </p>
      </section>
      <section className="contact__hobbies">
        <h3 className="contact__hobbiesTitle">Un poco más sobre quién soy:</h3>
        <p className="contact__hobbiesAbout">
          Soy gallega pero ya llevo casi 8 años residiendo en Madrid.
        </p>
        <p className="contact__hobbiesText">
          En mis ratos libres, si no estoy programando, probablemente estaré
          dibujando o tocando el ukelele, aunque en ambos soy autodidacta y aún
          me queda muchísimo por aprender. Me encantan los animales y convivo
          con dos gatos, me gusta el café y adoro el invierno.
        </p>
      </section>
      <section className="contact__section">
        <h2
          className={
            props.accesible
              ? "contact__subtitle contact__subtitleACC"
              : "contact__subtitle"
          }
        >
          {props.translated
            ? "Shall we get in touch?"
            : "¿Nos ponemos en contacto?"}
        </h2>
        <p
          className={
            props.accesible ? "contact__text contact__textACC" : "contact__text"
          }
        >
          {props.translated
            ? "If you are hiring a junior front end developer profile, or you think we can share and collaborate, do not hesitate to contact me:"
            : "Si estás buscando un perfil de desarrolladora front-end junior, o crees que podemos compartir y colaborar, no dudes en contactarme:"}
        </p>
        <ul
          className={
            props.accesible ? "contact__list contact__listACC" : "contact__list"
          }
        >
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
                src={props.accesible ? GithubACC : Github}
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
                src={props.accesible ? LinkedinACC : Linkedin}
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
                src={props.accesible ? MailACC : Mail}
                alt="Send e-mail"
                title="Logo email"
              />
              martreyz@gmail.com
            </a>
          </li>
          <li className={"contact__listItem contact__listTwitter"}>
            <a
              target="_blank"
              rel="noreferrer"
              className="contact__menuList-access"
              href="https://twitter.com/im_martreyz"
              title="Access Twitter"
            >
              <img
                className="contact__logoImg"
                src={props.accesible ? TwitterACC : Twitter}
                alt="View Twitter"
                title="Logo Twitter"
              />
              im_martreyz
            </a>
          </li>
        </ul>
      </section>
      <nav
        className={
          props.accesible
            ? "contact__menu-home contact__menu-homeACC"
            : "contact__menu-home"
        }
      >
        <Link
          to="/"
          className={
            props.accesible
              ? "contactLink__menu-home contactLink__menu-homeACC"
              : "contactLink__menu-home"
          }
        >
          {props.translated ? "Home" : "Inicio"}
        </Link>
      </nav>
    </main>
  );
};

export default Contact;
