import React from "react";
import styled from "styled-components";

export default function Pagination({
  gamesPerPage,
  allGames,
  handlePagination,
}) {
  // const style = {
  //   display: "flex",
  // };
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allGames / gamesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <PaginationSection>
      <ul>
        {pageNumbers?.map((num, i) => {
          //eslint-disable-next-line
          return (
            <li key={i}>
              <button onClick={() => handlePagination(num)}>{num}</button>
            </li>
          );
        })}
      </ul>
    </PaginationSection>
  );
}
//eslint-disable-line

const PaginationSection = styled.div`
  display: flex;
  align-items:center;
  justify-content:center;
  background-color: grey;
  padding:.5em 0;
  /* max-height: 5em; */
  @media (min-width: 600px) {
    height:2em;
    /* width:100%;
    flex-wrap:wrap; */
    /* display:block; */
  }

  ul {
    display: flex;
    /* margin:auto; */
    align-items: center;
    justify-content: center;

    li {
      margin: 0 0.5em;
      button {
        padding: 0.5em;
        cursor: pointer;
      }
    }
  }
`;
