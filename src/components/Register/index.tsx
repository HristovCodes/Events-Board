// eslint-disable-next-line
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./style.scss";
import Logo from "../media/logo.png";
import Firebase from "../../firebase";

interface RegisterInterface {
  auth: any;
}

export default function Register({ auth }: RegisterInterface) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  let history = useHistory();

  let registerUser = function () {
    Firebase.auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        Firebase.auth.onAuthStateChanged(function (user) {
          if (user) {
            user.updateProfile({ displayName: name }).catch(function (error) {
              console.log(error.code);
              console.log(error.message);
            });
            user
              .sendEmailVerification()
              .then(function () {
                auth(true);
                history.replace("/Events-Board");
              })
              .catch(function (error) {
                console.log(error.code);
                console.log(error.message);
              });
          }
        });
      })
      .catch(function (error) {
        // Handle Errors here.
        alert(error.code);
        alert(error.message);
        history.replace("/Events-Board/Register");
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
            onChange={(e) => setName(e.target.value)}
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
        <button type="button" className="btnmain" onClick={registerUser}>
          Sign Up
        </button>
        <Link className="btnsec" to="/Events-Board/Login">
          Sign In
        </Link>
        <img src={Logo} alt="logo"></img>
      </form>
    </div>
  );
}
