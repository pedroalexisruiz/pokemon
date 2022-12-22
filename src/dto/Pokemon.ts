interface TypeDescriptionDTO {
  name: string;
  url: string;
}

interface TypesDTO {
  slot: number;
  type: TypeDescriptionDTO;
}

interface SpritesDTO {
  front_default: string;
}

export interface PokemonDTO {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  order: number;
  weight: number;
  sprites: SpritesDTO;
  types: TypesDTO[];
}
