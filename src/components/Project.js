const Project = (props) => {
  return (
    <>
      <div className="projects__containerGITHUB-infoBanner">
        <ul className="projects__containerGITHUB-links">
          <li className="projects__containerGITHUB-linkOneLogo">
            <a
              className="projects__containerGITHUB-linkOne"
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
          <li className="projects__containerGITHUB-linkTwoLogo">
            <a
              className="projects__containerGITHUB-linkTwo"
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
      <p className="projects__containerGITHUB-description">
        {props.description}
      </p>
    </>
  );
};

export default Project;
