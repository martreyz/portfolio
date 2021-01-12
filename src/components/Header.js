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
          onClick={handleLangClick}
          className={
            accesible
              ? "header__menu-langACC header__menu-lang"
              : "header__menu-lang"
          }
        >
          {translate ? "Es" : "En"}
        </button>
        <button
          title={translate ? "Accessible mode" : "Modo accesible"}
          onClick={handleAccClick}
          className={accesible ? "header__menu-accActive" : "header__menu-acc"}
        ></button>
      </nav>
    </header>
  );
};

export default Header;
