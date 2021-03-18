import Background from "./Background";
import Header from "./Header";
import Landing from "./Landing";
import Footer from "./Footer";
import Projects from "./Projects";
import Contact from "./Contact";
import { Route } from "react-router-dom";
import ProjectsData from "../data/projects.json";
import ProjectsDataEN from "../data/projectsEn.json";
import Trajectory from "../data/trajectory.json";
import TrajectoryEN from "../data/trajectoryEN.json";

import { useState } from "react";

function App() {
  const [projectsData] = useState(ProjectsData);
  const [projectsDataEN] = useState(ProjectsDataEN);
  const [projectOnScreen, setProjectOnScreen] = useState(0);
  const [translated, setTranslated] = useState(false);
  const [accesible, setAccesible] = useState(false);
  const [trajectory] = useState(Trajectory);
  const [trajectoryEN] = useState(TrajectoryEN);
  const [counterTrajectory, setCounterTrajectory] = useState(0);

  const handleLangClick = () => {
    setTranslated(!translated);
  };

  const handleAccClick = () => {
    setAccesible(!accesible);
  };
  const handleTrajectoryClick = (id) => {
    setCounterTrajectory(id);
  };

  //Manages selected project data:
  const handleProjectClick = (target) => {
    setProjectOnScreen(target);

    //Resets all projects to non selected:
    for (let i = 0; i < projectsData.length; i++) {
      projectsDataEN[i].selected = false;
      projectsData[i].selected = false;
    }

    //Sets targeted project info to change styles:
    projectsDataEN[target].selected = true;
    projectsData[target].selected = true;
  };

  return (
    <>
      <Background accesible={accesible} />
      <Header
        translated={translated}
        handleLangClick={handleLangClick}
        handleAccClick={handleAccClick}
        accesible={accesible}
      />
      <Route exact path="/">
        <Landing translated={translated} accesible={accesible} />
      </Route>
      <Route exact path="/projects">
        <Projects
          accesible={accesible}
          translated={translated}
          projectsData={translated ? projectsDataEN : projectsData}
          handleProjectClick={handleProjectClick}
          projectInfo={
            translated
              ? projectsDataEN[projectOnScreen]
              : projectsData[projectOnScreen]
          }
        />
      </Route>
      <Route exact path="/contact">
        <Contact
          accesible={accesible}
          translated={translated}
          trajectory={translated ? trajectoryEN : trajectory}
          handleTrajectoryClick={handleTrajectoryClick}
          counterTrajectory={counterTrajectory}
          infoToShow={
            translated
              ? trajectoryEN[counterTrajectory]
              : trajectory[counterTrajectory]
          }
        />
      </Route>
      <Footer accesible={accesible} translated={translated} />
    </>
  );
}

export default App;
