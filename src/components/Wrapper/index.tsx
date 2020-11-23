// eslint-disable-next-line
import React from "react";
import Swipe from "../Swipe";
import Logo from "../media/logo.png";
import "./style.scss";
import { useHistory } from "react-router-dom";

interface WrapperProps {
  onClick: any;
  cssClass: string;
  children: any;
}

export default function Wrapper({ onClick, cssClass, children }: WrapperProps) {
  let history = useHistory();
  let goHome = () => {
    history.push("/Events-Board/");
  };
  return (
    <main className="main">
      <Swipe
        touchEnd={() => {
          onClick(true);
        }}
      ></Swipe>
      <button
        type="button"
        className="sbbtn"
        onClick={() => onClick(true)}
      ></button>
      <div className={"close " + cssClass} onClick={() => onClick(false)}>
        <header className="header" onClick={() => goHome()}>
          <h2 className="title">Events Board</h2>
          <img src={Logo} alt="Events Board logo"></img>
        </header>
        {children}
      </div>
    </main>
  );
}
