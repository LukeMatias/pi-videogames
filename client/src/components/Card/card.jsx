import React from "react";
import { Link } from "react-router-dom";
import { CardGame, BoxBottom, DivGenres, DivAnchor } from "./CardElements";

export default function Card({ game }) {
  return (
    <CardGame key={game.id}>
      <img src={game.img} alt={"Loading ..."} loading="lazy" />
      <BoxBottom>
        <DivAnchor>
          <Link to={`/videogames/${game.id}`}>
            <h5>{game.name}</h5>
          </Link>
        </DivAnchor>
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
