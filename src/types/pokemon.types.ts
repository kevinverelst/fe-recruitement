export interface Pokemon {
  id: number;
  name: string;
  image: string;
  abilities: Ability[];
  stats: Stat[];
  types: Type[];
  moves: Move[];
}

export interface Move {
  id: number;
  name: string;
  type: string
  learnMethod: string;
}

export interface Name {
  name: string;
}

export interface Ability extends Name {
}

export interface Type extends Name {
}

export interface Stat extends Name {
  value: number;
}

export interface SelectedPokemon extends Pokemon{
  selectedMoves: Move[];
}
