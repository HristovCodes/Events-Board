// eslint-disable-next-line
import React from "react";
import { useLocation } from "react-router-dom";
import Wrapper from "../Wrapper/index";

interface NoMatchProps {
  onClick: any;
}

export default function NoMatch({ onClick }: NoMatchProps) {
  let location = useLocation();

  return (
    <Wrapper onClick={onClick} cssClass="error404">
      <h2>Error 404</h2>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </Wrapper>
  );
}
