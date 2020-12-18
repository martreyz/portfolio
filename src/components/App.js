import Background from "./Background";
import Header from "./Header";
import Landing from "./Landing";
import BackgroundProjects from "./BackgroundProjects";
import Footer from "./Footer";
import Projects from "./Projects";
import Contact from "./Contact";
import { Route } from "react-router-dom";

function App() {
  return (
    <>
      <Route exact path="/">
        <Background />
        <Header />
        <Landing />
      </Route>
      <Route exact path="/projects">
        <BackgroundProjects />
        <Header />
        <Projects />
        <Footer />
      </Route>
      <Route exact path="/contact">
        <BackgroundProjects />
        <Header />
        <Contact />
        <Footer />
      </Route>
    </>
  );
}

export default App;
