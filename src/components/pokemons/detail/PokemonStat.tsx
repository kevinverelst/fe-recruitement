import React from 'react';
import styled from 'styled-components';
import { Theme } from '../../../theme';
import { Stat } from '../../../types';

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 200px;
  height: 50px;
`;

const Name = styled.div`
  text-transform: uppercase;
  padding-right: 5px;
  color: ${Theme.palette.yellow};
  
`;
const Value = styled.div`
  font-size: 2em;
  color: ${Theme.palette.blue};
`;

interface Props {
  stat: Stat;
}

export const PokemonStat = ({ stat }: Props) => {
  return (
    <Container>
      <Name>{stat.name}</Name>
      <Value>{stat.value}</Value>
    </Container>
  );
};
