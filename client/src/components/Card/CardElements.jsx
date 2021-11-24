import styled from "styled-components";

export const CardGame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: calc(100% - 32px);
  height: 200px;
  position: relative;
  -webkit-border-top-right-radius: 10px;
  -webkit-border-bottom-left-radius: 10px;
  -moz-border-radius-topright: 10px;
  -moz-border-radius-bottomleft: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  box-shadow: 0 0 80px -10px black;

  &:hover {
    transform: scale(1.1);
    transition: all 0.2s ease-in-out;
  }

  img {
    width: 100%;
    height: 100%;
    -webkit-border-top-right-radius: 8px;
    -webkit-border-bottom-left-radius: 8px;
    -moz-border-radius-topright: 8px;
    -moz-border-radius-bottomleft: 8px;
    border-top-right-radius: 8px;
    border-bottom-left-radius: 8px;
    object-fit: cover;
  }

  @media (min-width: 600px) {
    width: calc(50% - 32px);
    height: 400px;
  }
  @media (min-width: 1000px) {
    width: calc(33% - 32px);
  }
  @media (min-width: 1500px) {
    width: calc(25% - 32px);
  }
`;

export const BoxBottom = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  min-height: 3em;
  background: white;
  -webkit-border-bottom-left-radius: 8px;
  -moz-border-radius-bottomleft: 8px;
  border-bottom-left-radius: 8px;
`;

export const DivAnchor = styled.div`
  padding: 0.5em;
  width: 40%;
`;

export const DivGenres = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  width: 60%;
  font-weight: bold;
  padding: 0.5em;
  div {
    margin-right: 3px;
  }
`;
