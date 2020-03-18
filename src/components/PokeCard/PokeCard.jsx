import React from "react";
import "./PokeCard.css";

export const PokeCard = props => {
  return (
    <div className="PokeCard">
      <h3>{props.pokemon.num}</h3>
      <img alt="PokePic" src={`${props.pokemon.img}`} />
      <h2>{props.pokemon.name}</h2>
      <p>{/* <b>Type:</b> {props.pokemon.type} */}</p>

      {console.log(props)}
    </div>
  );
};
