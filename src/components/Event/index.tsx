// eslint-disable-next-line
import React from "react";
import "./style.scss";

interface EventInterface {
  date: Date;
  name: string;
  description: string;
  ammountInterested: Number;
  ammountGoing: Number;
  url: string;
}

export default function Event({
  date,
  name,
  description,
  ammountGoing,
  ammountInterested,
  url,
}: EventInterface) {
  return (
    <div className="container">
      <header className="title">
        <h2>Date: {date}</h2>
        <h1>{name}</h1>
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
        <p>{description}</p>
      </details>
      <div className="buttons">
        <div className="going">
          <p>{ammountGoing}</p>
          <a>Going</a>
        </div>
        <div className="interested">
          <p>{ammountInterested}</p>
          <a>Interested</a>
        </div>
      </div>
    </div>
  );
}
