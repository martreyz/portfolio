const Project = (props) => {
  return (
    <>
      <div className="projects__containerGITHUB-infoBanner">
        <ul className="projects__containerGITHUB-links">
          <li
            className={
              props.accesible
                ? "projects__containerGITHUB-linkOneLogo  projects__containerGITHUB-linkOneLogoACC "
                : "projects__containerGITHUB-linkOneLogo "
            }
          >
            <a
              className={
                props.accesible
                  ? "projects__containerGITHUB-linkOne  projects__containerGITHUB-linkOneACC "
                  : "projects__containerGITHUB-linkOne "
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
          </li>
          <li
            className={
              props.accesible
                ? "projects__containerGITHUB-linkTwoLogo  projects__containerGITHUB-linkTwoLogoACC "
                : "projects__containerGITHUB-linkTwoLogo "
            }
          >
            <a
              className={
                props.accesible
                  ? "projects__containerGITHUB-linkTwo  projects__containerGITHUB-linkTwoACC "
                  : "projects__containerGITHUB-linkTwo "
              }
              href={props.repository}
              target="_blank"
              title={
                props.translated
                  ? "Go to projects repository"
                  : "Ir al repositorio del proyecto"
              }
              rel="noreferrer"
            >
              Repository
            </a>
          </li>
        </ul>
        <p className="projects__containerGITHUB-technologies">
          {props.technologies}
        </p>
      </div>
      <div className="projects__containerGITHUB-imgContainer">
        <img
          title="project preview"
          alt="project preview"
          className="projects__containerGITHUB-img"
          src={props.preview}
        />
      </div>
      <p
        className={
          props.accesible
            ? "projects__containerGITHUB-description  projects__containerGITHUB-descriptionACC "
            : "projects__containerGITHUB-description "
        }
      >
        {props.description}
      </p>
    </>
  );
};

export default Project;
