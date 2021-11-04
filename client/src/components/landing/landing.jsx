import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Landing() {

  return (
    <LandingMain>
      <img src="videogame.png" alt=" mario-init" />
      <Link to="/videogames" >
        Enter
      </Link>
    </LandingMain>
  );
}


const LandingMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width:100vw;
  background-color: #fff;
  position: fixed;
  top:0;
  z-index:999;

  img {
  height: 65vmin;
  pointer-events: none;
  /* flex-flow: column nowrap;
   */
}



`;