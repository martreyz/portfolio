import "../stylesheets/projects.scss";
import { Link } from "react-router-dom";
import Codepen from "react-codepen-embed";
import previewOne from "../images/bodybg.PNG";
import previewTwo from "../images/rickmorty.png";
import previewThree from "../images/preview.png";

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

  return (
    <main className="projects">
      <h1
        className={
          props.accesible
            ? "projects__title projects__titleACC"
            : "projects__title"
        }
      >
        {props.translated ? "Projects" : "Proyectos"}
      </h1>

      <section className="projects__container">
        <div className="projects__containerSelector">
          <span
            onClick={handleCSSOnClick}
            className="projects__containerSelectorCSS"
          >
            Proyectos CSS
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
          <div className="projectG projectG__containerGITHUB-one">
            <img
              className="projectG_oneImg"
              src={previewOne}
              title="Project preview"
              alt="Project preview"
            />
            <h3 className="projectG_oneTitle">{props.projectsData[0].name}</h3>
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
              {props.projectsData[0].description}
            </p>
          </div>
          <div className="projectG projectG__containerGITHUB-two">
            <img
              className="projectG_twoImg"
              src={previewTwo}
              alt="Project preview"
              title="Project preview"
            />
            <h3 className="projectG_twoTitle">{props.projectsData[1].name}</h3>
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
              {props.projectsData[1].description}
            </p>
          </div>
          <div className="projectG projectG__containerGITHUB-three">
            <img
              className="projectG_threeImg"
              src={previewThree}
              alt="Project preview"
              title="Project preview"
            />
            <h3 className="projectG_threeTitle">
              {props.projectsData[2].name}
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
              {props.projectsData[2].description}
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
        <div className="projects__stackTech">
          <h2>Tecnologías:</h2>
        </div>
        <div className="projects__stackLang">
          <h2>Lenguajes:</h2>
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
