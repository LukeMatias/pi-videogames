import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getGameById } from "../../redux/actions";

export default function GameDetail({ id }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGameById(id));
  }, [dispatch]);
  const game = useSelector((state) => state.detailGame);
  console.log(game);
  const img = {
    width: "50%",
  };
  return (
    <div>
      {!game ? (
        "Loading ..."
      ) : (
        <div>
          <h1>{game.name}</h1>
        <div>
          <img style={img} src={game.img} alt="profile" />
        </div>
          <p>{game.description}</p>
          <p>{game.rating}</p>
          <p>{game.released}</p>
          {game.genresGame?.map(g=>{
            return(
              <div>
              {g}
              </div>
            )
          })}
          {game.platforms?.map(g=>{
            return(
              <div>
              {g}
              </div>
            )
          })}
        </div>
      )}
    </div>
  );
}
