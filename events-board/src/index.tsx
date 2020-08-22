import React from "react";
import ReactDOM from "react-dom";
import "./components/DefCss/reset.css";
import "./components/DefCss/sidebar.scss";
import Home from "./components/Home/index";

ReactDOM.render(
  <React.StrictMode>
    <Home></Home>
  </React.StrictMode>,
  document.getElementById("root")
);
