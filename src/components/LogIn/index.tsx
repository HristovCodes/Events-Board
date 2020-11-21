// eslint-disable-next-line
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../Register/style.scss";
import Logo from "../media/logo.png";
import Firebase from "../../firebase";

interface LogInInterface {
  auth: any;
}

export default function LogIn({ auth }: LogInInterface) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let history = useHistory();

  let logInUser = (e: any) => {
    e.preventDefault();
    Firebase.auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        Firebase.auth.onAuthStateChanged(function (user) {
          if (user) {
            auth(true);
            history.replace("/Events-Board");
          }
        });
      })
      .catch(function (error) {
        // Handle Errors here.
        console.log(error.message);
        history.replace("/Events-Board/Login");
      });
  };

  return (
    <div className="login">
      <form onSubmit={logInUser} className="logform">
        <h1>Eventó Board</h1>
        <div>
          <label htmlFor="email">E-mail:</label>
          <input
            aria-required="true"
            type="email"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            onInvalid={(e) => {
              e.currentTarget.setCustomValidity("");
              if (e.currentTarget.validity.typeMismatch)
                e.currentTarget.setCustomValidity(
                  "The email address is invalid."
                );
            }}
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
            onInvalid={(e) => {
              e.currentTarget.setCustomValidity("");
              if (e.currentTarget.validity.typeMismatch)
                e.currentTarget.setCustomValidity(
                  "Password must be at least 8 characters long and contain one number and one or more capital letters."
                );
            }}
          ></input>
        </div>
        <button type="submit" className="btnmain">
          Sign In
        </button>
        <Link className="btnsec" to="/Events-Board/Register">
          Sign Up
        </Link>
        <img src={Logo} alt="logo"></img>
      </form>
    </div>
  );
}
