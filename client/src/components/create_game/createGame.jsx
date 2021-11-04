import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { createGame } from "../../redux/actions";

export default function CreateGame() {
  const genres = useSelector((state) => state.genres);
  const [showGenres, setShowGenres] = useState(false);
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: "",
    description: "",
    genresGame: [],
    released: "",
    rating: "",
    platforms: [],
  });

  function handleCheckBox(e) {
    if (e.target.checked) {
      setForm({
        ...form,
        genresGame: [...form.genresGame, e.target.value],
      });
    } else {
      setForm({
        ...form,
        genresGame: form.genresGame.filter((g) => g !== e.target.value),
      });
    }
  }
  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(createGame(form));
    // axios.post("http://localhost:3001/videogames", form);

    // setForm({
    //   name: "",
    //   description: "",
    //   genres: [],
    //   released: "",
    //   rating: "",
    //   platforms: [],
    // });
  }
  // Deberia traer los generos al estado y renderizar cada uno por input
  return (
    <FormLayout>
      <h1>Create Game</h1>

      <FormBox onSubmit={(e) => handleSubmit(e)}>
        <DivInput>
          <label>Name</label>
          <input
          placeholder="Create a name ..."
            type="text"
            value={form.name}
            name="name"
            onChange={handleChange}
          />
        </DivInput>
        <DivInput>
          <label>Description</label>
          <textarea
            type="text"
          placeholder="Create a description ..."

            value={form.description}
            name="description"
            onChange={handleChange}
          ></textarea>
        </DivInput>
        <DivInputGenres>
          <ButtonGenres onClick={() => setShowGenres(!showGenres)}>
            <p>Select Genres</p>
            <p>&gt;&gt;</p>
          </ButtonGenres>
          <DivGenres showGenres={showGenres}>
            {genres.map((g, i) => {
              return (
                <div  key={g.id}>
                  <label >{g.name}</label>
                  <input
                    // key={i}
                    type="checkbox"
                    value={g.name}
                    onChange={handleCheckBox}
                  />
                </div>
              );
            })}
          </DivGenres>
        </DivInputGenres>
        <DivInput>
          <label>Released Date</label>
          <input
            type="date"
            onChange={handleChange}
            name="released"
            value={form.released}
          />
        </DivInput>
        <DivInput>
          <label>Rating</label>
          <input
            type="number"
          placeholder="Select a rating btw 0 and 10..."

            onChange={handleChange}
            min="0"
            max="10"
            name="rating"
            value={form.rating}
          />
        </DivInput>
        <DivInput>
          <label>Platforms</label>
          <input
            type="input"
            onChange={handleChange}
          placeholder="Put the platforms matchers for your new game separate for comas..."

            name="platforms"
            value={form.platforms}
          />
        </DivInput>
        {/* <input type="submit" value="enviar" /> */}
        <button type="submit">Save</button>
      </FormBox>
      {/* Debe cambiar el value a submit o crear nuevo juego */}
    </FormLayout>
  );
}

const FormLayout = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  h1 {
    margin-bottom: 1em;
  }
`;

const FormBox = styled.form`
  /* border:1px solid black; */
  display: flex;
  flex-direction: column;
  width: calc(90% - 16px);
  height: 50vh;

  button {
    padding: 1em;
    cursor: pointer;
  }
`;
const DivInput = styled.div`
  display: flex;
  flex-direction: column-reverse;
  /* justify-content:space-between; */
  align-items: flex-start;
  margin-bottom: 1em;
  input,
  textarea {
    width: 100%;
    height: 3.5em;
  }
`;
export const DivGenres = styled.div`
  display: ${({ showGenres }) => {
    return !showGenres ? "none" : "flex";
  }}  ;
  z-index:1;
  
  ;
  flex-direction: row;
  flex-wrap: wrap;
  border: 1px solid black;
  position: absolute;
  top: 39px;
  background-color: #fff;
  width: 100%;
  transition: transform 0.3s ease-in-out;

  div {
    display: flex;
    justify-content: space-between;
    width: 50%;
    margin: auto;
    input {
      cursor: pointer;
    }
  }
`;

const DivInputGenres = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content:space-between; */
  align-items: flex-start;
  margin-bottom: 1em;
  position: relative;

  /* input,
  textarea {
    width: 100%;
    height: 3.5em;
  } */
`;

const ButtonGenres = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid black;
  border-radius: 5px;
  padding: 0.5em 2em;
  cursor: pointer;
  width: 80%;
`;
