import "../stylesheets/header.scss";
import { useState } from "react";

const Header = (props) => {
  //Declare state to save translation and high contrast mode information in this component:
  const [translate, setTranslate] = useState(false);
  const [accesible, setAccesible] = useState(false);

  //Handler to send translation information to App (mother) component:
  const handleLangClick = () => {
    setTranslate(!translate);
    props.handleLangClick();
  };

  //Handler to send high contrast mode information to App (mother) component:
  const handleAccClick = () => {
    setAccesible(!accesible);
    props.handleAccClick();
  };

  return (
    <header className={accesible ? "headerACC header" : "header"}>
      <nav className="header__menu">
        <button
          title={translate ? "Back to spanish" : "Cambiar a inglés"}
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
            accesible
              ? translate
                ? "Low contrast"
                : "Bajo contraste"
              : translate
              ? "High contrast"
              : "Alto contraste"
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
