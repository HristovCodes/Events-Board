// eslint-disable-next-line
import React from "react";
import { Link, useLocation } from "react-router-dom";
import Wrapper from "../Wrapper/index";
import "./style.scss";

interface Error404Props {
  onClick: any;
}

export default function Error404({ onClick }: Error404Props) {
  let location = useLocation();

  return (
    <Wrapper onClick={onClick} cssClass="error404">
      <h2>Error 404</h2>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
      <Link to="/Events-Board/">Go back to Home</Link>
    </Wrapper>
  );
}
