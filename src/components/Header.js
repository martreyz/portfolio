import "../stylesheets/header.scss";
import { useState } from "react";

const Header = (props) => {
  const [translate, setTranslate] = useState(false);
  const handleLangClick = () => {
    setTranslate(!translate);
    props.handleLangClick();
  };

  return (
    <header className="header">
      <nav className="header__menu">
        <button onClick={handleLangClick} className="header__menu-lang">
          {translate ? "Es" : "En"}
        </button>
      </nav>
    </header>
  );
};

export default Header;
