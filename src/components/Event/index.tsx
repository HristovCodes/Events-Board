// eslint-disable-next-line
import React, { useState } from "react";
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
  const [desc, setDesc] = useState(false);

  return (
    <div className="container">
      <header className="title">
        <h2>Date: {date}</h2>
        <h1>{name}</h1>
      </header>
      <div className="flex">
        <details className="desc">
          {/* 
            Tap on details make variable true
            if the variable is true return p
            if the variable is false return summary.
            When "closed" show summary and image below it
            When "opened" only show the p
        */}
          {!desc ? (
            <summary onClick={() => setDesc(!desc)}>
              {description.indexOf(".") <= 100
                ? description.substring(0, description.indexOf(".") + 1)
                : description.substr(0, 100)}
            </summary>
          ) : (
            <summary onClick={() => setDesc(!desc)}>Desciption: </summary>
          )}
          <p>{description.substr(0, 350)}</p>
        </details>
        {!desc ? <img className="imagelogo" src={url} alt={name}></img> : ""}
      </div>
      <div className="buttons">
        <div className="going">
          <p>{ammountGoing}</p>
          <button type="button">Going</button>
        </div>
        <div className="interested">
          <p>{ammountInterested}</p>
          <button type="button">Interested</button>
        </div>
      </div>
    </div>
  );
}
