import { useState } from "react";
import useFetch from "use-http";
import { API_URL } from "../util/constants";
import { Pokemon } from "../domain/model/Pokemon";
import { transformPokemonDtoToModel } from "../factories/pokemonFactory";

export const usePokemon = () => {
  const [pokemonsList, setPokemonsList] = useState<Pokemon[]>([]);
  const { get } = useFetch(API_URL);
  const POKEMONS_PER_PAGE = 20;
  const PAGES_QUANTITY = 20;

  function getPokemonsList(pageNumber: number = 1) {
    const list: Pokemon[] = [];
    const promises: Promise<any>[] = [];
    const firstPokemon = (pageNumber - 1) * POKEMONS_PER_PAGE + 1;
    for (let i = firstPokemon; i < firstPokemon + POKEMONS_PER_PAGE; i++) {
      promises.push(get(`/v2/pokemon/${i}`));
    }

    Promise.all(promises).then((pokemonResponses) => {
      pokemonResponses.forEach((data) => {
        list.push(transformPokemonDtoToModel(data));
      });
      setPokemonsList(list);
    });
  }

  return {
    pokemonsList,
    getPokemonsList,
    pagesQuantity: PAGES_QUANTITY,
  };
};
