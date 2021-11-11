import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonLanding } from "../../elements/buttons/buttons";

export default function NotFound({ text }) {
  return (
    <NotFoundDiv>
      <div>{text ? <h2>{text.toUpperCase()}</h2> : " NOT FOUND "}</div>
      <ButtonLanding>
        <Link to="/videogames">Back</Link>
      </ButtonLanding>
    </NotFoundDiv>
  );
}

const NotFoundDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url(/images/game-not-found.jpg) no-repeat center;
  background-size: cover;
  /* filter: blur(0.5px); */
  width: 100%;
  height: 100vh;
  /* position: relative; */
  z-index: 999;
  div {
    background: #ffff;
  }
`;
