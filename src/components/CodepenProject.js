const CodepenProject = (props) => {
  return (
    <>
      <div className="projects__containerCODEPEN-infoBanner">
        <nav
          className={
            props.accesible
              ? "projects__containerCODEPEN-linkOneLogo  projects__containerCODEPEN-linkOneLogoACC "
              : "projects__containerCODEPEN-linkOneLogo "
          }
        >
          <a
            className={
              props.accesible
                ? "projects__containerCODEPEN-linkOne  projects__containerCODEPEN-linkOneACC "
                : "projects__containerCODEPEN-linkOne "
            }
            href={props.webpage}
            target="_blank"
            title={
              props.translated
                ? "Go to projects demo"
                : "Ir a demo del proyecto"
            }
            rel="noreferrer"
          >
            Demo
          </a>
        </nav>

        <p className="projects__containerCODEPEN-technologies">
          {props.technologies}
        </p>
      </div>
      <div className="projects__containerCODEPEN-imgContainer">
        <img
          title="project preview"
          alt="project preview"
          className="projects__containerCODEPEN-img"
          src={props.preview}
        />
      </div>
      <p
        className={
          props.accesible
            ? "projects__containerCODEPEN-description  projects__containerCODEPEN-descriptionACC "
            : "projects__containerCODEPEN-description "
        }
      >
        {props.description}
      </p>
    </>
  );
};

export default CodepenProject;
