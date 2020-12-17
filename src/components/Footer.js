import "../stylesheets/footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <nav className="footer__menu">
        <ul className="footer__menuList">
          <li className="footer__menuList-github"></li>
          <li className="footer__menuList-linkedin"></li>
          <li className="footer__menuList-mail"></li>
          <li className="footer__menuList-twitter"></li>
        </ul>
      </nav>
      <small className="footer__small">
        <span className="footer__smallCopy">2020 © hecho con</span>
        <div className="footer__smallLogo"></div>
        <span className="footer__smallAuthor">por martreyz</span>
      </small>
    </footer>
  );
};

export default Footer;
