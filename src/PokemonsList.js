import React from 'react';
import Pokemon from './Pokemon';


export default function PokemonsList({ pokemons }) {
  return (
    <div className='pokemons'>Pokemons List
      {
        pokemons.map((pokemon, i) => 
          <Pokemon key={`${pokemon.name}-${i}`} pokemon={pokemon}/>)
      }
    </div>
  );
}
