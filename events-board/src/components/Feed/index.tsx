import React from "react";
import "./style.scss";

interface FeedProps {
  onClick: any;
}

export default function Feed({ onClick }: FeedProps) {
  return (
    <main>
      <div className="home" onClick={() => onClick(false)}>
        <h1>This is home</h1>
      </div>
      <button className="sbbtn" onClick={() => onClick(true)}></button>
    </main>
  );
}
