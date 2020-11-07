// eslint-disable-next-line
import React, { useState } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import Wrapper from "../Wrapper";

interface ProfileProps {
  userData: any;
  onClick: any;
}

export default function Profile({ userData, onClick }: ProfileProps) {
  // determines if the profile picture is shown or not
  const [open, setOpen] = useState(false);

  // inverts the state
  let openPicture = () => {
    setOpen(!open);
  };

  return (
    <Wrapper onClick={onClick} cssClass="profile">
      <div className="username">
        <h2>Display name:</h2>
        <p>{userData?.displayName}</p>
      </div>
      <div className="email">
        <div className="update">
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
      <div className="password">
        <div className="update">
          <h2>Password:</h2>
          <Link
            to={{
              pathname: "/Events-Board/ChangeProfileData",
              search: "v=Password",
            }}
          >
            Update Password
          </Link>
        </div>
        <p>*******</p>
      </div>
      <div className="picture">
        <div className="update">
          <h2>Profile picture:</h2>
          <Link
            to={{
              pathname: "/Events-Board/ChangeProfileData",
              search: "v=Photo",
            }}
          >
            Update Photo
          </Link>
        </div>
        <p onClick={openPicture}>{userData?.photoURL} (click to view)</p>
        {open ? (
          <img alt="No URL provided" src={userData?.photoURL}></img>
        ) : (
          ""
        )}
      </div>
    </Wrapper>
  );
}
