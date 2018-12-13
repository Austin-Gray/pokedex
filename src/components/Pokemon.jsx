import React from 'react';
import Card from './Card';

const Pokemon = props => {
  return (
    <div>
      <ol>
        {props.pokemon.map((species, index) => (
          <Card
            key = {index + 1}
            number = {index + 1}
            name = {species.name}
            selectPokemon = {props.selectPokemon}
          />
        ))}
      </ol>
    </div>
  );
}

export default Pokemon;
