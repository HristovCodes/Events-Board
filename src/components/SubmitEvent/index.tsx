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
  const [pic, setPic] = useState("");
  const [location, setLocation] = useState("");
  const [fee, setFee] = useState("");

  let history = useHistory();

  let submitEvent = () => {
    Firebase.submitEvent(title, date, desc, pic, location, fee);
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
        <div>
          <label htmlFor="logo">Logo url:</label>
          <input
            aria-required="true"
            type="text"
            name="logo"
            id="logo"
            onChange={(e) => setPic(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="location">Location:</label>
          <input
            aria-required="true"
            type="text"
            name="location"
            id="location"
            onChange={(e) => setLocation(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="fee">Entry fee:</label>
          <input
            aria-required="true"
            type="text"
            name="fee"
            id="fee"
            onChange={(e) => setFee(e.target.value)}
          ></input>
        </div>
        <button type="button" className="btnmain" onClick={submitEvent}>
          Add event
        </button>
      </form>
    </Wrapper>
  );
}
