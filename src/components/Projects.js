import "../stylesheets/projects.scss";
import { Link } from "react-router-dom";

const Projects = (props) => {
  const handleButtonClick = (ev) => {
    const clicked = ev.target.id;
    console.log(clicked);
    props.handleButtonClick(clicked);
  };

  return (
    <main className="projects">
      <section className="projects__container">
        <h1 className="projects__title">
          {props.translated ? "Projects" : "Proyectos"}
        </h1>
        <div className="projects__decoration">
          <button
            onClick={handleButtonClick}
            id="previous"
            className="projects__previewPrevious"
          ></button>
          <button
            onClick={handleButtonClick}
            id="next"
            className="projects__previewNext"
          ></button>
          <div
            title={
              props.translated
                ? props.projectsDataEN[props.counter].name
                : props.projectsData[props.counter].name
            }
            className="projects__previewImage"
            style={{
              backgroundImage: `url( ${
                props.translated
                  ? props.projectsDataEN[props.counter].preview
                  : props.projectsData[props.counter].preview
              })`,
            }}
          ></div>
          <nav className="projects__previewMenu">
            <ul className="projects__previewMenuList">
              <li className="projects__previewMenuItem">
                <a
                  className="projects__previewMenuLink projects__previewMenuLinkPage"
                  href={
                    props.translated
                      ? props.projectsDataEN[props.counter].webpage
                      : props.projectsData[props.counter].webpage
                  }
                  title="Visit the project's page"
                  target="_blank"
                  rel="noreferrer"
                >
                  Página
                </a>
              </li>
              <li className="projects__previewMenuItem">
                <a
                  className="projects__previewMenuLink projects__previewMenuLinkRepo"
                  href={
                    props.translated
                      ? props.projectsDataEN[props.counter].repository
                      : props.projectsData[props.counter].repository
                  }
                  title="Visit the project's repository"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  Repositorio
                </a>
              </li>
            </ul>
          </nav>
          <h2 className="projects__previewTitle">
            {props.translated
              ? props.projectsDataEN[props.counter].name
              : props.projectsData[props.counter].name}
          </h2>
          <p className="projects__previewDescription">
            {props.translated
              ? props.projectsDataEN[props.counter].description
              : props.projectsData[props.counter].description}
          </p>
        </div>
      </section>
      <nav className="projects__menu-home">
        <Link to="/" className="projectsLink__menu-home">
          {props.translated ? "Home" : "Inicio"}
        </Link>
      </nav>
    </main>
  );
};

export default Projects;
