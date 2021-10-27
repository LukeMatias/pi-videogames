import React from "react";
import Card from "../card/card";

export default function Cards() {
    const style = {
        border: "1px solid green",
      };
  return (
    <div  style={style} >
      <h1> Soy el container cards</h1>
      <Card />
    </div>
  );
}
