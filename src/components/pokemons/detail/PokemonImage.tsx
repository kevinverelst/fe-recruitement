import React from "react";
import styled from "styled-components";
import { Theme } from '../../../theme';
import { Pokemon } from '../../../types';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 200px;
  flex-direction: column;
`;

const Image = styled.img`
  margin: 0;
  height: 200px;
  width: 200px;
`;

const Name = styled.h1`
  margin-left: 0.5em;
  color: ${Theme.palette.blue};
  text-transform: uppercase;
  font-size: 1.25em;
`;

interface Props {
  pokemon: Pokemon
}

export const PokemonImage = ({ pokemon }: Props) => {
  const { name, image } = pokemon;
  return (
    <Container>
      <Image src={image} />
      <Name>{name}</Name>
    </Container>
  );
};
