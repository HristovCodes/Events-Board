import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

interface SideBarProps {
  open: boolean;
  openSB: any;
}

export default function SideBar({ open, openSB }: SideBarProps) {
  return (
    <aside className={"sidebar " + open.toString()}>
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
    </aside>
  );
}
