import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Card({ game }) {
  return (
    <CardGame key={game.id}>
      <img src={game.img} alt={"games"} loading="lazy" />
      <BoxBottom>
        <Link to={`/videogames/${game.id}`}>{game.name}</Link>
        <DivGenres>
          {game.genresGame.map((g) => {
            return <div key={g}>{g}</div>;
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

  /* box-sizing: content-box; */
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
  background:turquoise;
  /* background: rgba(51, 170, 51, 0.4); */
  width: 100%;
  /* height: 2em; */
`;

const DivGenres = styled.div`


`;
