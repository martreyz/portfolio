import "../stylesheets/header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav className="header__menu">
        <button className="header__menu-lang">En</button>
        <ul className="header__menu-pages">
          <li className="header__menu-home">
            <Link to="/" className="header__menu-home">
              Inicio
            </Link>
          </li>
          <li className="header__menu-projects">
            <Link to="/projects" className="header__menu-projects">
              Proyectos
            </Link>
          </li>
          <li className="header__menu-contact">
            <Link to="/contact" className="header__menu-contact">
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
