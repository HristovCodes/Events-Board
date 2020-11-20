// eslint-disable-next-line
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LogIn from "../LogIn";
import Feed from "../Feed";
import Register from "../Register";
import SideBar from "../SideBar";
import Firebase from "../../firebase";
import "./style.scss";
import SubmitEvent from "../SubmitEvent";
import Profile from "../Profile";
import ChangeProfileData from "../ChangeProfileData";
import Error404 from "../Error404";
import About from "../About";
import PrivacyPolicy from "../PrivacyPolicy";
import Faq from "../Faq";
import Contact from "../Contact";

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
              <Feed onClick={openSB} />
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
            <Route exact path="/Events-Board/About">
              <About onClick={openSB} />
            </Route>
            <Route exact path="/Events-Board/PrivacyPolicy">
              <PrivacyPolicy onClick={openSB} />
            </Route>
            <Route exact path="/Events-Board/Faq">
              <Faq onClick={openSB} />
            </Route>
            <Route exact path="/Events-Board/Contacts">
              <Contact userData={userData} onClick={openSB} />
            </Route>
            <Route path="/Events-Board/*">
              <Error404 onClick={openSB}></Error404>
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
            <Route path="/Events-Board/*">
              <Error404 onClick={openSB}></Error404>
            </Route>
          </Switch>
        )}
      </div>
    </Router>
  );
}
