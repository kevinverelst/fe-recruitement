import React from 'react';
import styled from 'styled-components';
import { PokemonStat } from '.';
import { Theme } from '../../../theme';
import { Move, Pokemon } from '../../../types';
import { PokemonSelectedMoves } from './PokemonSelectedMoves';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.span`
  text-transform: uppercase;
  color: ${Theme.palette.blue};
  font-weight: bold;
`;

const StatContainer = styled.div`
  display: flex;
  width: 500px;
  height: 150px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: 1em;
`;


interface Props {
  pokemon: Pokemon,
  moves: Move[];
}

export const PokemonStats = ({ pokemon, moves }: Props) => {
  const renderStats = () => pokemon.stats.map(stat => <PokemonStat key={stat.name} stat={stat} />);

  return (
    <Container>
      <Title>Stats</Title>
      <StatContainer>
        {renderStats()}
      </StatContainer>
      <PokemonSelectedMoves moves={moves} />
    </Container>
  );
};
