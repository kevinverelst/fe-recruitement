import React from 'react';
import styled from 'styled-components';
import { Theme } from '../../theme';
import { SelectedPokemon } from '../../types';

const Name = styled.div`
  color: ${Theme.palette.white};
  text-transform: uppercase;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // @ts-ignore
  background-color: ${props => Theme.types[props.pokemonType]};
`;

const SelectedMove = styled.div`
  background-color: ${Theme.palette.white};
  color: black;
  border-radius: 5px;
  padding: 5px;
  margin: 5px;
`;

interface Props {
  pokemon: SelectedPokemon;
}

export const SquadPokemon = ({ pokemon }: Props) => {
  const renderSelectedMoves = () => pokemon.selectedMoves.map(move =>
    <SelectedMove>{move.name}</SelectedMove>,
  )
  return (
    // @ts-ignore
    <Container pokemonType={pokemon.types[0]}>
      <img src={pokemon.image} alt={pokemon.name} />
      <Name>{pokemon.name}</Name>
      {renderSelectedMoves()}
    </Container>
  );
}
