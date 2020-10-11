import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import Logo from "../media/logo.png";

export default function Register() {
  return (
    <div className="register">
      <form className="regform">
        <h1>Eventó Board</h1>
        <div>
          <label htmlFor="email">E-mail:</label>
          <input aria-required="true" type="email" name="email"></input>
        </div>
        <div>
          <label htmlFor="username">Username:</label>
          <input aria-required="true" type="text" name="username"></input>
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input aria-required="true" type="password" name="password"></input>
        </div>
        <Link to="/">Sign Up</Link>
        <Link to="/login">Sign In</Link>
        <img src={Logo} alt="logo"></img>
      </form>
    </div>
  );
}
