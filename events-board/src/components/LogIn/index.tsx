import React from "react";
import { Link } from "react-router-dom";

export default function LogIn() {
  return (
    <div className="login">
      <h1>This is login</h1>
      <Link to="/register">Sign In</Link>
      <Link to="/login">Sign Up</Link>
      <Link to="/">Continue as guest</Link>
    </div>
  );
}
