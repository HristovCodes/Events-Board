// eslint-disable-next-line
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./style.scss";
import Logo from "../media/logo.png";
import Firebase from "../../firebase";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let history = useHistory();

  let registerUser = function () {
    Firebase.auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        Firebase.auth.onAuthStateChanged(function (user) {
          if (user) {
            history.replace("/");
          }
        });
      })
      .catch(function (error) {
        // Handle Errors here.
        alert(error.code);
        alert(error.message);
      });
  };

  return (
    <div className="register">
      <form className="regform">
        <h1>Eventó Board</h1>
        <div>
          <label htmlFor="email">E-mail:</label>
          <input
            aria-required="true"
            type="email"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            aria-required="true"
            pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$"
            type="text"
            name="username"
            id="username"
          ></input>
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            aria-required="true"
            pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
            type="password"
            name="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <Link to="/" onClick={registerUser}>
          Sign Up
        </Link>
        <Link to="/login">Sign In</Link>
        <img src={Logo} alt="logo"></img>
      </form>
    </div>
  );
}
