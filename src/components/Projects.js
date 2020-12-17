import "../stylesheets/projects.scss";
import CSS from "../images/css3-alt-brands.svg";
import HTML from "../images/html5-brands.svg";
import BOOTSTRAP from "../images/bootstrap-brands.svg";
import JS from "../images/js-square-brands.svg";
import GITHUB from "../images/github-brands.svg";
import REACT from "../images/react-brands.svg";

const Projects = () => {
  return (
    <main className="projects">
      <h1 className="projects__title">Proyectos</h1>
      <section className="projects__decoration">
        <h2 className="projects__previewTitle">Gestiona tus series</h2>
        <p className="projects__previewDescription">
          Aplicación web de gestión de series, utilizando JavaScript, HTML5,
          CSS3 y SASS. Además se utilizó Gulp para automatización de tareas y
          Git y GitHub para el control de versiones.
        </p>
        <div className="projects__previewPrevious"></div>
        <div className="projects__previewNext"></div>
      </section>
      <section className="projects__logos">
        <img
          className="projects__logos-css"
          src={CSS}
          title="Hard Skills: CSS3"
          alt="Hard Skills: CSS3 Logo"
        />
        <img
          className="projects__logos-html"
          src={HTML}
          title="Hard Skills: HTML5"
          alt="Hard Skills: HTML5 Logo"
        />
        <img
          className="projects__logos-js"
          src={JS}
          title="Hard Skills: JavaScript"
          alt="Hard Skills: JavaScript Logo"
        />
        <img
          className="projects__logos-react"
          src={REACT}
          title="Hard Skills: React"
          alt="Hard Skills: React Logo"
        />
        <img
          className="projects__logos-bootstrap"
          src={BOOTSTRAP}
          title="Hard Skills: Bootstrap"
          alt="Hard Skills: Bootstrap Logo"
        />
        <img
          className="projects__logos-github"
          src={GITHUB}
          title="Hard Skills: GitHub"
          alt="Hard Skills: GitHub Logo"
        />
      </section>
    </main>
  );
};

export default Projects;
