import React from "react";
import Cards from "../cards/cards"

export default function Videogames() {
    const style = {
        border : "1px solid black"
    }
  return (
    <main style = {style}>
      <h1>Videogames</h1>
      <div>
        <input type="text" placeholder="Search game"/>
      </div>
      <Cards/>
    </main>
  );
}
