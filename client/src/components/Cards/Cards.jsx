import React from "react";
import Card from "../Card/Card";
import styled from "styled-components";
import NotFound from "../NotFound/NotFound";

export default function Cards({ games }) {
  // console.log(games)
  return (
    <CardsLayout>
      {Array.isArray(games) ? (
        games.map((game) => {
          return <Card game={game} key={game.id} />;
        })
      ) : (
        <NotFound text={games} />
      )}
    </CardsLayout>
  );
}

const CardsLayout = styled.div`
  /* border:1px solid black; */
  display: flex;
  justify-content:center;
  flex-wrap: wrap;
  gap:2em;
  @media (min-width: 600px) {
    width: calc(85% - 32px);
    /* justify-content:flex-start; */
  }
`;
