import React from "react";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="signin">
      <h1>This is register</h1>
      <Link to="/register">Sign Up</Link>
      <Link to="/login">Sign In</Link>
      <Link to="/">Continue as guest</Link>
    </div>
  );
}
