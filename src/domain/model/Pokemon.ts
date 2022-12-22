export interface Pokemon {
  id: number;
  name: string;
  baseExperience: number;
  height: number;
  order: number;
  weight: number;
  frontDefault: string;
  types: Types[];
}

interface Types {
  name: string;
}
