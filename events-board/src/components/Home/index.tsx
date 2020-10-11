import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import LogIn from "../LogIn/index";
import Feed from "../Feed/index";
import Register from "../Register/index";
import SideBar from "../SideBar/index";
import "./style.scss";

export default function Home() {
  const [open, openSB] = useState(false);
  const [userIsAuthenticated, authenticate] = useState(false);
  return (
    <Router>
      {/* This is the sidebar */}
      <div className="wrapper">
        <SideBar openSB={openSB} open={open}></SideBar>
        <Switch>
          <Route exact path="/">
            {userIsAuthenticated ? (
              <Feed onClick={openSB} />
            ) : (
              <Redirect to="/login"></Redirect>
            )}
          </Route>
          <Route path="/login">
            <LogIn authUser={authenticate} />
          </Route>
          <Route path="/register">
            <Register authUser={authenticate} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
