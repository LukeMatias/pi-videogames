import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { createGame, getGenres } from "../../redux/actions";
import { Link } from "react-router-dom";

export default function CreateGame() {
  const [errors, setErrors] = useState({});
  const genres = useSelector((state) => state.genres);
  const gameCreated = useSelector((state) => state.gameCreated);
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = "Create - Game";
    console.log(errors);
    if (genres.length === 0) {
      dispatch(getGenres());
    }
  }, []); //eslint-disable-line

  const [form, setForm] = useState({
    name: "",
    description: "",
    genresGame: [],
    released: "",
    rating: "",
    // platforms: [],
    platforms: "",
  });

  function validateInputs(formData) {
    const errors = {};
    if (!formData.name.trim()) errors.Name = "Name is required";
    if (!formData.description.trim())
      errors.Description = "Description is required";
    if (formData.genresGame.length === 0)
      errors.Genres = "Must select some Genre";
    if (!formData.released.trim()) errors.Released = "Must select a date";
    if (!formData.rating.trim())
      // || typeof formData.rating !== "number"
      errors.Rating = "Required and must be a number";
    if (!formData.platforms.trim())
      errors.Platforms = "Must select some Platforms";
    return errors;
  }

  function handleSelect(e) {
    setForm({
      ...form,
      genresGame: [...form.genresGame, e.target.value],
    });
  }

  function handleOfSelect(e) {
    setForm({
      ...form,
      genresGame: form.genresGame.filter((g) => g !== e),
    });
  }
  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    setErrors(
      validateInputs({
        ...form,
        [e.target.name]: e.target.value,
      })
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (Object.values(errors).length) {
      console.log(Object.values(errors));
      alert(
        `Sorry, please complete the following Data : ${Object.values(
          errors
        ).map((err) => err + " ")}`
      );
    } else {
      try {
        dispatch(createGame(form));
        alert("Game succed created");
        setForm({
          name: "",
          description: "",
          genresGame: [],
          released: "",
          rating: "",
          // platforms: [],
          platforms: "",
        });
      } catch (err) {
        alert(`It may be an error ${err.message}`);
      }
    }
  }
  return (
    <BgImg>
      <FormLayout>
        <div>
          <h1>Create Game</h1>
          <button>
            <Link to="/videogames">Back</Link>
          </button>
        </div>
        <FormBox onSubmit={(e) => handleSubmit(e)}>
          <DivInput>
            <label>Name</label>
            <ErrorMessage>{errors.Name}</ErrorMessage>
            <input
              placeholder="Create a name ..."
              type="text"
              value={form.name}
              name="name"
              autoFocus={true}
              onChange={handleChange}
            />
          </DivInput>
          <DivInput>
            <label>Description</label>
            <ErrorMessage>{errors.Description}</ErrorMessage>
            <textarea
              type="text"
              placeholder="Create a description ..."
              value={form.description}
              name="description"
              onChange={handleChange}
            ></textarea>
          </DivInput>
          <DivInputGenres>
            <select onChange={handleSelect}>
              {genres.map((g, i) => {
                return (
                  <option key={i} value={g.name}>
                    {g.name}
                  </option>
                );
              })}
            </select>
            <ErrorMessage>{errors.Genres}</ErrorMessage>
            <ul>
              {form.genresGame.map((g, i) => {
                return (
                  <div key={i}>
                    <li>{g}</li>
                    <button key={g} onClick={() => handleOfSelect(g)}>
                      x
                    </button>
                  </div>
                );
              })}
            </ul>
          </DivInputGenres>
          <DivInput>
            <label>Released Date</label>
            <ErrorMessage>{errors.Released}</ErrorMessage>
            <input
              type="date"
              onChange={handleChange}
              name="released"
              value={form.released}
            />
          </DivInput>
          <DivInput>
            <label>Rating</label>
            <ErrorMessage>{errors.Rating}</ErrorMessage>
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
            {/* <button>Add</button> */}
            <ErrorMessage> {errors.Platforms}</ErrorMessage>
            <input
              type="input"
              onChange={handleChange}
              placeholder="Type and add platforms"
              name="platforms"
              value={form.platforms}
            />
          </DivInput>
          <button type="submit">Create</button>
          {/* <button type="submit">Create New</button> */}
          {/* Debe cambiar el value a submit o crear nuevo juego */}
          {/* <ul>
            {Object.keys(errors).map((e, i) => {
              return <ErrorMessage key={i}>{`${e} is required.`}</ErrorMessage>;
            })}
          </ul> */}
        </FormBox>
      </FormLayout>
    </BgImg>
  );
}

const BgImg = styled.div`
  /* background: url(/images/scorpion.png) no-repeat right; */
  background-size: cover;
  background-color: grey;
  @media (min-width: 600px) {
    background: url(/images/scorpion.png) no-repeat right;
    background-color: grey;
    background-size: cover;
  }

  /* height:100vh; */
  /* filter: blur(8px);
  -webkit-filter: blur(8px); */
`;

const ErrorMessage = styled.p`
  color: red;
  font-weight: bold;
`;
const FormLayout = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 1em;
  box-shadow: 0 0 80px -10px black;

  h1 {
    margin-bottom: 0.5em;
  }
  div {
    button {
      padding: 0 0.5em;
      margin-bottom: 0.5em;
      cursor: pointer;
    }
  }

  @media (min-width: 1000px) {
    /* background-position: center; */
    padding: 1em 5em;
    div {
      button {
        padding: 0.5em 1em;
        margin-bottom: 1em;
      }
    }
  }
`;

const FormBox = styled.form`
  display: flex;
  flex-direction: column;
  width: calc(90% - 16px);
  button {
    width: 50%;
    padding: 0.5em 0.5em;
    cursor: pointer;
  }
  @media (min-width: 1000px) {
    width: 50%;
  }
`;
const DivInput = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-start;
  margin-bottom: 1em;
  input,
  textarea {
    width: 100%;
    height: 3.5em;
  }
  label {
    margin-top: 0.5em;
    color: #ffffff;
    font-weight: bold;
    /* background-color:whitesmoke; */
  }
`;

const DivInputGenres = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 1em;
  select,
  option {
    cursor: pointer;
  }
  ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  ul div {
    display: flex;
    margin-left: 0.5em;
    button {
      padding: 0 0.5em;
      cursor: pointer;
      background-color: red;

      outline: none;
    }
  }
`;
