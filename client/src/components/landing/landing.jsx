import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div>
      <img src="videogame.png" alt=" mario-init" />
      <Link to="/videogames" >
        <button>Enter</button>
      </Link>
    </div>
  );
}
