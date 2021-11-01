import React from "react";
import { Link } from "react-router-dom";
import "./Landing-style.css"

export default function Landing() {

  return (
    <div className="main-landing">
      <img src="videogame.png" alt=" mario-init" />
      <Link to="/videogames" >
        Enter
      </Link>
    </div>
  );
}
