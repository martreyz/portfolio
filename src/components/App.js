import Background from "./Background";
import Header from "./Header";
import Landing from "./Landing";
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
        <Footer />
      </Route>
      <Route exact path="/projects">
        <Background />
        <Header />
        <Projects />
        <Footer />
      </Route>
      <Route exact path="/contact">
        <Background />
        <Header />
        <Contact />
        <Footer />
      </Route>
    </>
  );
}

export default App;
