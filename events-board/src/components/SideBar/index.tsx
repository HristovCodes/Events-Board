import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

interface SideBarProps {
  open: boolean;
  loggedin: boolean;
  openSB: any;
}

export default function SideBar({ open, loggedin, openSB }: SideBarProps) {
  let def = (
    <ul>
      <li>
        <Link
          onClick={() => {
            openSB(false);
          }}
          to="/"
        >
          Home
        </Link>
      </li>
    </ul>
  );
  let anon = (
    <ul>
      <li>
        <Link
          onClick={() => {
            openSB(false);
          }}
          to="/login"
        >
          Sign In
        </Link>
      </li>
      <li>
        <Link
          onClick={() => {
            openSB(false);
          }}
          to="/register"
        >
          Sign Up
        </Link>
      </li>
    </ul>
  );
  return (
    <aside className={"sidebar " + open.toString()}>
      {loggedin ? def : anon}
    </aside>
  );
}
