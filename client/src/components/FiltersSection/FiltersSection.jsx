import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import {
  filterByCreated,
  filterByGenres,
  sortByAlpha,
  sortByRating,
} from "../../redux/actions";

export default function FiltersSection({ setCurrentPage, setOrder }) {
  const genres = useSelector((state) => state.genres);
  const dispatch = useDispatch();

  function handleFilterGenres(e) {
    dispatch(filterByGenres(e.target.value));

  }
  function handleFilterCreated(e) {
    dispatch(filterByCreated(e.target.value));
    setCurrentPage(1);

  }
  function handleSortAlpha(e) {
    dispatch(sortByAlpha(e.target.value));
    setCurrentPage(1);
    setOrder(e.target.value); //Declare this state just for re rendering the component after modification
    
  }
  function handleSortRating(e) {
    dispatch(sortByRating(e.target.value));
    setCurrentPage(1);
    setOrder(e.target.value);
  }

  return (
    <FilterBox>
      <select onChange={(e) => handleFilterCreated(e)}>
        <option value="All">Api & User</option>
        <option value="Api">Api Games</option>
        <option value="User">User Games </option>
      </select>

      <select onChange={(e) => handleSortAlpha(e)}>
        <option>Alpha Sort</option>
        <option value="asc">A - Z</option>
        <option value="desc">Z - A</option>
      </select>
      <select onChange={(e) => handleSortRating(e)}>
        <option>Ratings Sort</option>
        <option value="asc">Highest Ratings</option>
        <option value="desc">Lowest Ratings</option>
      </select>
      <select onChange={(e) => handleFilterGenres(e)}>
        <option value="All">All Games</option>
        {genres.map((g, i) => {
          return (
            <option key={i} value={g.name}>
              {g.name}
            </option>
          );
        })}
      </select>
    </FilterBox>
  );
}

const FilterBox = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-bottom:1em;
  padding: 0 1em;
  
  select {
    cursor: pointer;
    margin:1em 0;
    
  }

  @media (min-width: 600px) {
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 32px;
    select {
      height:2em;
      margin-bottom: 6em;
      font-weight:bold;
    }
  }
`;
