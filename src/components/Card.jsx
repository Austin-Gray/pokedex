import React from 'react';
import { Link } from 'react-router-dom';

const Card = props => {
  return (
    <div>
      <Link to='/detail' className='link' name={props.name} onClick={props.selectPokemon}>{props.capitalize(props.name)}</Link>
      <h5 className='mt-1 mb-1'># {props.number}</h5>
    </div>
  )
}

export default Card;
