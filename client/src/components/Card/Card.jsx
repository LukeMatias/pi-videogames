import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Card({ game }) {
  return (
    <CardGame key={game.id}>
      <img src={game.img} alt={"Loading ..."} loading="lazy" />
      <BoxBottom>
        
        <Link to={`/videogames/${game.id}`}><h5>{game.name}</h5></Link>
        <DivGenres>
          {game.genresGame?.map((g) => {
            return (
              <div key={g}>{!game.genresGame.length ? "Loading..." : g}</div>
            );
          })}
        </DivGenres>
      </BoxBottom>
    </CardGame>
  );
}

const CardGame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: calc(100% - 10px);
  height: 200px;
  margin: 1em 0.5em;
  position: relative;
  border-radius: 8px;

  box-shadow: 0 0 80px -10px black;
  img:hover {
  }

  @media (min-width: 600px) {
    width: calc(50% - 18px);
    height: 400px;
    img {
      object-fit: contain;
    }
  }
  @media (min-width: 1000px) {
    width: calc(33% - 18px);
  }
  @media (min-width: 1500px) {
    width: calc(25% - 18px);
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 8px;

    object-fit: cover;
  }

  a {
    text-align: justify;
  }
`;

const BoxBottom = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  background: white;
  width: 100%;
`;

const DivGenres = styled.div``;
