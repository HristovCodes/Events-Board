import React from "react";
import { Link } from "react-router-dom";
import "../Register/style.scss";
import Logo from "../media/logo.png";

interface LogInProps {
  authUser: any;
}

export default function LogIn({ authUser }: LogInProps) {
  let logInUser = function () {
    authUser(true);
  };
  return (
    <div className="login">
      <form className="logform">
        <h1>Eventó Board</h1>
        <div>
          <label htmlFor="email">E-mail:</label>
          <input aria-required="true" type="email" name="email"></input>
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input aria-required="true" type="password" name="password"></input>
        </div>
        <Link onClick={logInUser} to="/">
          Sign In
        </Link>
        <Link to="/register">Sign Up</Link>
        <img src={Logo} alt="logo"></img>
      </form>
    </div>
  );
}
