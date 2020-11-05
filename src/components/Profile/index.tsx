// eslint-disable-next-line
import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import Swipe from "../Swipe";

interface ProfileProps {
  userData: any;
  onClick: any;
}

export default function Profile({
  userData,
  onClick
}: ProfileProps) {

  return (
      <main className="main">
          <Swipe
            touchEnd={() => {
              onClick(true);
            }}
          ></Swipe>
          <a className="sbbtn" onClick={() => onClick(true)}></a>
          <div>
          <p>Display name: {userData?.displayName}</p>
          <br></br>
          <p>Email: {userData?.email}</p>
          <Link to={{pathname:"/Events-Board/ChangeProfileData", search:"v=Email"}}>Update Email</Link>
          <br></br>
          <br></br>
          <img alt="No Photo URL provided" src={userData?.photoURL}></img>
          <br></br>
          <Link to={{pathname:"/Events-Board/ChangeProfileData", search:"v=Photo"}}>Update Photo</Link>
          <br></br>
          <br></br>
            {userData?.emailVerified ? <p>Your Email is verified!</p> : <p>Your Email has NOT been verified. <br></br>Please verify it.</p>}
          <br></br>
          <Link to={{pathname:"/Events-Board/ChangeProfileData", search:"v=Password"}}>Update Password</Link>
        </div>
      </main>
  );
}
