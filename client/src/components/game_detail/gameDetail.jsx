import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import LoaderBouncer from "../../elements/loaders/loaders";
import { cleanGameId, getGameById } from "../../redux/actions";
import styled from "styled-components";
import Nav from "../Nav/Nav";
import Footer from "../footer/footer";

export default function GameDetail({ id }) {
  const dispatch = useDispatch();
  const game = useSelector((state) => state.detailGame);
  useEffect(() => {
    dispatch(getGameById(id));
    return () => {
      dispatch(cleanGameId());
    };
  }, []); //eslint-disable-line

  return (
    <Container>
      <Nav />
      {!game ? (
        <LoaderBouncer />
      ) : (
        <LandingDetail>
          <h1>{game.name}</h1>

          <ImgDiv>
            <img src={game.img} alt={"loading"} />
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
                {/*   */}
          </DataDiv>
        </LandingDetail>
      )}
      <Footer />
    </Container>
  );
}

const Container = styled.main`
  display: flex;
  flex-direction: column;
  background: url(/images/bg-detail-2.jpg) no-repeat center;
  background-size: cover;
  height: 100vh;
`;

const LandingDetail = styled.section`
  display: flex;
  flex-direction: column;
  /* justify-content:space-between; */
  padding: 1em 2em;
  align-items: center;
  /* height: 100vh; */
  h1 {
    text-align: justify;
    margin-bottom: 0.5em;
    color: #ffff;
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
      padding: 1em;
    }
    div:nth-child(4) {
      width: 100%;
    }
    /* 
    */
  }
`;
const ImgDiv = styled.div`
  width: 150px;
  height: 150px;
  text-align: center;
  margin-bottom: 0.5em;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (min-width: 900px) {
    width:300px;
    height:300px;
    margin-bottom: 2em;
    img {
      background-position:top;
      background-size: contain;
    }
  }
  /*
  */
`;
const DescDiv = styled.div`
  text-align: justify;
  margin-bottom: 1.5em;
  background-color: white;

  @media (min-width: 900px) {
    margin-bottom: 5em;
  }
  /*
   */
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
