import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Card({ game }) {
  return (
    <CardGame>
      <Link to={`/videogames/${game.id}`}>{game.name}</Link>
      <img src={game.img} alt={"games"} loading="lazy" />
    </CardGame>
  );
}

const CardGame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: calc(50% - 10px);
  box-sizing: content-box;

  @media (min-width: 600px) {
    width: calc(25% - 10px);
  }
  img {
    width: 100px;
    height: 100px;
  }

`;
