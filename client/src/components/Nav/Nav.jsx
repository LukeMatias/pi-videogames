import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Toggle from "../Toggle/Toggle";

export default function Nav() {
  return (
    <NavDiv>
      <Toggle />
      <Link to="/videogames">
        <img src="favicon.ico" alt="henrylogo" />
      </Link>
    </NavDiv>
  );
}

const NavDiv = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid black;
  background-color:#ffffff;

  /* position: fixed;
  top:0; */
  @media (min-width: 600px) {
    flex-direction: row-reverse;
  }
`;
