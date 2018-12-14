import React from 'react';
import Card from './Card';

const Pokemon = props => {
  return (
    <div className='container text-dark text-center'>
      <div className='row heading jumbotron text-center bg-white mt-3 pb-3'>
        <h1 className='display-3 col-12'>Pokedex</h1>
        <h4 className='col-12'>Gotta Catch 'Em All!</h4>
      </div>
      <div className='row'>
        {props.pokemon.map((species, index) => (
          <div key = {index + 1} className='col-sm-4 p-1'>
            <div className='card bg-light p-3'>
              <Card
                name = {species.name}
                number = {index + 1}
                selectPokemon = {props.selectPokemon}
                capitalize = {props.capitalize}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pokemon;
