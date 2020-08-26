import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LogIn from "../LogIn/index";
import Feed from "../Feed/index";
import Register from "../Register/index";
import Swipe from "../Swipe/index";
import "./style.scss";

export default function Home() {
  const [open, openSB] = useState(false);
  return (
    <Router>
      {/* This is the sidebar */}
      <div className="">
        <Swipe
          touchEnd={() => {
            openSB(true);
          }}
        ></Swipe>
        <aside className={"sidebar " + open.toString()}>
          <ul>
            <li>
              <Link
                onClick={() => {
                  openSB(!open);
                }}
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={() => {
                  openSB(!open);
                }}
                to="/login"
              >
                Sign In
              </Link>
            </li>
            <li>
              <Link
                onClick={() => {
                  openSB(!open);
                }}
                to="/register"
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </aside>
        <main
          onClick={() => {
            openSB(false);
          }}
          className="main"
        >
          <Switch>
            <Route exact path="/">
              <Feed
                onClick={() => {
                  openSB(!open);
                }}
              />
            </Route>
            <Route path="/login">
              <LogIn />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}
