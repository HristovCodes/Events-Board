import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LogIn from "../LogIn/index";
import Feed from "../Feed/index";
import Register from "../Register/index";
import SideBar from "../SideBar/index";
import "./style.scss";

export default function Home() {
  const [open, openSB] = useState(false);
  return (
    <Router>
      {/* This is the sidebar */}
      <div className="wrapper">
        <SideBar openSB={openSB} open={open}></SideBar>
        <Switch>
          <Route exact path="/">
            <Feed onClick={openSB} />
          </Route>
          <Route path="/login">
            <LogIn />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
