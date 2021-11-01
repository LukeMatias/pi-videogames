import React from "react";
import Card from "../Card/Card";
import styled from "styled-components"

export default function Cards({games}) {
  // console.log(games)
  return (
    <CardsLayout   >
      {/* <h1> Soy el container cards</h1> */}
       {
        games?.map((game,i) =>{
          return  <Card game={game} key={game[i]} />
        })
      }   
    </CardsLayout>
  );
}


const CardsLayout = styled.div`
  border:1px solid black;
  display:flex;
  flex-wrap:wrap;
  padding: 1em;

  
  

`;