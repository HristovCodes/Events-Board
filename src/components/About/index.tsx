// eslint-disable-next-line
import React from "react";
import Wrapper from "../Wrapper/index";
import "./style.scss";

interface AboutProps {
  onClick: any;
}

export default function About({ onClick }: AboutProps) {
  return (
    <Wrapper onClick={onClick} cssClass="about">
      <h1>
        <span>Events Board</span> is the place to go for finding events to
        attend in your area!
      </h1>
      <h2>
        The service made with you in mind! No big organizations pushing their
        stuff onto you. It's just events from the people for the people.
      </h2>
      <h3>Some more information about us</h3>
      <p>The project began on August 19th.</p>
      <p>
        We've been open source from the start with the goal of helping newer
        developers grow and have projects to contribute to.
      </p>
      <h4>The people behind Events Board</h4>
      <p>
        Hristov
        <a target="blank" href="https://github.com/HristovCodes">
          (github)
        </a>
      </p>
      <p>
        Bozhidar-A
        <a target="blank" href="https://github.com/Bozhidar-A">
          (github)
        </a>
      </p>
      <h5>
        If you would also like to be a part of the project you can contribute.
        Everyone is welcome!
      </h5>
    </Wrapper>
  );
}
