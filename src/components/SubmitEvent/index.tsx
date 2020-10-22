// eslint-disable-next-line
import React, { useState } from "react";
import "./style.scss";
import Event from "../Event/index";
import Swipe from "../Swipe";
import Firebase from "../../firebase";

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
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [desc, setDesc] = useState("");

  return (
    <div>
      <Swipe
        touchEnd={() => {
          onClick(true);
        }}
      ></Swipe>
      <a className="sbbtn" onClick={() => onClick(true)}></a>
      <main onClick={() => onClick(false)}>
        <form className="submit">
          <h1>Submit an event</h1>
          <div>
            <label htmlFor="title">Title:</label>
            <input
              aria-required="true"
              type="text"
              name="title"
              id="title"
              onChange={(e) => setTitle(e.target.value)}
            ></input>
          </div>
          <div>
            <label htmlFor="date">Date:</label>
            <input
              aria-required="true"
              pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$"
              type="date"
              name="date"
              id="date"
              onChange={(e) => setDate(e.target.value)}
            ></input>
          </div>
          <div>
            <label htmlFor="desc">Description:</label>
            <input
              aria-required="true"
              pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
              type="text"
              name="desc"
              id="desc"
              onChange={(e) => setDesc(e.target.value)}
            ></input>
          </div>
          <button
            type="button"
            className="btnmain"
            onClick={() => {
              Firebase.submitEvent(title, date, desc);
            }}
          >
            Add event
          </button>
        </form>
      </main>
    </div>
  );
}
