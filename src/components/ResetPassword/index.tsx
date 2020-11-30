// eslint-disable-next-line
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../Register/style.scss";
import Logo from "../media/logo.png";
import Firebase from "../../firebase";

interface ResetPasswordInterface {
  auth: any;
}

export default function ResetPassword({ auth }: ResetPasswordInterface) {
  const [email, setEmail] = useState("");

  let history = useHistory();

  let resetPass = (emailAddress: string) => {
    if (emailAddress)
      Firebase.auth.sendPasswordResetEmail(emailAddress).then(function () {
        history.replace("/Events-Board/Login");
      });
  };

  return (
    <div className="login">
      <form className="logform">
        <h1>Eventó Board</h1>
        <h2>Enter your email and we'll send you a new password.</h2>
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
        <button
          onClick={() => resetPass(email)}
          type="submit"
          className="btnmain"
        >
          Send new
        </button>
        <button
          onClick={() => {
            history.replace("/Events-Board/Login");
          }}
          type="button"
          className="btnsec"
        >
          Sign In
        </button>
        <img src={Logo} alt="logo"></img>
      </form>
    </div>
  );
}
