import React from "react";
import styled from "styled-components";

export default function Pagination({
  gamesPerPage,
  allGames,
  handlePagination,
  currentPage,
}) {
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
              <button
                style={{
                  color: currentPage === num ? "red" : "none",
                }}
                onClick={() => handlePagination(num)}
              >
                {num}
              </button>
            </li>
          );
        })}
      </ul>
    </PaginationSection>
  );
}

const PaginationSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: grey; */
  padding: 0.5em 0;
  @media (min-width: 600px) {
    height: 2em;
  }

  ul {
    display: flex;
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
