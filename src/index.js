import React from "react";
import ReactDOM from "react-dom";
import "./themes/style.scss";
import "spectre.css";
import "../node_modules/spectre.css/dist/spectre-icons.css";
import App from "./routes";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
