import "../stylesheets/footer.scss";

const Footer = (props) => {
  return (
    <footer className="footer">
      <nav className="footer__menu">
        <ul className="footer__menuList">
          <li className="footer__menuList-github">
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
          <li className="footer__menuList-linkedin">
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
          <li className="footer__menuList-mail">
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
          <li className="footer__menuList-twitter">
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
          <li className="footer__menuList-codepen">
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
      <small className="footer__small">
        <span className="footer__smallCopy">
          {props.translated ? "2020 © made with" : "2020 © hecho con"}
        </span>
        <div className="footer__smallLogo"></div>
        <span className="footer__smallAuthor">
          {props.translated ? "by martreyz" : "por martreyz"}
        </span>
      </small>
    </footer>
  );
};

export default Footer;
