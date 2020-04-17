import { gql } from 'apollo-boost';
import React, { useState } from 'react';
import { useQuery } from 'react-apollo';
import styled from 'styled-components';
import { Theme } from '../../theme';
import { Pokemon } from '../../types';

const textColor = '#F2C960';

const PokemonItem = styled.div`
  background-color: ${Theme.palette.blue};
  color: ${textColor};
  padding: 5px 10px;
  margin: 5px;
  border-radius: 5px;
  text-transform: uppercase;
  
  &:hover{
    cursor: pointer;
    background-color: #2e4874;
  }
`;

const List = styled.div`
  overflow: auto;
  width: 250px;
  height: 300px;
`;

const PokemonContainer = styled.div`
`

const Search = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SearchLabel = styled.span`
  color: ${textColor}; 
  text-transform: uppercase;
  font-weight: bold;
`

const SearchInput = styled.input`
 width: 200px;
 padding: 5px;
 margin: 5px;
 border-color: ${Theme.palette.blue};
 border-width: 2px;
`

interface Props {
  onSelectPokemon: (name: string) => void;
}

export const PokemonList = ({ onSelectPokemon }: Props) => {
  const GET_POKEMONS = gql`
      {
          Pokemons(first: 151) {
              id
              name
          }
      }
  `;
  const { loading, error, data } = useQuery(GET_POKEMONS);
  const [query, setQuery] = useState('');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const getPokemonItems = () =>
    data.Pokemons
      .filter((pokemon: Pokemon) => pokemon.name.indexOf(query) !== -1)
      .map((pokemon: Pokemon) => (
        <PokemonItem key={pokemon.id} onClick={() => onSelectPokemon(pokemon.name)}>
          <span>{pokemon.name}</span>
        </PokemonItem>
      ));

  return (
    <PokemonContainer>
      <Search>
        <SearchLabel>Select a pokemon</SearchLabel>
        <SearchInput placeholder="Type to filter" type="text" onChange={(e) => setQuery(e.target.value)} />
      </Search>
      <List>
        {getPokemonItems()}
      </List>
    </PokemonContainer>
  )
};
