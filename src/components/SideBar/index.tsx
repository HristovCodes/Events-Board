// eslint-disable-next-line
import React from "react";
import "./style.scss";
import { Link, Route, Router, useHistory, useParams } from "react-router-dom";
import Firebase from "../../firebase";
import UserData from "../Profile";
import SubmitEvent from "../SubmitEvent";

interface SideBarProps {
  open: boolean;
  openSB: any;
  auth: any;
  profileName: any;
}

export default function SideBar({ open, openSB, auth, profileName}: SideBarProps) {
  let history = useHistory();

  let signOut = function () {
    Firebase.auth
      .signOut()
      .then(() => {
        auth(false);
        history.replace("/Events-Board/Login");
      })
      .catch(function (error) {
        // An error happened.
        alert(error.code);
        alert(error.message);
      });
  };

  return (
    <aside className={"sidebar " + open.toString()}>
      <ul>
        <li>
          <a
            onClick={() => {
              openSB(false);
              signOut();
            }}
          >
            Log off
          </a>
        </li>
        <li>
          <Link onClick={() => {
              openSB(false);
            }} to="/Events-Board/Profile">
            {profileName}
          </Link>
        </li>
        <li>
          <Link
            onClick={() => {
              openSB(false);
            }}
            to="/Events-Board/Submit"
          >
            Submit
          </Link>
        </li>
        <li>
          <Link
            onClick={() => {
              openSB(false);
            }}
            to="/Events-Board"
          >
            Home
          </Link>
        </li>
      </ul>
    </aside>
  );
}
