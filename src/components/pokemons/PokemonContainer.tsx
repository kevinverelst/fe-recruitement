import React, { useState } from 'react';
import styled from 'styled-components';
import { SelectedPokemon } from '../../types';
import { PokemonDetail } from './detail/PokemonDetail';
import { PokemonList } from './PokemonList';
import { PokemonSquad } from './PokemonSquad';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Main = styled.div`
  display: flex;
  flex-direction: row;
`;

export const PokemonContainer = () => {
  const [selectedPokemonName, setSelectedPokemonName] = useState('');
  const [selectedPokemons, setSelectedPokemons] = useState<SelectedPokemon[]>([]);

  const onSavePokemon = (pokemon: SelectedPokemon) => {
    if (selectedPokemons.length < 6) {
      setSelectedPokemons([...selectedPokemons, pokemon]);
    }
  }
  // if (loading) return <p>Loading...</p>;
  return (
    <Container>
      <Main>
        <PokemonList onSelectPokemon={setSelectedPokemonName} />
        {selectedPokemonName &&
        <PokemonDetail selectedPokemonName={selectedPokemonName} onSavePokemon={onSavePokemon} />}
      </Main>
      {selectedPokemons && <PokemonSquad selectedPokemons={selectedPokemons} />}
    </Container>)
}
