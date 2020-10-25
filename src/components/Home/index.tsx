// eslint-disable-next-line
import React, { useEffect, useState } from "react";
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
import Firebase from "../../firebase";
import "./style.scss";
import SubmitEvent from "../SubmitEvent";

export default function Home() {
  const [open, openSB] = useState(false);
  const [isAuth, auth] = useState(true);
  const [userData, setUserData] = useState(Firebase.userData);

  useEffect(() => {
    Firebase.auth.onAuthStateChanged(function (user) {
      if (user !== null) {
        auth(true);
        setUserData(user);
      } else {
        auth(false);
      }
    });
  });

  return (
    <Router>
      <div className="wrapper">
        <SideBar auth={auth} openSB={openSB} open={open} userData={userData}></SideBar>
        {isAuth ? (
          <Switch>
            <Route exact path="/Events-Board">
              <Feed userData={userData} auth={auth} onClick={openSB} />
            </Route>
            <Route exact path="/Events-Board/Submit">
              <SubmitEvent userData={userData} auth={auth} onClick={openSB} />
            </Route>
          </Switch>
        ) : (
          <Switch>
            <Route path="/Events-Board/Login">
              <LogIn auth={auth} />
            </Route>
            <Route path="/Events-Board/Register">
              <Register auth={auth} />
            </Route>
          </Switch>
        )}
      </div>
    </Router>
  );
}
