import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useSelector } from "react-redux";

export default function CreateGame() {
  const genres = useSelector((state) => state.genres);
  const [form, setForm] = useState({
    name: "",
    description: "",
    genres: [],
    released: "",
    rating: "",
    platforms: [],
  });

  function handleCheckBox(e) {
    if (e.target.checked) {
      setForm({
        ...form,
        genres: [...form.genres, e.target.value],
      });
    } else {
      setForm({
        ...form,
        genres: form.genres.filter((g) => g !== e.target.value),
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
    axios.post("http://localhost:3001/videogames", form);
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
      <div>
        <h1>Create Game</h1>
      </div>

      <FormBox onSubmit={(e) => handleSubmit(e)}>
        <label>Name</label>
        <input
          type="text"
          value={form.name}
          name="name"
          onChange={handleChange}
        />
        <label>Description</label>
        <textarea
          type="text"
          value={form.description}
          name="description"
          onChange={handleChange}
        ></textarea>
        <label>Genres</label>
        {genres.map((g, i) => {
          return (
            <div>
              <label key={i}>{g.name}</label>
              <input
                key={i}
                type="checkbox"
                value={g.name}
                onChange={handleCheckBox}
              />
            </div>
          );
        })}
        <label>Released Date</label>
        <input
          type="date"
          onChange={handleChange}
          name="released"
          value={form.released}
        />
        <label>Rating</label>
        <input
          type="number"
          onChange={handleChange}
          name="rating"
          value={form.rating}
        />
        <label>Platforms</label>
        <input
          type="input"
          onChange={handleChange}
          name="platforms"
          value={form.platforms}
        />
        <input type="submit" value="enviar" />
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
`;

const FormBox = styled.form`
  display: flex;
  flex-direction: column;
`;
