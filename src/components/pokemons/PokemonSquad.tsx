import React from 'react';
import styled from 'styled-components';
import { SelectedPokemon } from '../../types';
import { SquadPokemon } from './SquadPokemon';

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const Squad = styled.div`
  display: flex;
  
`;

interface Props {
  selectedPokemons: SelectedPokemon[];
}

export const PokemonSquad = ({ selectedPokemons }: Props) => {
  const renderSquadPokemons = () =>
    selectedPokemons.map(pokemon => <SquadPokemon key={pokemon.id} pokemon={pokemon} />)

  return (
    <Container>
      <Squad>
        {renderSquadPokemons()}
      </Squad>
    </Container>)
}
