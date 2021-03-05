import "../stylesheets/header.scss";
import { useState } from "react";

const Header = (props) => {
  const [translate, setTranslate] = useState(false);
  const [accesible, setAccesible] = useState(false);
  const handleLangClick = () => {
    setTranslate(!translate);
    props.handleLangClick();
  };

  const handleAccClick = () => {
    setAccesible(!accesible);
    props.handleAccClick();
  };

  return (
    <header className="header">
      <nav className="header__menu">
        <button
          title={translate ? "Cambiar a inglés" : "Back to spanish"}
          onClick={handleLangClick}
          className={
            accesible
              ? "header__menu-langACC header__menu-lang"
              : "header__menu-lang"
          }
        >
          {accesible
            ? translate
              ? "Back to Spanish"
              : "Traducir a inglés"
            : translate
            ? "Es"
            : "En"}
        </button>
        <button
          title={
            translate ? "Modo de alto contraste" : "Modo de bajo contraste"
          }
          onClick={handleAccClick}
          className={accesible ? "header__menu-accActive" : "header__menu-acc"}
        >
          {accesible ? "Modo de bajo contraste" : ""}
        </button>
      </nav>
    </header>
  );
};

export default Header;
