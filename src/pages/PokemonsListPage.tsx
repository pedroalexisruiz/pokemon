import React from "react";
import { usePokemon } from "../customHooks/usePokemons";
import PokemonsList from "./pokemonsList";

const PokemonListPage = () => {
  const { pokemonsList, getPokemonsList, pagesQuantity } = usePokemon();
  return (
    <PokemonsList
      pokemonsList={pokemonsList}
      getPokemonsList={getPokemonsList}
      pagesQuantity={pagesQuantity}
    />
  );
};
export default PokemonListPage;
