import React from 'react';
import styled from 'styled-components';
import { Theme } from '../../../theme';
import { Move } from '../../../types';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 228px;
  border: 1px solid ${Theme.palette.blue};
  margin: 5px;
  padding: 5px;
`;

const LearnMethod = styled.div`
  text-transform: uppercase;
  color: ${Theme.palette.yellow};
  
`;
const Name = styled.div`
  font-weight: bold;
  color: ${Theme.palette.blue};
  text-transform: capitalize;
  font-size: 16px;
`;

interface Props {
  move: Move;
}

export const PokemonSelectedMove = ({ move}: Props) => {
  return (
    <Container>
      <LearnMethod>{move.learnMethod}</LearnMethod>
      <Name>{move.name}</Name>
    </Container>
  );
};
