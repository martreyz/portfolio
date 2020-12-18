import "../stylesheets/projects.scss";

const Projects = () => {
  return (
    <main className="projects">
      <h1 className="projects__title">Proyectos</h1>
      <div className="projects__previewPrevious"></div>
      <section className="projects__decoration">
        <div className="projects__previewImage"></div>
        <h2 className="projects__previewTitle">Gestiona tus series</h2>
        <p className="projects__previewDescription">
          Aplicación web de gestión de series, utilizando JavaScript, HTML5,
          CSS3 y SASS. Además se utilizó Gulp para automatización de tareas y
          Git y GitHub para el control de versiones.
        </p>
      </section>

      <div className="projects__previewNext"></div>
    </main>
  );
};

export default Projects;
