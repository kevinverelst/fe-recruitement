import React from 'react';
import styled from 'styled-components';
import { Theme } from '../../../theme';
import { Move, Pokemon } from '../../../types';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  overflow: auto;
  width: 250px;
  height: 350px;
`;

const Title = styled.div`
  text-transform: uppercase;
  padding-right: 5px;
  color: ${Theme.palette.yellow};
  
`;
const Value = styled.div`
  font-weight: bold;
  color: ${Theme.palette.blue};
  &:hover{
    cursor: pointer;
  }
`;

interface Props {
  pokemon: Pokemon;
  onClickMove: (move: Move) => void;
}

export const PokemonMoves = ({ pokemon, onClickMove }: Props) => {
  const renderMoves = () =>
    pokemon.moves.map(move =>
      <Value onClick={() => onClickMove(move)} key={move.id}>{move.name}</Value>,
    );

  return (
    <Container>
      <Title>Tutor machine level-up</Title>
      {renderMoves()}
    </Container>
  );
};
