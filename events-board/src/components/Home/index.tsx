import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LogIn from "../LogIn/index";
import Feed from "../Feed/index";
import Register from "../Register/index";

export default function Home() {
  const [open, openSB] = useState(false);
  return (
    <Router>
      {/* This is the sidebar */}
      <div className="">
        <aside className={"sidebar " + open.toString()}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Sign In</Link>
            </li>
            <li>
              <Link to="/register">Sign Up</Link>
            </li>
          </ul>
        </aside>
        <Switch>
          <Route exact path="/">
            <Feed onClick={openSB} sbState={open} />
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
