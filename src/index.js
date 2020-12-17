import React from "react";
import ReactDOM from "react-dom";
import "./stylesheets/index.css";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter } from "react-router-dom";

ReactDOM.render(
  <HashRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </HashRouter>,
  document.getElementById("root")
);

reportWebVitals();
