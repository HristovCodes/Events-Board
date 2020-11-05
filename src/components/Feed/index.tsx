// eslint-disable-next-line
import React, { useEffect, useState } from "react";
import "./style.scss";
import Event from "../Event/index";
import Firebase from "../../firebase";
import Wrapper from "../Wrapper/index";

interface FeedProps {
  onClick: any;
  auth: any;
  userData: any;
}

export default function Feed({ onClick, auth, userData }: FeedProps) {
  const [events, setEvents] = useState();

  let structureEvents = (data: [Object] | undefined) => {
    let temp = [];
    if (data !== undefined) {
      for (const valuea of Object.entries(data)) {
        for (const valueb of Object.entries(valuea[1])) {
          // valueb[0] is the unique key
          temp.push({
            0: valueb[0],
            1: (
              <Event
                date={valueb[1].eventDate}
                name={valueb[1].eventTitle}
                description={valueb[1].eventDesc}
                ammountGoing={1}
                ammountInterested={0}
                url={""}
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
    // pulls events from database
    if (events === undefined)
      Firebase.database
        .ref("events/")
        .once("value")
        .then(function (snapshot) {
          setEvents(snapshot.val());
        });
  });

  return (
    <Wrapper onClick={onClick} cssClass="home">
      {structureEvents(events)}
    </Wrapper>
  );
}
