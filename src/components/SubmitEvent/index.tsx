// eslint-disable-next-line
import React from "react";
import "./style.scss";
import Event from "../Event/index";
import Swipe from "../Swipe";

interface SubmitEventProps {
  onClick: any;
  auth: any;
  userData: any;
}

export default function SubmitEvent({
  onClick,
  auth,
  userData,
}: SubmitEventProps) {
  return (
    <div>
      <Swipe
        touchEnd={() => {
          onClick(true);
        }}
      ></Swipe>
      <a className="sbbtn" onClick={() => onClick(true)}></a>
    </div>
  );
}
