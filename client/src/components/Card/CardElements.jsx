import styled from "styled-components";

export const CardGame = styled.div`
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
  &:hover{
    cursor: pointer;
    transform:scale(1.1);
    transition: all .2s ease-in-out;
    z-index:1;
  }
  

  img {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    object-fit: cover;
  }

  @media (min-width: 600px) {
    width: calc(50% - 18px);
    height: 400px;
   
  }
  @media (min-width: 1000px) {
    width: calc(33% - 18px);
  }
  @media (min-width: 1500px) {
    width: calc(25% - 18px);
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

  &:hover {
    display:none;
   
  }
`;

export const DivAnchor = styled.div``;

export const DivGenres = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
`;
