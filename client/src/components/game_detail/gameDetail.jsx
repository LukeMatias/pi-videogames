import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import LoaderBouncer from "../../elements/loaders/loaders";
import { cleanGameId, getGameById } from "../../redux/actions";
import styled from "styled-components";

export default function GameDetail({ id }) {
  const dispatch = useDispatch();
  const game = useSelector((state) => state.detailGame);
  useEffect(() => {
    dispatch(getGameById(id));
    return () => {
      dispatch(cleanGameId());
    };
  }, []); //eslint-disable-line

  // var doc = new DOMParser().parseFromString(html, "text/html");
  return (
    <>
      {!game ? (
        <LoaderBouncer />
      ) : (
        <LandingDetail>
          <h1>{game.name}</h1>
          <ImgDiv>
            <img src={game.img} alt={<LoaderBouncer />} />
          </ImgDiv>
          <DescDiv>{game.description}</DescDiv>
          <DataDiv>
            <div>
              <p>Rating: </p>
              {game.rating}
            </div>
            <div>
              <p> Released: </p> {game.released}
            </div>
            <div>
              <p> Genres: </p>
              {game.genresGame?.map((g, i) => {
                return <span key={i}>{g.trim()}</span>;
              })}
              <div>
                <p> Platforms: </p>
                {Array.isArray(game.platforms) ? (
                  game.platforms.map((g, i) => {
                    return <span key={i}> {g} </span>;
                  })
                ) : (
                  <span> {game.platforms} </span>
                )}
              </div>
            </div>
          </DataDiv>
        </LandingDetail>
      )}
    </>
  );
}
const LandingDetail = styled.div`
  /* background-image: ; */
  /* opacity: 0.75; */
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 1em 2em;
  justify-content: center;
  h1 {
    text-align: justify;
    margin-bottom: 0.5em;
  }
  p {
    font-weight: bold;
  }
  @media (min-width: 1300px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 5em;

    h1 {
      width: 100%;
      margin: 1em auto;
    }
    div:nth-child(2) {
      width: 60%;
    }
    div:nth-child(3) {
      width: calc(40% - 2em);
      /* height: 100%; */
      padding:1em;
    }
    div:nth-child(4) {
      width: 100%;
    }
  }
`;
const ImgDiv = styled.div`
  text-align: center;
  margin-bottom: 0.5em;

  img {
    width: 100%;
    height: 10em;
    object-fit: contain;
  }
  @media (min-width: 800px) {
    margin-bottom: 2em;
    img {
      height: fit-content;
    }
  }
`;
const DescDiv = styled.div`
  text-align: justify;
  margin-bottom: 1.5em;

  @media (min-width: 800px) {
    margin-bottom: 5em;
  }
`;
const DataDiv = styled.div`
  margin-bottom: 1.5em;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  div:nth-child(3) {
    display: flex;
    flex-direction: column;
  }
`;
