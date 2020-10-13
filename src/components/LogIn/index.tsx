// eslint-disable-next-line
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../Register/style.scss";
import Logo from "../media/logo.png";
import Firebase from "../../firebase";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let history = useHistory();

  let logInUser = function () {
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
    <div className="login">
      <form className="logform">
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
        <Link onClick={logInUser} to="/">
          Sign In
        </Link>
        <Link to="/register">Sign Up</Link>
        <img src={Logo} alt="logo"></img>
      </form>
    </div>
  );
}
