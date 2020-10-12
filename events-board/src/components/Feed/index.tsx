import React from "react";
import "./style.scss";
import Swipe from "../Swipe/index";
import Firebase from "../../firebase";
import { stringify } from "querystring";

interface FeedProps {
  onClick: any;
}

export default function Feed({ onClick }: FeedProps) {
  let user = Firebase.auth.currentUser;
  return (
    <main>
      <Swipe
        touchEnd={() => {
          onClick(true);
        }}
      ></Swipe>
      <div className="home" onClick={() => onClick(false)}>
        <h1>This is home</h1>
        <p>{user?.email}</p>
      </div>
      <button className="sbbtn" onClick={() => onClick(true)}></button>
    </main>
  );
}
