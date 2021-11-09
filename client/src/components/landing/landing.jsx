import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getGames } from "../../redux/actions";
import { ButtonLanding } from "../../elements/buttons/buttons";
import LoaderBouncer from "../../elements/loaders/loaders";

export default function Landing() {
  const games = useSelector((state) => state.games);
  const dispatch = useDispatch();

  useEffect(() => {
    if (games.length === 0) {
      dispatch(getGames());
      console.log("Dentro del IF");

      console.log(games.length);
    }
  }, []); //eslint-disable-line

  return (
    <LandingMain>

      <>
        <CardIntro>
          <BoxEnter>
            <h3>VIDEOGAMES - APP</h3>
            {!games.length ? (
              <LoaderBouncer />
            ) : (
              <Link to="/videogames">
                <ButtonLanding>Enter</ButtonLanding>
              </Link>
            )}
            <div>
              <a
                href="https://github.com/LukeMatias"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/images/github.png" alt="github profile" />
              </a>
              <a
                href="https://linkedin.com/in/lucasmatiasba"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/images/linkedin.png" alt="linkedin profile" />
              </a>
            </div>
          </BoxEnter>
        </CardIntro>
      </>
    </LandingMain>
  );
}

const LandingMain = styled.main`
  background: url(/images/landing-bg.jpg) no-repeat bottom;
  display: flex;
  flex-direction: column;
  background-size: cover;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: black;
  position: fixed;
  top: 0;
  z-index: 999;
`;

const CardIntro = styled.div`
  position: absolute;
  border-radius: 8px;
  height: 450px;
  width: 400px;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 0 0 80px -10px black;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const BoxEnter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5em;
  height: 5em;
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 1em;
    img {
      width: 2em;
      height: 2em;
    }
  }
`;
