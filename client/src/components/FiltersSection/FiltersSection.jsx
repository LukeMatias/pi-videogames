import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
// import { DivGenres } from "../Create_game/CreateGame";
import {
  filterByCreated,
  filterByGenres,
  sortByAlpha,
  sortByRating,
} from "../../redux/actions";

export default function FiltersSection({ setCurrentPage, setOrder }) {
  const genres = useSelector((state) => state.genres);
  // const [showGenres, setShowGenres] = useState(false);
  const dispatch = useDispatch();

  function handleFilterGenres(e) {
    dispatch(filterByGenres(e.target.value));
  }
  function handleFilterCreated(e) {
    dispatch(filterByCreated(e.target.value));
  }
  function handleSortAlpha(e) {
    dispatch(sortByAlpha(e.target.value));
    setCurrentPage(1);
    setOrder(e.target.value);
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
  padding: 0 1em;

  select {
    cursor: pointer;
    option:hover {
      cursor: pointer;
    }
  }

  @media (min-width: 600px) {
    background-color: #165168;
    flex-direction: column;
    width: min-content;
    justify-content: flex-start;
    padding-top: 32px;
    /* height:100vh; */
    select {
      margin-bottom: 3em;
    }
  }
`;

// const Genres = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   border: 1px solid black;
//   border-radius: 5px;
//   padding: 0.5em 2em;
//   cursor: pointer;
//   background-color: #fff;
//   @media (min-width: 600px) {
//     margin: auto;
//   }
// `;
// const SelectGenres = styled.div`
//   display: flex;
//   flex-direction: column;
//   /* justify-content:space-between; */
//   align-items: flex-start;
//   margin-bottom: 1em;
//   position: relative;

/* input,
  textarea {
    width: 100%;
    height: 3.5em;
  } */
// `;

/* <SelectGenres>
        <Genres onClick={() => setShowGenres(!showGenres)}>
          <p>Genres</p>
          <p>&gt;&gt;</p>
        </Genres>
        <DivGenres showGenres={showGenres}>
          {genres.map((g, i) => {
            return (
              <div key={g.id}>
                <label key={g.name}>{g.name}</label>
                <input
                  key={i}
                  type="checkbox"
                  value={g.name}
                  // onChange={handleCheckBox}
                />
              </div>
            );
          })}
        </DivGenres>
      </SelectGenres> */
