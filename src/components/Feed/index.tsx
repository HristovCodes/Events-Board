// eslint-disable-next-line
import React, { useEffect, useState } from "react";
import "./style.scss";
import Event from "../Event/index";
import Firebase from "../../firebase";
import Wrapper from "../Wrapper/index";

interface FeedProps {
  onClick: any;
}

export default function Feed({ onClick }: FeedProps) {
  const [events, setEvents] = useState();
  const [attendees, setAttendees] = useState();

  // single call to the database to get both events and attendees
  let getData = () => {
    if (attendees === undefined && events === undefined)
      Firebase.database
        .ref("/")
        .once("value")
        .then(function (snapshot) {
          if (snapshot.val()) {
            setAttendees(snapshot.val()["attendees"]);
            setEvents(snapshot.val()["events"]);
          }
        });
  };

  let structureEvents = (
    eventData: [Object] | undefined,
    attendeesData: [Object] | undefined
  ) => {
    if (eventData !== undefined && attendees !== undefined) {
      let temp = [];

      for (const valuea of Object.entries(eventData)) {
        for (const valueb of Object.entries(valuea[1])) {
          // valueb[0] is the unique key

          // att is the list with attendees for the current event
          let att = attendeesData[valueb[0]];
          let g = 0;
          let i = 0;
          // if the list is empty g and i are 0
          if (att) {
            if (att["g"]) g = Object.values(att["g"]).length;
            if (att["i"]) i = Object.values(att["i"]).length;
          }
          temp.push({
            0: valueb[0],
            1: (
              <Event
                date={valueb[1].eventDate}
                name={valueb[1].eventTitle}
                description={valueb[1].eventDesc}
                ammountGoing={g}
                ammountInterested={i}
                url={valueb[1].eventUrl}
                id={valueb[0]}
              ></Event>
            ),
          });
        }
      }
      let wrapper = (
        <ul className="eventsGrid">
          {temp.map((el) => {
            return <li key={el[0]}>{el[1]}</li>;
          })}
        </ul>
      );
      return wrapper;
    }
    return <p>"Loading..."</p>;
  };

  useEffect(() => {
    // pulls both events and attendees from database
    getData();
  });

  return (
    <Wrapper onClick={onClick} cssClass="home">
      {structureEvents(events, attendees)}
    </Wrapper>
  );
}
