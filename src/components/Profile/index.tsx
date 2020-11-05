// eslint-disable-next-line
import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import Swipe from "../Swipe";

interface ProfileProps {
  userData: any;
  onClick: any;
}

export default function Profile({ userData, onClick }: ProfileProps) {
  return (
    <main className="main">
      <Swipe
        touchEnd={() => {
          onClick(true);
        }}
      ></Swipe>
      <a className="sbbtn" onClick={() => onClick(true)}></a>
      <div className="profile" onClick={() => onClick(false)}>
        <div>
          <h2>Display name:</h2>
          <p>{userData?.displayName}</p>
        </div>
        <div>
          <div>
            <h2> Email: </h2>
            <Link
              to={{
                pathname: "/Events-Board/ChangeProfileData",
                search: "v=Email",
              }}
            >
              Update Email
            </Link>
          </div>
          <p>
            {userData?.email} (
            {userData?.emailVerified ? (
              <span>verified</span>
            ) : (
              <span>not verified</span>
            )}
            )
          </p>
        </div>
        <img alt="No Photo URL provided" src={userData?.photoURL}></img>
        <Link
          to={{
            pathname: "/Events-Board/ChangeProfileData",
            search: "v=Photo",
          }}
        >
          Update Photo
        </Link>
        <Link
          to={{
            pathname: "/Events-Board/ChangeProfileData",
            search: "v=Password",
          }}
        >
          Update Password
        </Link>
      </div>
    </main>
  );
}
