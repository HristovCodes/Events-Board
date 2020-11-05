// eslint-disable-next-line
import React, { useState } from "react";
import "./style.scss";
import Firebase from "../../firebase";
import { useHistory } from "react-router-dom";
import Wrapper from "../Wrapper/index";

interface SubmitEventProps {
  onClick: any;
}

export default function SubmitEvent({ onClick }: SubmitEventProps) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [desc, setDesc] = useState("");

  let history = useHistory();

  let submitEvent = () => {
    Firebase.submitEvent(title, date, desc);
    history.replace("/Events-Board");
  };

  return (
    <Wrapper onClick={onClick} cssClass="eventsubmit">
      <form className="submitform">
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
            type="text"
            name="desc"
            id="desc"
            onChange={(e) => setDesc(e.target.value)}
          ></input>
        </div>
        <button type="button" className="btnmain" onClick={submitEvent}>
          Add event
        </button>
      </form>
    </Wrapper>
  );
}
