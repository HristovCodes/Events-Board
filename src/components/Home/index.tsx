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
import Profile from "../Profile";
import ChangeProfileData from "../ChangeProfileData";

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
        <SideBar
          auth={auth}
          openSB={openSB}
          open={open}
          userProfileName={userData?.displayName}
          userProfilePic={userData?.photoURL}
        ></SideBar>
        {isAuth ? (
          <Switch>
            <Route exact path="/Events-Board">
              <Feed userData={userData} auth={auth} onClick={openSB} />
            </Route>
            <Route exact path="/Events-Board/Submit">
              <SubmitEvent onClick={openSB} />
            </Route>
            <Route exact path="/Events-Board/Profile">
              <Profile userData={userData} onClick={openSB} />
            </Route>
            <Route exact path="/Events-Board/ChangeProfileData">
              <ChangeProfileData auth={auth} onClick={openSB} />
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
