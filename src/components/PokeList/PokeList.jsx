import React from "react";
import { PokeCard } from "../PokeCard/PokeCard";
import "./PokeList.css";

export const PokeList = props => (
  <div className="PokeList">
    {props.pokemons.map(pokemon => (
      <PokeCard key={pokemon.id} pokemon={pokemon} />
    ))}
  </div>
);
