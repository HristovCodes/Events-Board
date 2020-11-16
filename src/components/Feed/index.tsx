// eslint-disable-next-line
import React, { useEffect, useState } from "react";
import "./style.scss";
import Event from "../Event/index";
import Firebase from "../../firebase";
import Wrapper from "../Wrapper/index";

interface FeedProps {
  onClick: any;
}

function isDateAfterToday(date: string) {
  // today
  let today = new Date();
  today.setFullYear(today.getFullYear());
  today.setDate(today.getDate());
  today.setMonth(today.getMonth());
  // date of the event
  let dateyyyy = +date.substring(0, 4);
  let datemm = +date.substring(5, 7) - 1;
  let datedd = +date.substring(8, 10);
  let temp = new Date(dateyyyy, datemm, datedd);
  if (temp < today) {
    return false;
  }
  return true;
}

export default function Feed({ onClick }: FeedProps) {
  const [events, setEvents] = useState();
  const [attendees, setAttendees] = useState();
  const [search, setSearch] = useState("");

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

  // returns all events past today's date
  let structureEvents = (
    eventData: [Object] | undefined,
    attendeesData: [Object] | undefined
  ) => {
    if (eventData !== undefined && attendeesData !== undefined) {
      let temp = [];

      for (const valuea of Object.entries(eventData)) {
        if (isDateAfterToday(valuea[0]))
          for (const valueb of Object.entries(valuea[1])) {
            // valueb[0] is the unique key
            let att = {
              g: 0,
              i: 0,
            };
            for (const [key, val] of Object.entries(attendeesData)) {
              if (key === valueb[0]) {
                for (const x of Object.entries(val)) {
                  if (x[0] === "i") {
                    att.i = Object.entries(x[1]).length;
                  } else {
                    att.g = Object.entries(x[1]).length;
                  }
                }
              }
            }

            temp.push({
              0: valueb[0],
              1: (
                <Event
                  date={valueb[1].eventDate}
                  name={valueb[1].eventTitle}
                  description={valueb[1].eventDesc}
                  ammountGoing={att.g}
                  ammountInterested={att.i}
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

  // only returns events that match the date searched for
  let eventsForDate = (
    eventData: [Object] | undefined,
    attendeesData: [Object] | undefined
  ) => {
    if (eventData !== undefined && attendeesData !== undefined) {
      let temp = [];

      for (const valuea of Object.entries(eventData)) {
        if (valuea[0] === search)
          for (const valueb of Object.entries(valuea[1])) {
            // valueb[0] is the unique key
            let att = {
              g: 0,
              i: 0,
            };
            for (const [key, val] of Object.entries(attendeesData)) {
              if (key === valueb[0]) {
                for (const x of Object.entries(val)) {
                  if (x[0] === "i") {
                    att.i = Object.entries(x[1]).length;
                  } else {
                    att.g = Object.entries(x[1]).length;
                  }
                }
              }
            }

            temp.push({
              0: valueb[0],
              1: (
                <Event
                  date={valueb[1].eventDate}
                  name={valueb[1].eventTitle}
                  description={valueb[1].eventDesc}
                  ammountGoing={att.g}
                  ammountInterested={att.i}
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
      <label htmlFor="date">Choose a date to filter the events</label>
      <input
        type="date"
        name="search"
        onChange={(e) => setSearch(e.target.value)}
      ></input>
      {search
        ? eventsForDate(events, attendees)
        : structureEvents(events, attendees)}
    </Wrapper>
  );
}
