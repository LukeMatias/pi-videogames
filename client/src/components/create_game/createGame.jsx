import React, { useState } from "react";
import styled from "styled-components";

export default function CreateGame() {
  const [form, setForm] = useState({
    name: "",
    description: "",
    genres: [],
    released: "",
    rating: "",
    platforms: [],
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }
  // Deberia traer los generos al estado y renderizar cada uno por input
  return (
    <FormLayout>
      <div>
        <h1>Create Game</h1>
      </div>

      <FormBox>
        <label>Name</label>
        <input type="text" value ={form.name} name="name" onChange={handleChange} />
        <label>Description</label>
        <textarea type="text" value ={form.description} name="description"  > </textarea>
        <label>Genres</label>
        <input type="radio"   />
        <label>Released Date</label>
        <input type="datef" />
        <label>Rating</label>
        <input type="number" />
        <label>Platforms</label>
        <input type="radio" />
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
  align-items:center;
`;

const FormBox = styled.form`
display:flex;
flex-direction:column;

`;