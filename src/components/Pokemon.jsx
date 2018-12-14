import React from 'react';
import Card from './Card';

const Pokemon = props => {
  return (
    <div>
      <ol>
        {props.pokemon.map(species => (
          <Card
            key = {species.name}
            name = {species.name}
            selectPokemon = {props.selectPokemon}
            capitalize = {props.capitalize}
          />
        ))}
      </ol>
    </div>
  );
}

export default Pokemon;
