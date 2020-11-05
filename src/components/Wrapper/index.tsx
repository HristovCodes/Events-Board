// eslint-disable-next-line
import React from "react";
import Swipe from "../Swipe";
import "./style.scss";

interface WrapperProps {
  onClick: any;
  cssClass: string;
  children: any;
}

export default function Wrapper({ onClick, cssClass, children }: WrapperProps) {
  return (
    <main className="main">
      <Swipe
        touchEnd={() => {
          onClick(true);
        }}
      ></Swipe>
      <a className="sbbtn" onClick={() => onClick(true)}></a>
      <div className={cssClass} onClick={() => onClick(false)}>
        {children}
      </div>
    </main>
  );
}
