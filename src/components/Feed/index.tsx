// eslint-disable-next-line
import React, { useEffect, useState } from "react";
import "./style.scss";
import Swipe from "../Swipe/index";
import Firebase from "../../firebase";
import { Redirect, useHistory } from "react-router-dom";

interface FeedProps {
  onClick: any;
}

export default function Feed({ onClick }: FeedProps) {
  const [isAuth, auth] = useState(true);
  let history = useHistory();

  let signOut = function () {
    Firebase.auth
      .signOut()
      .then(() => {
        history.replace("/login");
      })
      .catch(function (error) {
        // An error happened.
        alert(error.code);
        alert(error.message);
      });
  };

  useEffect(() => {
    Firebase.auth.onAuthStateChanged(function (user) {
      if (user) {
        auth(true);
      } else {
        auth(false);
      }
    });
  });

  return isAuth ? (
    <main>
      <Swipe
        touchEnd={() => {
          onClick(true);
        }}
      ></Swipe>
      <div className="home" onClick={() => onClick(false)}>
        <h1>This is home</h1>
        <button onClick={signOut}>sign out</button>
      </div>
      <button className="sbbtn" onClick={() => onClick(true)}></button>
    </main>
  ) : (
    <Redirect to="/login"></Redirect>
  );
}
