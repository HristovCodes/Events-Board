// eslint-disable-next-line
import React, { useEffect, useState } from "react";
import "./style.scss";
import Swipe from "../Swipe/index";
import Event from "../Event/index";
import Firebase from "../../firebase";

interface FeedProps {
  onClick: any;
  auth: any;
  userData: any;
}

export default function Feed({ onClick, auth, userData }: FeedProps) {
  const [events, setEvents] = useState();

  useEffect(() => {
    // pulls events from database
    if (events === undefined)
      Firebase.database
        .ref("events/")
        .once("value")
        .then(function (snapshot) {
          setEvents(snapshot.val());
        });
  });

  return (
    <main>
      <Swipe
        touchEnd={() => {
          onClick(true);
        }}
      ></Swipe>
      <a className="sbbtn" onClick={() => onClick(true)}></a>
      <div className="home" onClick={() => onClick(false)}>
        <h1>This is home</h1>
        <div>
          <p>Display name: {userData?.displayName}</p>
          <br></br>
          <p>Email: {userData?.email}</p>
          <br></br>
          <p>PhotoUrl: {userData?.photoURL}</p>
          <br></br>
          <p>
            Email verified (true/false): {userData?.emailVerified.toString()}
          </p>
          <br></br>
        </div>
      </div>
    </main>
  );
}
