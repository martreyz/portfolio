import "../stylesheets/projects.scss";
import { Link } from "react-router-dom";
import Project from "./Project";
import CodepenProject from "./CodepenProject";

const Projects = (props) => {
  //FUNCTIONS REFERRED TO PROJECTS' SELECTOR:

  //1-Function to select CSS proyects style, also send information to App (mother) component to manage information:
  const handleCSSOnClick = (ev) => {
    const infoToShowCODEPEN = document.querySelector(
      ".projects__containerCODEPEN"
    );
    const infoToShowGITHUB = document.querySelector(
      ".projects__containerGITHUB"
    );
    const buttonCODEPEN = document.querySelector(
      ".projects__containerSelectorCSS"
    );
    const buttonAPP = document.querySelector(".projects__containerSelectorApp");
    infoToShowCODEPEN.classList.remove("hidden");
    infoToShowGITHUB.classList.add("hidden");
    buttonCODEPEN.classList.add("projects__containerSelectorSelected");
    buttonAPP.classList.remove("projects__containerSelectorSelected");
    buttonAPP.classList.remove("projects__containerSelectorSelectedACC");

    if (props.accesible) {
      buttonCODEPEN.classList.add("projects__containerSelectorSelectedACC");
    }

    props.handleProjectClick(parseInt(0));
  };

  //1-Function to select WEBAPPs proyects style, also send information to App (mother) component to manage information:
  const handleAppOnClick = (ev) => {
    const infoToShowCODEPEN = document.querySelector(
      ".projects__containerCODEPEN"
    );
    const infoToShowGITHUB = document.querySelector(
      ".projects__containerGITHUB"
    );
    const buttonCODEPEN = document.querySelector(
      ".projects__containerSelectorCSS"
    );
    const buttonAPP = document.querySelector(".projects__containerSelectorApp");
    infoToShowCODEPEN.classList.add("hidden");
    infoToShowGITHUB.classList.remove("hidden");
    buttonAPP.classList.add("projects__containerSelectorSelected");
    buttonCODEPEN.classList.remove("projects__containerSelectorSelected");
    buttonCODEPEN.classList.remove("projects__containerSelectorSelectedACC");
    if (props.accesible) {
      buttonAPP.classList.add("projects__containerSelectorSelectedACC");
    }

    props.handleCSSProjectClick(parseInt(0));
  };

  //Handles projects' click and calls handler APP function:
  const handleProjectClick = (ev) => {
    let target = ev.currentTarget.id;
    props.handleProjectClick(parseInt(target));

    //Triggers function to play animation each time that info to show changes:
    showProjectInfoContainer();
  };

  //Handles CSS projects' click and calls handler APP function:
  const handleCodepenProjectClick = (ev) => {
    let target = ev.currentTarget.id;
    props.handleCSSProjectClick(parseInt(target));

    //Triggers function to play animation each time that info to show changes:
    showCodepenProjectInfoContainer();
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

  //Animates info CSS container while showing up:

  const showCodepenProjectInfoContainer = () => {
    const projectInfo = document.querySelector(
      ".projects__containerCODEPEN-info"
    );
    projectInfo.classList.remove("projects__containerCODEPEN-infoShow");
    void projectInfo.offsetWidth;
    projectInfo.classList.add("projects__containerCODEPEN-infoShow");
  };

  //RENDERS ALL PROJECTS IN ARRAY:
  let renderProjectsArray = props.projectsData.map((item) => {
    return (
      <li
        id={item.id}
        key={item.id}
        onClick={handleProjectClick}
        className={
          props.accesible
            ? item.selected
              ? "projects__containerGITHUB-title projects__containerGITHUB-titleMain projects__containerGITHUB-titleACC projects__containerGITHUB-titleACCMain"
              : "projects__containerGITHUB-title projects__containerGITHUB-titleACC"
            : item.selected
            ? "projects__containerGITHUB-title projects__containerGITHUB-titleMain"
            : "projects__containerGITHUB-title"
        }
      >
        {item.name}
      </li>
    );
  });

  //RENDERS ALL CODEPEN PROJECTS IN ARRAY:
  let renderCodepenProjectsArray = props.codepenProjectsData.map((item) => {
    return (
      <li
        id={item.id}
        key={item.id}
        onClick={handleCodepenProjectClick}
        className={
          props.accesible
            ? item.selected
              ? "projects__containerCODEPEN-title projects__containerCODEPEN-titleMain projects__containerCODEPEN-titleACC projects__containerCODEPEN-titleACCMain"
              : "projects__containerCODEPEN-title projects__containerCODEPEN-titleACC"
            : item.selected
            ? "projects__containerCODEPEN-title projects__containerCODEPEN-titleMain"
            : "projects__containerCODEPEN-title"
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
        <div
          className={
            props.accesible
              ? "projects__containerSelector projects__containerSelectorACC"
              : "projects__containerSelector"
          }
        >
          <span
            onClick={handleAppOnClick}
            className={
              props.accesible
                ? "projects__containerSelectorApp projects__containerSelectorSelected projects__containerSelectorAppACC projects__containerSelectorSelectedACC"
                : "projects__containerSelectorApp projects__containerSelectorSelected"
            }
          >
            WebApps
          </span>
          <span
            onClick={handleCSSOnClick}
            className={
              props.accesible
                ? "projects__containerSelectorCSS  projects__containerSelectorCSSACC "
                : "projects__containerSelectorCSS "
            }
          >
            {props.translated ? "CSS Projects" : "Proyectos CSS"}
          </span>
        </div>
        <div
          className={
            props.accesible
              ? "projects__containerGITHUB  projects__containerGITHUBACC "
              : "projects__containerGITHUB "
          }
        >
          <div className="projects__containerGITHUB-info">
            {props.projectInfo ? (
              <Project
                accesible={props.accesible}
                webpage={props.projectInfo.webpage}
                repository={props.projectInfo.repository}
                preview={props.projectInfo.preview}
                technologies={props.projectInfo.technologies}
                description={props.projectInfo.description}
                id={props.projectInfo.id}
              />
            ) : null}
          </div>
          <ul
            className={
              props.accesible
                ? "projects__containerGITHUB-list  projects__containerGITHUB-listACC "
                : "projects__containerGITHUB-list "
            }
          >
            {renderProjectsArray}
          </ul>{" "}
        </div>
        <div
          className={
            props.accesible
              ? "projects__containerCODEPEN hidden  projects__containerCODEPENACC "
              : "projects__containerCODEPEN hidden "
          }
        >
          <div className="projects__containerCODEPEN-info">
            {props.codepenProjectInfo ? (
              <CodepenProject
                accesible={props.accesible}
                webpage={props.codepenProjectInfo.webpage}
                preview={props.codepenProjectInfo.preview}
                technologies={props.codepenProjectInfo.technologies}
                description={props.codepenProjectInfo.description}
                id={props.codepenProjectInfo.id}
              />
            ) : null}
          </div>
          <ul
            className={
              props.accesible
                ? "projects__containerCODEPEN-list  projects__containerCODEPEN-listACC "
                : "projects__containerCODEPEN-list "
            }
          >
            {renderCodepenProjectsArray}
          </ul>{" "}
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
          <h2
            className={
              props.accesible
                ? "projects__stackTechTitle projects__stackTechTitleACC"
                : "projects__stackTechTitle"
            }
          >
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
          <h2
            className={
              props.accesible
                ? "projects__stackLangTitle projects__stackLangTitleACC"
                : "projects__stackLangTitle"
            }
          >
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
            <span className="projects__stackLangText-item projects__stackLangText-itemE">
              Redux
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
