import React from "react";
import styled from "styled-components";

import Toggle from "../Toggle/Toggle";

export default function Nav() {
  return (
    <NavDiv>
      <Toggle />
      <h1>Henry Logo Nav </h1>
    </NavDiv>
  );
}

const NavDiv = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  @media (min-width: 600px){

    flex-direction:row-reverse;
  }
`;
