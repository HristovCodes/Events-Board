// eslint-disable-next-line
import React, { CSSProperties, useEffect, useState } from "react";
import "./style.scss";
import Event from "../Event/index";
import Firebase from "../../firebase";
import Wrapper from "../Wrapper/index";
import ReactLoading from "react-loading";

interface FeedProps {
  onClick: any;
}

export default function Feed({ onClick }: FeedProps) {
  const [events, setEvents] = useState();
  const [attendees, setAttendees] = useState();
  const [search, setSearch] = useState("");

  const isDateAfterToday = (date: string) => {
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
  };

  // calculates scrollbarwidth and returns is as margin to offset
  const getMarginR = () => {
    document.documentElement.style.overflow = "scroll"; // forcing scrollbar to appear
    let scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    document.documentElement.style.overflow = "hidden"; // forcing scrollbar to disappear

    let style = {
      marginRight: scrollbarWidth.toString() + "px",
    };
    return style;
  };

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
        <ul style={getMarginR()} className="eventsGrid">
          {temp.map((el) => {
            return <li key={el[0]}>{el[1]}</li>;
          })}
        </ul>
      );
      return wrapper;
    }
    return (
      <ReactLoading
        type={"bars"}
        color={"#2c148b"}
        height={"60px"}
        width={"60px"}
        className="loading"
      />
    );
  };

  // only returns events that match the date searched for
  let eventsForDate = (
    eventData: [Object] | undefined,
    attendeesData: [Object] | undefined
  ) => {
    if (eventData !== undefined && attendeesData !== undefined) {
      let temp = [];

      for (const valuea of Object.entries(eventData)) {
        if (valuea[0] === search) {
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
        } else {
          return (
            <p className="loading">Nothing found for the selected date.</p>
          );
        }
      }
      let wrapper = (
        <ul style={getMarginR()} className="eventsGrid">
          {temp.map((el) => {
            return <li key={el[0]}>{el[1]}</li>;
          })}
        </ul>
      );
      return wrapper;
    }
    return (
      <ReactLoading
        type={"bars"}
        color={"#2c148b"}
        height={"60px"}
        width={"60px"}
        className="loading"
      />
    );
  };

  useEffect(() => {
    // pulls both events and attendees from database
    getData();
  });

  return (
    <Wrapper onClick={onClick} cssClass="home">
      <form className="searchform">
        <label className="searchlbl" htmlFor="date">
          Choose a date to filter the events
        </label>
        <input
          type="date"
          name="search"
          className="search"
          onChange={(e) => setSearch(e.target.value)}
        ></input>
      </form>
      {search
        ? eventsForDate(events, attendees)
        : structureEvents(events, attendees)}
    </Wrapper>
  );
}
