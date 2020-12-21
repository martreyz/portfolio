import Background from "./Background";
import Header from "./Header";
import Landing from "./Landing";
import Footer from "./Footer";
import Projects from "./Projects";
import Contact from "./Contact";
import { Route } from "react-router-dom";
import ProjectsData from "../data/projects.json";
import ProjectsDataEN from "../data/projectsEn.json";
import { useState } from "react";

function App() {
  const [projectsData] = useState(ProjectsData);
  const [projectsDataEN] = useState(ProjectsDataEN);
  const [counter, setCounter] = useState(0);
  const [translated, setTranslated] = useState(false);

  const handleButtonClick = (clicked) => {
    if (clicked === "next") {
      if (counter !== 4) {
        setCounter(counter + 1);
      } else {
        setCounter(0);
      }
    } else if (clicked === "previous") {
      if (counter !== 0) {
        setCounter(counter - 1);
      } else {
        setCounter(4);
      }
    }
  };

  const handleLangClick = () => {
    setTranslated(!translated);
  };

  return (
    <>
      <Background />
      <Header translated={translated} handleLangClick={handleLangClick} />
      <Route exact path="/">
        <Landing translated={translated} />
      </Route>
      <Route exact path="/projects">
        <Projects
          projectsDataEN={projectsDataEN}
          translated={translated}
          projectsData={projectsData}
          counter={counter}
          handleButtonClick={handleButtonClick}
        />
      </Route>
      <Route exact path="/contact">
        <Contact translated={translated} />
      </Route>
      <Footer translated={translated} />
    </>
  );
}

export default App;
