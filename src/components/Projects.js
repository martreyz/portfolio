import "../stylesheets/projects.scss";
import { Link } from "react-router-dom";
import Codepen from "react-codepen-embed";
import previewOne from "../images/Projects/pacmanSH.png";
import previewTwo from "../images/Projects/rickMortySH.png";
import previewThree from "../images/Projects/seriesSH.png";

const Projects = (props) => {
  const handleCSSOnClick = () => {
    const selectorApp = document.querySelector(
      ".projects__containerSelectorApp"
    );
    const selectorCSS = document.querySelector(
      ".projects__containerSelectorCSS"
    );
    const selectorContainer = document.querySelector(
      ".projects__containerSelector-hexagonPlayground"
    );
    const selectorHexagon = document.querySelector(
      ".projects__containerSelector-hexagon"
    );

    const infoToShowCODEPEN = document.querySelector(
      ".projects__containerCODEPEN"
    );
    const infoToShowGITHUB = document.querySelector(
      ".projects__containerGITHUB"
    );

    selectorCSS.classList.add("selectedByHexagon");
    selectorApp.classList.remove("selectedByHexagon");
    selectorContainer.classList.add("cointainerToCSS");
    selectorHexagon.classList.add("toCSS");
    selectorContainer.classList.remove("cointainerToApp");
    selectorHexagon.classList.remove("toApp");
    infoToShowCODEPEN.classList.remove("hidden");
    infoToShowGITHUB.classList.add("hidden");
  };

  const handleAppOnClick = () => {
    const selectorApp = document.querySelector(
      ".projects__containerSelectorApp"
    );
    const selectorCSS = document.querySelector(
      ".projects__containerSelectorCSS"
    );
    const selectorContainer = document.querySelector(
      ".projects__containerSelector-hexagonPlayground"
    );
    const selectorHexagon = document.querySelector(
      ".projects__containerSelector-hexagon"
    );

    const infoToShowCODEPEN = document.querySelector(
      ".projects__containerCODEPEN"
    );
    const infoToShowGITHUB = document.querySelector(
      ".projects__containerGITHUB"
    );
    selectorCSS.classList.remove("selectedByHexagon");
    selectorApp.classList.add("selectedByHexagon");
    selectorContainer.classList.remove("cointainerToCSS");
    selectorHexagon.classList.remove("toCSS");
    selectorContainer.classList.add("cointainerToApp");
    selectorHexagon.classList.add("toApp");
    infoToShowCODEPEN.classList.add("hidden");
    infoToShowGITHUB.classList.remove("hidden");
  };

  const handleClickonFirst = () => {
    const projectOne = document.querySelector(".projectG__containerGITHUB-one");
    const projectTwo = document.querySelector(".projectG__containerGITHUB-two");
    const projectThree = document.querySelector(
      ".projectG__containerGITHUB-three"
    );
    projectThree.classList.remove("bigProyect");
    projectOne.classList.add("bigProyect");
    projectOne.classList.remove("orderThree");
    projectOne.classList.remove("orderOne");
    projectTwo.classList.add("smallProyect");
    projectThree.classList.add("smallProyect");

    projectTwo.classList.add("orderThree");
    projectTwo.classList.remove("orderOne");
    projectThree.classList.add("orderOne");
  };

  const handleClickOnThird = () => {
    const projectOne = document.querySelector(".projectG__containerGITHUB-one");
    const projectTwo = document.querySelector(".projectG__containerGITHUB-two");
    const projectThree = document.querySelector(
      ".projectG__containerGITHUB-three"
    );
    projectOne.classList.remove("bigProyect");
    projectThree.classList.add("bigProyect");
    projectTwo.classList.add("smallProyect");
    projectTwo.classList.add("orderOne");
    projectOne.classList.add("orderThree");
    projectTwo.classList.remove("orderThree");
  };

  const handleClickonSecond = () => {
    const projectOne = document.querySelector(".projectG__containerGITHUB-one");
    const projectTwo = document.querySelector(".projectG__containerGITHUB-two");
    const projectThree = document.querySelector(
      ".projectG__containerGITHUB-three"
    );

    projectOne.classList.remove("bigProyect");
    projectThree.classList.remove("bigProyect");

    projectThree.classList.remove("orderOne");
    projectThree.classList.remove("orderTwo");
    projectOne.classList.remove("orderThree");
    projectOne.classList.remove("orderTwo");
    projectTwo.classList.remove("orderThree");
    projectTwo.classList.remove("orderOne");

    projectTwo.classList.remove("smallProyect");
  };

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
            onClick={handleCSSOnClick}
            className="projects__containerSelectorCSS"
          >
            {props.translated ? "CSS Projects" : "Proyectos CSS"}
          </span>
          <div className="projects__containerSelector-hexagonPlayground">
            <div className="projects__containerSelector-hexagon"></div>
          </div>
          <span
            onClick={handleAppOnClick}
            className="projects__containerSelectorApp selectedByHexagon"
          >
            WebApps
          </span>
        </div>
        <div className="projects__containerGITHUB">
          <div
            onClick={handleClickonFirst}
            className="projectG projectG__containerGITHUB-one"
          >
            <img
              className="projectG_oneImg"
              src={previewOne}
              title={props.translated ? "Project preview" : "Previsualización"}
              alt="Project preview"
            />
            <h3 className="projectG_oneTitle">
              {props.translated
                ? props.projectsDataEN[0].name
                : props.projectsData[0].name}
            </h3>
            <nav className="projectG_oneNav">
              <a
                className="projectG_oneNavRepo"
                href={props.projectsData[0].repository}
                title="Access repository"
              >
                .
              </a>
              <a
                className="projectG_oneNavDemo"
                href={props.projectsData[0].webpage}
                title="Access demo"
              >
                .
              </a>
            </nav>
            <p className="projectG_oneText">
              {props.translated
                ? props.projectsDataEN[0].description
                : props.projectsData[0].description}
            </p>
          </div>
          <div
            onClick={handleClickonSecond}
            className="projectG projectG__containerGITHUB-two"
          >
            <img
              className="projectG_twoImg"
              src={previewTwo}
              alt="Project preview"
              title={props.translated ? "Project preview" : "Previsualización"}
            />
            <h3 className="projectG_twoTitle">
              {props.translated
                ? props.projectsDataEN[1].name
                : props.projectsData[1].name}
            </h3>
            <nav className="projectG_twoNav">
              <a
                className="projectG_twoNavRepo"
                href={props.projectsData[1].repository}
                title="Access repository"
              >
                <div className="projectG_twoNavRepoIcon"></div>
              </a>
              <a
                className="projectG_twoNavDemo"
                href={props.projectsData[1].webpage}
                title="Access demo"
              >
                <div className="projectG_twoNavDemoIcon"></div>
              </a>
            </nav>
            <p className="projectG_twoText">
              {props.translated
                ? props.projectsDataEN[1].description
                : props.projectsData[1].description}
            </p>
          </div>
          <div
            onClick={handleClickOnThird}
            className="projectG projectG__containerGITHUB-three"
          >
            <img
              className="projectG_threeImg"
              src={previewThree}
              alt="Project preview"
              title={props.translated ? "Project preview" : "Previsualización"}
            />
            <h3 className="projectG_threeTitle">
              {props.translated
                ? props.projectsDataEN[2].name
                : props.projectsData[2].name}
            </h3>
            <nav className="projectG_threeNav">
              <a
                className="projectG_threeNavRepo"
                href={props.projectsData[2].repository}
                title="Access repository"
              >
                .
              </a>
              <a
                className="projectG_threeNavDemo"
                href={props.projectsData[2].webpage}
                title="Access demo"
              >
                .
              </a>
            </nav>
            <p className="projectG_threeText">
              {props.translated
                ? props.projectsDataEN[2].description
                : props.projectsData[2].description}
            </p>
          </div>
        </div>
        <div className="projects__containerCODEPEN hidden">
          <div className="projects__containerCODEPEN-one">
            <Codepen
              hash="bGBqBJq"
              user="martreyz"
              defaultTab="result"
              title="Hawaii"
            />
          </div>
          <div className="projects__containerCODEPEN-two">
            <Codepen
              hash="KKgNZoY"
              user="martreyz"
              defaultTab="result"
              title="Watch"
            />
          </div>
          <div className="projects__containerCODEPEN-three">
            <Codepen
              hash="zYKZxBb"
              user="martreyz"
              defaultTab="result"
              title="Castle"
            />
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
