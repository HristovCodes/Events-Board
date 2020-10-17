// eslint-disable-next-line
import React from "react";
import "./style.scss";

export default function Event() {
  return (
    <article className="container">
      <header className="title">
        <h2>Date: 15.15.2020</h2>
        <h1>Event name</h1>
      </header>
      <details className="desc">
        {/* 
        Tap on details make variable true
        if the variable is true return p
        if the variable is false return summary.
        When "closed" show summary and image below it
        When "opened" only show the p
        */}
        <summary>
          Lorem Ipsum is simply dummy text
          <img></img>
        </summary>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
      </details>
      <div className="buttons">
        <div className="going">
          <p>12</p>
          <a>Going</a>
        </div>
        <div className="interested">
          <p>4</p>
          <a>Interested</a>
        </div>
      </div>
    </article>
  );
}
