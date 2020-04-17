import { gql } from 'apollo-boost';
import React, { useState } from 'react';
import { useQuery } from 'react-apollo';
import styled from 'styled-components';
import { Theme } from '../../../theme';
import { Move, SelectedPokemon } from '../../../types';
import { PokemonImage } from './PokemonImage';
import { PokemonMoves } from './PokemonMoves';
import { PokemonStats } from './PokemonStats';

const Container = styled.div`
  display: flex;
`;

const Button = styled.button`
  background-color: ${Theme.palette.blue};
  color: ${Theme.palette.white};
  width: 200px;
  text-transform: uppercase;
  height: 40px;
  font-weight: bold;
  font-size: 16px;
`;

interface Props {
  selectedPokemonName: string;
  onSavePokemon: (pokemon: SelectedPokemon) => void;
}

export const PokemonDetail = ({ selectedPokemonName, onSavePokemon }: Props) => {
  const GET_POKEMON = gql`
      query Pokemon($name: String!) {
          Pokemon(name: $name) {
              id,
              name,
              image,
              types{
                  name
              }
              abilities{
                  name
              }
              stats{
                  name
                  value
              }
              moves{
                  id
                  name
                  type
                  learnMethod
              }
          }
      }
  `;
  const { loading, error, data } = useQuery(GET_POKEMON, { variables: { name: selectedPokemonName } })
  const [selectedMoves, setSelectedMoves] = useState<Move[]>([]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const pokemon = data.Pokemon;

  const onClickMove = (move: Move) => {
    const foundMove = selectedMoves.find(m => move.id === m.id);
    if (foundMove) {
      setSelectedMoves(selectedMoves.filter(m => m.id !== move.id));
    } else if (selectedMoves.length < 4) {
      setSelectedMoves([...selectedMoves, move]);
    }
  };

  const onClickSavePokemon = () => {
    onSavePokemon({ ...pokemon, selectedMoves })
  }

  return (
    <Container>
      <div>
        <PokemonImage pokemon={pokemon} />
        <Button onClick={onClickSavePokemon}>Save pokemon</Button>
      </div>
      <PokemonStats pokemon={pokemon} moves={selectedMoves} />
      <PokemonMoves pokemon={pokemon} onClickMove={onClickMove} />
    </Container>
  )
}
