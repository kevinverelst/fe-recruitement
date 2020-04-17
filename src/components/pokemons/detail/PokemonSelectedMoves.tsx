import React from 'react';
import styled from 'styled-components';
import { Theme } from '../../../theme';
import { Move } from '../../../types';
import { PokemonSelectedMove } from './PokemonSelectedMove';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 500px;
  padding: 20px;
`;

const Title = styled.div`
  text-transform: uppercase;
  color: ${Theme.palette.blue};
`;

const MovesContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 500px;
`;

interface Props {
  moves: Move[]
}

export const PokemonSelectedMoves = ({ moves }: Props) => {
  const renderMoves = () =>
    moves.map(move =>
      <PokemonSelectedMove key={move.name} move={move} />,
    );

  return (
    <Container>
      <Title>Selected Moves</Title>
      <MovesContainer>
        {renderMoves()}
      </MovesContainer>
    </Container>
  );
};
