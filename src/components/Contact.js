import "../stylesheets/contact.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Github from "../images/Social-Footer/github.svg";
import Linkedin from "../images/Social-Footer/linkedin.svg";
import Twitter from "../images/Social-Footer/twitter.svg";
import Mail from "../images/Social-Footer/envelope.svg";
import GithubACC from "../images/Social-Footer/githubACC.svg";
import LinkedinACC from "../images/Social-Footer/linkedinACC.svg";
import TwitterACC from "../images/Social-Footer/twitterACC.svg";
import MailACC from "../images/Social-Footer/envelopeACC.svg";

const Contact = (props) => {
  //Declare state to stop autohover when user's interaction:
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    const trajectoryArray = document.querySelectorAll(
      ".contact_trajectoryItem"
    );

    //user's hover handler:
    const showTrajectoryContentOnHover = (ev) => {
      setIsHovered(true);
      props.handleTrajectoryClick(parseInt(ev.currentTarget.id), "user");
      trajectoryArray[props.counterTrajectory].classList.remove("item_hovered");
    };

    //autohover handler:
    const showTrajectoryContentAutoHover = (id) => {
      props.handleTrajectoryClick(id);
    };

    //Listener loop in order to listen all array elements:
    for (let i = 0; i < trajectoryArray.length; i++) {
      trajectoryArray[i].addEventListener(
        "mouseover",
        showTrajectoryContentOnHover
      );
      trajectoryArray[i].addEventListener(
        "click",
        showTrajectoryContentOnHover
      );
    }

    //timeout autohover function:
    const autoHover = () => {
      if (!isHovered) {
        if (props.counterTrajectory === 9) {
          showTrajectoryContentAutoHover(0);
          trajectoryArray[9].classList.remove("item_hovered");
          trajectoryArray[0].classList.add("item_hovered");
        } else {
          showTrajectoryContentAutoHover(props.counterTrajectory + 1);
          trajectoryArray[props.counterTrajectory + 1].classList.add(
            "item_hovered"
          );
          trajectoryArray[props.counterTrajectory].classList.remove(
            "item_hoveredACC"
          );
          trajectoryArray[props.counterTrajectory].classList.remove(
            "item_hovered"
          );
          if (props.accesible) {
            trajectoryArray[props.counterTrajectory + 1].classList.add(
              "item_hoveredACC"
            );
          }
        }
      }
    };

    setTimeout(autoHover, 8000);
  });

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
      <section
        className={
          props.accesible
            ? "contact_trajectory contact_trajectoryACC"
            : "contact_trajectory"
        }
      >
        <h2
          className={
            props.accesible
              ? "contact_trajectoryTitle contact_trajectoryTitleACC"
              : "contact_trajectoryTitle"
          }
        >
          {props.translated
            ? "Professional trajectory:"
            : "Trayectoria profesional :"}{" "}
        </h2>
        <ul className="contact_trajectoryContainer">
          {" "}
          <li
            id="0"
            className={
              props.accesible
                ? "contact_trajectoryItem contact_trajectoryUniversity contact_trajectoryItemACC"
                : "contact_trajectoryItem item_hovered contact_trajectoryUniversity"
            }
          >
            2008
          </li>
          <li
            id="1"
            className={
              props.accesible
                ? "contact_trajectoryItem contact_trajectoryNH contact_trajectoryItemACC"
                : "contact_trajectoryItem contact_trajectoryNH"
            }
          >
            2010
          </li>
          <li
            id="2"
            className={
              props.accesible
                ? "contact_trajectoryItem contact_trajectoryEurostarsPraga contact_trajectoryItemACC"
                : "contact_trajectoryItem contact_trajectoryEurostarsPraga"
            }
          >
            2011
          </li>
          <li
            id="3"
            className={
              props.accesible
                ? "contact_trajectoryItem contact_trajectoryEurostarsMadrid contact_trajectoryItemACC"
                : "contact_trajectoryItem contact_trajectoryEurostarsMadrid"
            }
          >
            2013
          </li>
          <li
            id="4"
            className={
              props.accesible
                ? "contact_trajectoryItem contact_trajectoryEurostarsMadridRevenue contact_trajectoryItemACC"
                : "contact_trajectoryItem contact_trajectoryEurostarsMadridRevenue"
            }
          >
            2015
          </li>
          <li
            id="5"
            className={
              props.accesible
                ? "contact_trajectoryItem contact_trajectoryEurostarsMadridTMS contact_trajectoryItemACC"
                : "contact_trajectoryItem contact_trajectoryEurostarsMadridTMS"
            }
          >
            2016
          </li>
          <li
            id="6"
            className={
              props.accesible
                ? "contact_trajectoryItem contact_trajectoryGoldcarMadrid contact_trajectoryItemACC"
                : "contact_trajectoryItem contact_trajectoryGoldcarMadrid"
            }
          >
            2018
          </li>
          <li
            id="7"
            className={
              props.accesible
                ? "contact_trajectoryItem contact_trajectoryAdalab contact_trajectoryItemACC"
                : "contact_trajectoryItem contact_trajectoryAdalab"
            }
          >
            2020
          </li>
          <li
            id="8"
            className={
              props.accesible
                ? "contact_trajectoryItem contact_trajectorypostAdalab contact_trajectoryItemACC"
                : "contact_trajectoryItem contact_trajectorypostAdalab"
            }
          >
            2021
          </li>
          <li
            id="9"
            className={
              props.accesible
                ? "contact_trajectoryItem contact_trajectoryPerspectives contact_trajectoryItemACC"
                : "contact_trajectoryItem contact_trajectoryPerspectives"
            }
          >
            ...
          </li>
        </ul>
        <p
          className={
            props.counterTrajectory % 3 === 0
              ? props.accesible
                ? "contact_trajectoryContent bg_yellow contact_trajectoryContentACC"
                : "contact_trajectoryContent bg_yellow"
              : props.counterTrajectory === 2 ||
                props.counterTrajectory === 5 ||
                props.counterTrajectory === 8
              ? props.accesible
                ? "contact_trajectoryContent contact_trajectoryContentACC"
                : "contact_trajectoryContent"
              : props.accesible
              ? "contact_trajectoryContent bg_red contact_trajectoryContentACC"
              : "contact_trajectoryContent bg_red"
          }
        >
          {props.infoToShow}
        </p>
      </section>
      <section
        className={
          props.accesible
            ? "contact__hobbies contact__hobbiesACC"
            : "contact__hobbies"
        }
      >
        <h3 className="contact__hobbiesTitle">
          {props.translated
            ? "A little more about me:"
            : "Un poco más sobre quién soy:"}
        </h3>
        <p className="contact__hobbiesText">
          {props.translated
            ? "In my spare time, if I'm not programming I will probably be drawing or playing the ukulele, although in both I'm self-taught and I still have a lot to learn. I love animals and I live with two cats, I like coffee and adore winter."
            : "En mis ratos libres, si no estoy programando, probablemente estaré dibujando o tocando el ukelele, aunque en ambos soy autodidacta y aún me queda muchísimo por aprender. Me encantan los animales y convivo con dos gatos, me gusta el café y adoro el invierno."}
        </p>
        <p className="contact__hobbiesAbout">
          {props.translated
            ? "I am galician but I have been living in Madrid for 8 years."
            : "Soy gallega pero ya llevo casi 8 años residiendo en Madrid."}
        </p>
      </section>
      <section className="contact__section">
        <h2
          className={
            props.accesible
              ? "contact__sectionSubtitle contact__sectionSubtitleACC"
              : "contact__sectionSubtitle"
          }
        >
          {props.translated
            ? "Shall we get in touch?"
            : "¿Nos ponemos en contacto?"}
        </h2>
        <p
          className={
            props.accesible
              ? "contact__sectionText contact__sectionTextACC"
              : "contact__sectionText"
          }
        >
          {props.translated
            ? "If you are hiring a junior front end developer profile, or you think we can share and collaborate, do not hesitate to contact me:"
            : "Si estás buscando un perfil de desarrolladora front-end junior, o crees que podemos compartir y colaborar, no dudes en contactarme:"}
        </p>
        <ul
          className={
            props.accesible
              ? "contact__sectionList contact__sectionListACC"
              : "contact__sectionList"
          }
        >
          <li className="contact__sectionListItem contact__sectionListGithub">
            <a
              target="_blank"
              rel="noreferrer"
              className={
                props.accesible
                  ? "contact__sectionMenuList-access contact__sectionMenuList-accessACC"
                  : "contact__sectionMenuList-access"
              }
              href="https://github.com/martreyz"
              title="Access GitHub"
            >
              <img
                className="contact__sectionLogoImg"
                src={props.accesible ? GithubACC : Github}
                alt="View GitHub"
                title="Logo GitHub"
              />
              martreyz
            </a>
          </li>
          <li className="contact__sectionListItem contact__sectionListLinkedin">
            <a
              target="_blank"
              rel="noreferrer"
              className={
                props.accesible
                  ? "contact__sectionMenuList-access contact__sectionMenuList-accessACC"
                  : "contact__sectionMenuList-access"
              }
              href="https://www.linkedin.com/in/martareyrodriguez/"
              title="Access Linkedin"
            >
              <img
                className="contact__sectionLogoImg"
                src={props.accesible ? LinkedinACC : Linkedin}
                alt="View Linkedin"
                title="Logo Linkedin"
              />
              marta.rey.rodriguez
            </a>
          </li>
          <li className="contact__sectionListItem contact__sectionListMail">
            <a
              target="_blank"
              rel="noreferrer"
              className={
                props.accesible
                  ? "contact__sectionMenuList-access contact__sectionMenuList-accessACC"
                  : "contact__sectionMenuList-access"
              }
              href="mailto: martreyz@gmail.com"
              title="Send email"
            >
              <img
                className="contact__sectionLogoImg"
                src={props.accesible ? MailACC : Mail}
                alt="Send e-mail"
                title="Logo email"
              />
              martreyz@gmail.com
            </a>
          </li>
          <li
            className={"contact__sectionListItem contact__sectionListTwitter"}
          >
            <a
              target="_blank"
              rel="noreferrer"
              className={
                props.accesible
                  ? "contact__sectionMenuList-access contact__sectionMenuList-accessACC"
                  : "contact__sectionMenuList-access"
              }
              href="https://twitter.com/im_martreyz"
              title="Access Twitter"
            >
              <img
                className="contact__sectionLogoImg"
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
          title={props.translated ? "Home" : "Inicio"}
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
