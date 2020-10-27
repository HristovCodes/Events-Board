// eslint-disable-next-line
import React, { useState } from "react";
import "./style.scss";
import Firebase from "../../firebase";
import { Link, Router, useHistory } from "react-router-dom";

interface ProfileProps {
  userData: any;
}

export default function SubmitEvent({
  userData
}: ProfileProps) {
  let history = useHistory();

  return (
      <main className="main">
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
