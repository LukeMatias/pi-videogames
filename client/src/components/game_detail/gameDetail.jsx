import React from "react";

export default function GameDetail({ game }) {
  console.log(game);
  const img = {
    width: "25%",
  };
  return (
    <div>
      <h1>{game.name}</h1>
      <p>{game.description}</p>
      <img style={img} src={game.img} alt="profile" />
    </div>
  );
}
