import "../stylesheets/projects.scss";
import { Link } from "react-router-dom";
import Codepen from "react-codepen-embed";
import Project from "./Project";

const Projects = (props) => {
  //Get all HTML elements needed:

  const buttonCODEPEN = document.querySelector(
    ".projects__containerSelectorCSS"
  );
  const buttonAPP = document.querySelector(".projects__containerSelectorApp");
  const infoToShowCODEPEN = document.querySelector(
    ".projects__containerCODEPEN"
  );
  const infoToShowGITHUB = document.querySelector(".projects__containerGITHUB");

  //FUNCTIONS REFERRED TO PROJECTS' SELECTOR:

  //1-Function to select CSS proyects with hexagon and animation:
  const handleCSSOnClick = (ev) => {
    infoToShowCODEPEN.classList.remove("hidden");
    infoToShowGITHUB.classList.add("hidden");
    buttonCODEPEN.classList.add("projects__containerSelectorSelected");
    buttonAPP.classList.remove("projects__containerSelectorSelected");
  };

  //2-Function to select WEBAPPs proyects with hexagon and animation:
  const handleAppOnClick = (ev) => {
    infoToShowCODEPEN.classList.add("hidden");
    infoToShowGITHUB.classList.remove("hidden");
    buttonAPP.classList.add("projects__containerSelectorSelected");
    buttonCODEPEN.classList.remove("projects__containerSelectorSelected");
  };

  //Handles projects' click and calls handler APP function:
  const handleProjectClick = (ev) => {
    let target = ev.currentTarget.id;
    props.handleProjectClick(parseInt(target));

    //Triggers function to play animation each time that info to show changes:
    showProjectInfoContainer();
  };

  //Animates info container while showing up:

  const showProjectInfoContainer = () => {
    const projectInfo = document.querySelector(
      ".projects__containerGITHUB-info"
    );
    projectInfo.classList.remove("projects__containerGITHUB-infoShow");
    void projectInfo.offsetWidth;
    projectInfo.classList.add("projects__containerGITHUB-infoShow");
  };

  //RENDERS ALL PROJECTS IN ARRAY:
  let renderProjectsArray = props.projectsData.map((item) => {
    return (
      <li
        id={item.id}
        key={item.id}
        onClick={handleProjectClick}
        className={
          item.selected
            ? "projects__containerGITHUB-title projects__containerGITHUB-titleMain"
            : "projects__containerGITHUB-title"
        }
      >
        {item.name}
      </li>
    );
  });

  return (
    <main className="projects">
      <h1
        className={
          props.accesible
            ? "projects__title projects__titleACC"
            : "projects__title"
        }
      >
        {props.translated ? "Projects:" : "Proyectos:"}
      </h1>

      <section className="projects__container">
        <div className="projects__containerSelector">
          <span
            onClick={handleAppOnClick}
            className="projects__containerSelectorApp projects__containerSelectorSelected"
          >
            WebApps
          </span>
          <span
            onClick={handleCSSOnClick}
            className="projects__containerSelectorCSS"
          >
            {props.translated ? "CSS Projects" : "Proyectos CSS"}
          </span>
        </div>
        <div className="projects__containerGITHUB">
          <div className="projects__containerGITHUB-info">
            {props.projectInfo ? (
              <Project
                webpage={props.projectInfo.webpage}
                repository={props.projectInfo.repository}
                preview={props.projectInfo.preview}
                technologies={props.projectInfo.technologies}
                description={props.projectInfo.description}
                id={props.projectInfo.id}
              />
            ) : null}
          </div>
          <ul className="projects__containerGITHUB-list">
            {renderProjectsArray}
          </ul>{" "}
        </div>
        <div className="projects__containerCODEPEN hidden">
          <div className="projects__containerCODEPEN-one">
            <Codepen
              hash="bGBqBJq"
              user="martreyz"
              defaultTab="result"
              title="Hawaii"
            />
            <a
              href="https://codepen.io/martreyz/pen/bGBqBJq"
              target="_blank"
              rel="noreferrer"
              title="View project"
              className="projects__containerCODEPEN-oneLink"
            ></a>
          </div>
          <div className="projects__containerCODEPEN-two">
            <Codepen
              hash="KKgNZoY"
              user="martreyz"
              defaultTab="result"
              title="Watch"
            />
            <a
              href="https://codepen.io/martreyz/pen/KKgNZoY"
              target="_blank"
              rel="noreferrer"
              title="View project"
              className="projects__containerCODEPEN-twoLink"
            ></a>
          </div>
          <div className="projects__containerCODEPEN-three">
            <Codepen
              hash="zYKZxBb"
              user="martreyz"
              defaultTab="result"
              title="Castle"
            />
            <a
              href="https://codepen.io/martreyz/pen/zYKZxBb"
              target="_blank"
              rel="noreferrer"
              title="View project"
              className="projects__containerCODEPEN-threeLink"
            ></a>
          </div>
        </div>
      </section>
      <section className="projects__stack">
        <div
          className={
            props.accesible
              ? "projects__stackTech projects__stackTechACC"
              : "projects__stackTech"
          }
        >
          <h2 className="projects__stackTechTitle">
            {props.translated ? "Technologies:" : "Tecnologías:"}
          </h2>
          <p className="projects__stackTechText">
            <span className="projects__stackTechText-item projects__stackTechText-itemA">
              VS Code
            </span>
            <span className="projects__stackTechText-item projects__stackTechText-itemB">
              Slack
            </span>
            <span className="projects__stackTechText-item projects__stackTechText-itemC">
              Trello
            </span>
            <span className="projects__stackTechText-item projects__stackTechText-itemD">
              Notion
            </span>
            <span className="projects__stackTechText-item projects__stackTechText-itemE">
              Figma
            </span>
            <span className="projects__stackTechText-item projects__stackTechText-itemF">
              Git
            </span>
            <span className="projects__stackTechText-item projects__stackTechText-itemG">
              Zeplin
            </span>
            <span className="projects__stackTechText-item projects__stackTechText-itemH">
              GitHub
            </span>
            <span className="projects__stackTechText-item projects__stackTechText-itemI">
              Postman
            </span>
          </p>
        </div>
        <div
          className={
            props.accesible
              ? "projects__stackLang projects__stackLangACC"
              : "projects__stackLang"
          }
        >
          <h2 className="projects__stackLangTitle">
            {props.translated ? "Stack:" : "Lenguajes:"}
          </h2>
          <p className="projects__stackLangText">
            <span className="projects__stackLangText-item projects__stackLangText-itemA">
              HTML
            </span>
            <span className="projects__stackLangText-item projects__stackLangText-itemB">
              CSS
            </span>
            <span className="projects__stackLangText-item projects__stackLangText-itemC">
              SASS
            </span>
            <span className="projects__stackLangText-item projects__stackLangText-itemD">
              JavaScript
            </span>
            <span className="projects__stackLangText-item projects__stackLangText-itemE">
              React JS
            </span>
            <span className="projects__stackLangText-item projects__stackLangText-itemF">
              jQuery
            </span>
            <span className="projects__stackLangText-item projects__stackLangText-itemG">
              Node JS
            </span>
          </p>
        </div>
      </section>
      <nav
        className={
          props.accesible
            ? "projects__menu-home projects__menu-homeACC"
            : "projects__menu-home"
        }
      >
        <Link
          title={props.translated ? "Home" : "Inicio"}
          to="/"
          className={
            props.accesible
              ? "projectsLink__menu-home projectsLink__menu-homeACC"
              : "projectsLink__menu-home"
          }
        >
          {props.translated ? "Home" : "Inicio"}
        </Link>
      </nav>
    </main>
  );
};

export default Projects;
