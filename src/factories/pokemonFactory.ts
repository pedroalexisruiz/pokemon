import { PokemonDTO } from "../dto/Pokemon";

export const transformPokemonDtoToModel = (pokemon: PokemonDTO) => {
  const typeList: { name: string }[] = [];
  pokemon.types.forEach((type) => {
    typeList.push({ name: type.type.name });
  });
  return {
    id: pokemon.id,
    name: pokemon.name,
    baseExperience: pokemon.base_experience,
    height: pokemon.height,
    order: pokemon.order,
    weight: pokemon.weight,
    frontDefault: pokemon.sprites.front_default,
    types: typeList,
  };
};
