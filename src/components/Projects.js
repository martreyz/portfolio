import "../stylesheets/projects.scss";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <main className="projects">
      <section className="projects__container">
        <h1 className="projects__title">Proyectos</h1>
        <div className="projects__decoration">
          <div className="projects__previewPrevious"></div>
          <div className="projects__previewNext"></div>
          <div className="projects__previewImage" title="Page preview"></div>
          <nav className="projects__previewMenu">
            <ul className="projects__previewMenuList">
              <li className="projects__previewMenuItem">
                <a
                  className="projects__previewMenuLink projects__previewMenuLinkPage"
                  href="/"
                  title="Visit the project's page"
                  target="_blank"
                >
                  Página
                </a>
              </li>
              <li className="projects__previewMenuItem">
                <a
                  className="projects__previewMenuLink projects__previewMenuLinkRepo"
                  href="/"
                  title="Visit the project's repository"
                  target="_blank"
                >
                  {" "}
                  Repositorio
                </a>
              </li>
            </ul>
          </nav>
          <h2 className="projects__previewTitle">Gestiona tus series</h2>
          <p className="projects__previewDescription">
            Aplicación web de gestión de series, utilizando JavaScript, HTML5,
            CSS3 y SASS. Además se utilizó Gulp para automatización de tareas y
            Git y GitHub para el control de versiones.
          </p>
        </div>
      </section>
      <nav className="projects__menu-home">
        <Link to="/" className="projectsLink__menu-home">
          Inicio
        </Link>
      </nav>
    </main>
  );
};

export default Projects;
