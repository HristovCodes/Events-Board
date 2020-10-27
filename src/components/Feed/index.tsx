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
      <a className="sbbtn" onClick={() => onClick(true)}></a>
      <div className="home" onClick={() => onClick(false)}>
        <h1>This is home</h1>
        <Event></Event>
        <Event></Event>
      </div>
    </main>
  );
}
