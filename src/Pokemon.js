import React from 'react';
import { Link } from 'react-router-dom';

export default function Pokemon({ pokemon }) {
  return (
    <Link to={`/pokemons/${pokemon.id}`}>
      <div className='pokemon'>
        <h3>{pokemon.pokemon}</h3>
        <img className='pokemon-img' src={pokemon.url_image} />
      </div>
    </Link>
    
  );
}
