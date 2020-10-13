// eslint-disable-next-line
import React from "react";
import "./style.scss";

interface SwipeProps {
  touchEnd: any;
}

export default function Swipe({ touchEnd }: SwipeProps) {
  return (
    <div
      draggable={true}
      onDragEnd={touchEnd}
      onTouchEnd={touchEnd}
      className="swipearea"
    ></div>
  );
}
