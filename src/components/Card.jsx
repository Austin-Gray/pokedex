import React from 'react';
import { Link } from 'react-router-dom';

const Card = props => {
  return (
    <div>
      <Link to='/detail' name={props.name} onClick={props.selectPokemon}>{props.name}</Link>
    </div>
  )
}

export default Card;
