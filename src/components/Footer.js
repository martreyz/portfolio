import "../stylesheets/footer.scss";

const Footer = (props) => {
  return (
    <footer className={props.accesible ? "footer footerACC" : "footer"}>
      <nav className="footer__menu">
        <ul className="footer__menuList">
          <li
            className={
              props.accesible
                ? "footer__menuList-github footer__menuList-githubACC"
                : "footer__menuList-github"
            }
          >
            <a
              target="_blank"
              rel="noreferrer"
              className="footer__menuList-access"
              href="https://github.com/martreyz"
              title="Access GitHub"
            >
              {" "}
            </a>
          </li>
          <li
            className={
              props.accesible
                ? "footer__menuList-linkedin footer__menuList-linkedinACC"
                : "footer__menuList-linkedin"
            }
          >
            <a
              target="_blank"
              rel="noreferrer"
              className="footer__menuList-access"
              href="https://www.linkedin.com/in/martareyrodriguez/"
              title="Access Linkedin"
            >
              {" "}
            </a>
          </li>
          <li
            className={
              props.accesible
                ? "footer__menuList-mail footer__menuList-mailACC"
                : "footer__menuList-mail"
            }
          >
            <a
              target="_blank"
              rel="noreferrer"
              className="footer__menuList-access"
              href="mailto: martreyz@gmail.com"
              title="Send email"
            >
              {" "}
            </a>
          </li>
          <li
            className={
              props.accesible
                ? "footer__menuList-twitter footer__menuList-twitterACC"
                : "footer__menuList-twitter"
            }
          >
            <a
              target="_blank"
              rel="noreferrer"
              className="footer__menuList-access"
              href="https://twitter.com/im_martreyz"
              title="Access Twitter"
            >
              {" "}
            </a>
          </li>
          <li
            className={
              props.accesible
                ? "footer__menuList-codepen footer__menuList-codepenACC"
                : "footer__menuList-codepen"
            }
          >
            <a
              target="_blank"
              rel="noreferrer"
              className="footer__menuList-access"
              href="https://codepen.io/martreyz"
              title="Access Codepen"
            >
              {" "}
            </a>
          </li>
        </ul>
      </nav>
      <small
        className={
          props.accesible ? "footer__small footer__smallACC" : "footer__small"
        }
      >
        <span
          className={
            props.accesible
              ? "footer__smallCopy footer_smallCopyACC"
              : "footer_smallCopy"
          }
        >
          {props.translated ? "2021 © made with" : "2021 © hecho con"}
        </span>
        <div
          className={
            props.accesible
              ? "footer__smallLogo footer__smallLogoACC"
              : "footer__smallLogo"
          }
        ></div>
        <span
          className={
            props.accesible
              ? "footer__smallAuthor footer__smallAuthorACC"
              : "footer__smallAuthor"
          }
        >
          {props.translated ? "by martreyz" : "por martreyz"}
        </span>
      </small>
    </footer>
  );
};

export default Footer;
