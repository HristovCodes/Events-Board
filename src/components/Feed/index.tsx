// eslint-disable-next-line
import React from "react";
import "./style.scss";
import Swipe from "../Swipe/index";
import Event from "../Event/index";

interface FeedProps {
  onClick: any;
  auth: any;
  userData: any;
}

export default function Feed({ onClick, auth, userData }: FeedProps) {
  return (
    <main>
      <Swipe
        touchEnd={() => {
          onClick(true);
        }}
      ></Swipe>
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
        <Event></Event>
        <Event></Event>
      </div>
      <a className="sbbtn" onClick={() => onClick(true)}></a>
    </main>
  );
}
